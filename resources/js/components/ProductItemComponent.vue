<template>
      <tr>
        <td>{{ product.name }}</td>
        <td>{{ product.description }}</td>
        <td>{{ product.stock }}</td>
        <td>Rp. {{ product.price }}</td>
        <td> 
            <button-component v-if="product.stock > 0" text="Add to cart" @emitClick="addToCart(product)"/>
            <button-component v-else text="Out of stock" color="grey"/>
        </td>
      </tr>
  </template>
  
  <script>
  export default {
    props: {
        product:{
            required: true,
        }
    },
    methods: {
      addToCart (product) {
        this.$emit('addToCart', product);
      }
    }
  }
  </script>