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
                <product-item-component :product="product" />
            </tbody>
        </table>
    </ul>
    </div>
    
  </template>
  
<script>
import { mapGetters } from 'vuex';

export default {

  computed:{
    ...mapGetters({
        products:"getProducts"
    })

    }}
</script>