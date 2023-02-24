import Vue from 'vue'
import Vuex from 'vuex'


import example from "./modules/example/actions.js";

Vue.use(Vuex)

import axios from "axios";

const getAllData = async (context) => {
    let response = await axios.get("api/getAllData");

    context.commit("TESTING_AXIOS", response.data);
}

export default new Vuex.Store({
    modules: {
        example
    },
    state: {
        products: [
            { id: 1, name: "Indomie Goreng Rendang", description: "Masakan instan terenak di dunia", stock: 10, price: 3900 },
            { id: 2, name: "Mie Gelas Rendang", description: "Mie instan khusus anak kosan", stock: 5, price: 1500 },
            { id: 3, name: "Bakmi Mewah", description: "Kalau anak kosan jangan macam2 deh", stock: 80, price: 10000 },
            { id: 4, name: "Bakso Urat", description: "Bakso sehat berkhasiat", stock: 0, price: 7000 },
        ],
        cart: [],
        showPopup: false,
        showConfirmation: false

    },
    mutations: {
        ADD_TO_CART(state, product) {
            console.log("Product: ", product);
            const item = state.cart.find(item => item.product.name === product.name);
            console.log("Item: ", item);
            if (item) {
                item.quantity++;
                product.stock--;
            } else {
                state.cart.push({ product, quantity: 1 });
                product.stock--;
            }
            console.log("cart: ", state.cart);
        },
        REMOVE_FROM_CART(state, index) {
            const item = state.cart[index];
            item.product.stock += item.quantity;
            state.cart.splice(index, 1);
        },
        INCREASE_QTY(state, item) {
            item.quantity++;
            item.product.stock--;
        },
        DECREASE_QTY(state, item) {
            item.quantity--;
            item.product.stock++;
        },
        TESTING_AXIOS() {
            console.log("jalan di index.js");
        }

    },
    actions: {
        addToCart({ commit }, product) {
            commit('ADD_TO_CART', product);
        },
        removeFromCart({ commit }, index) {
            console.log("product remove di actions: ", index);
            commit('REMOVE_FROM_CART', index);
        },
        increaseQty({ commit }, item) {
            commit('INCREASE_QTY', item);
        },
        decreaseQty({ commit }, item) {
            commit('DECREASE_QTY', item);
        },




    },
    getters: {
        getProducts: state => state.products,
        getCart: state => state.cart,
        cartTotal: state => {
            return state.cart.reduce((total, item) => {
                return total + (item.quantity * item.product.price);
            }, 0);

        }
    },
    modules: {

    }
})