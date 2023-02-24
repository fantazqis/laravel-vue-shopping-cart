<template>
    <div class="container">
        <div class="card-body text-center">
            <button-component class="mx-1 btn btn-success" @emitClick="getData">GET</button-component>
            <button-component class="mx-1 btn btn-primary" @emitClick="postData">POST</button-component>
            <button-component class="mx-1 btn btn-warning" @emitClick="putData">PUT</button-component>
            <button-component class="mx-1 btn btn-info" @emitClick="patchData">PATCH</button-component>
            <button-component class="mx-1 btn btn-danger" @emitClick="deleteData">DELETE</button-component>
        </div>





        <div>
            <title-component title="Semua Produk" />
            <product-list-component :products="products" @updateCart="updateCart" />
        </div>
        <div>
            <router-link to="/product">
                <button-component text="product"></button-component>
            </router-link>
        </div>
        <div>
            <router-link to="/cart">
                <button-component text="cart"></button-component>
            </router-link>
        </div>

        <hr />
        <div>
            <h3>Total: Rp. {{ total }}</h3>
        </div>
        <div>
            <button-component v-if="total > 0" text="Checkout" color="green" @emitClick="showPopup = true" />
            <button-component v-else text="Checkout" color="grey" @emitClick="checkout" />
            <div>
                <div v-if="showPopup" class="popup-message">
                    <h3>Total belanja anda Rp. {{ total }}</h3>
                    <p>Apakah Anda ingin mengkonfirmasi pesanan Anda?</p>
                    <button-component text="Iya" @emitClick="confirmOrder" />
                    <button-component text="Tidak" @emitClick="showPopup = false" />
                </div>
                <div v-if="showConfirmation" class="popup-message">
                    <p>Pesanan anda telah dikonfirmasi</p>
                    <button-component text="OK" @emitClick="showConfirmation = false" />
                </div>
            </div>
        </div>

    </div>
</template>
  
<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {

            cart: [],
            showPopup: false,
            showConfirmation: false
        };
    },
    computed: {
        ...mapGetters({
            products: 'getProducts'
        }),
        total() {
            let total = 0;
            for (const item of this.cart) {
                total += item.quantity * item.product.price;
            }
            return total;
        }
    },
    methods: {
        updateCart(cart) {
            this.cart = cart
        },
        checkout() {
            alert("Your cart is empty");
            return;
        },
        confirmOrder() {
            this.showPopup = false;
            this.showConfirmation = true;
        },
        getData() {
            console.log("jalan");
            axios.get('/getAllData')
        },
        postData() {
            let payload = {}
            payload.name = this.inputData,
                payload.id = 4
            this.$store.dispatch("/postData", payload)
        },
        putData() {
            let payload = {}
            payload.name = this.inputData,
                payload.id = 1
            this.$store.dispatch("/putData", payload)
        },
        patchData() {
            let payload = {}
            payload.name = this.inputData,
                payload.id = 1
            this.$store.dispatch("/patchData", payload)
        },
        deleteData() {
            let payload = {}
            payload.id = this.inputData,
                this.$store.dispatch("/deleteData", payload)
        }
    }
}

</script>
  