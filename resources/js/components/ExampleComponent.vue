<template>
    <div class="container">
      <div>
        <title-component title="Semua Produk"/>
        <product-list-component :products="products" @updateCart="updateCart"/>
      </div>
      <div>
        <title-component title="Keranjang Belanja"/>
        <product-cart-component :cart="cart" @updateCart="updateCart"/>
      </div>
      <hr />
      <div>
        <h3>Total: Rp. {{ total }}</h3> 
      </div>
      <div>
        <button-component v-if="total>0" text="Checkout" color="green" @emitClick="showPopup = true"/>
        <button-component v-else text="Checkout" color="grey" @emitClick="checkout"/>
    <div>
        <div v-if="showPopup" class="popup-message">
        <h3>Total belanja anda Rp. {{ total }}</h3>
        <p>Apakah Anda ingin mengkonfirmasi pesanan Anda?</p>
        <button-component text="Iya" @emitClick="confirmOrder"/>
        <button-component text="Tidak" @emitClick="showPopup = false"/>
      </div>
      <div v-if="showConfirmation" class="popup-message">
        <p>Pesanan anda telah dikonfirmasi</p>
        <button-component text="OK" @emitClick="showConfirmation = false"/>
      </div>
    </div>
    </div>

    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: [
              { id: 1, name: "Indomie Goreng Rendang", description: "Masakan instan terenak di dunia", stock: 10, price: 3900 },
              { id: 2, name: "Mie Gelas Rendang", description: "Mie instan khusus anak kosan", stock: 5, price: 1500 },
              { id: 3, name: "Bakmi Mewah", description: "Kalau anak kosan jangan macam2 deh", stock: 80, price: 10000 },
              { id: 4, name: "Bakso Urat", description: "Bakso sehat berkhasiat", stock: 0, price: 7000 },
              
          ],
        cart: [],
        showPopup: false,
        showConfirmation: false
      };
    },
    computed: {
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
      }
  }}
  
    </script>
  