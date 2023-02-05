<template>
    <div>
        <ul>
              <table>
                  <thead>
                  <tr>
                      <th>Product Name</th>
                      <th>Quantity</th>
                      <th>Total Price</th>
                      <th></th>
                      <th></th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="(item, index) in cart" :key="index">
                      <td>{{ item.product.name }}</td>
                      <td>{{ item.quantity }}</td>
                      <td>{{ item.quantity * item.product.price }}</td>
                      <td>
                        <button-component v-if="item.quantity > 1" text="-" @emitClick="decreaseQty(item)"/>
                              <button-component v-else text="-" color="grey"/>
                          <button-component v-if="item.product.stock > 0" text="+" @emitClick="increaseQty(item)"/>
                              <button-component v-else text="+" color="grey"/>
                          
                      </td>
                      <td>
                          <button-component text="Delete" color="red" @emitClick="removeFromCart(index)"/>
                      </td>
                  </tr>
                  </tbody>
              </table>
          </ul>
    </div>
</template>

<script>
export default {
    props:{
        cart:{

        }
  },
  methods: {
    removeFromCart(index) {
      const item = this.cart[index];
      item.product.stock += item.quantity;
      this.cart.splice(index, 1);
      this.$emit('updateCart', this.cart)
    },
    increaseQty(item) {
    item.quantity++;
    item.product.stock--;
    this.$emit('updateCart', this.cart)
  },
  decreaseQty(item){
      item.quantity--;
      item.product.stock++;
      this.$emit('updateCart', this.cart)
  }
}}

  </script>
