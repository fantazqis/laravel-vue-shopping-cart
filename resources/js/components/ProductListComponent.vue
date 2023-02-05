<template>
    <div>
        <ul>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Stock</th>
                    <th>Price</th>
                    <th></th>
                </tr>
            </thead>
            <tbody v-for="product in products" :key="product.id">
                <product-item-component :product="product" @addToCart="addToCart"/>
            </tbody>
        </table>
    </ul>
    </div>
    
  </template>

<script>
export default {
    props: {
        products:{

        }
    },
    data () {
        return {
            cart:[]
    }
  },
  methods: {
    addToCart(product) {
      const item = this.cart.find(item => item.product.name === product.name);
      if (item) {
        item.quantity++;
        product.stock--;
      } else {
        this.cart.push({ product, quantity: 1 });
        product.stock--;
      }

      this.$emit('updateCart', this.cart)
    }
    }}
</script>