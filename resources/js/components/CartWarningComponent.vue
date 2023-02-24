<template>
    <div>
        <div>
        <button-component v-if="cartTotal>0" text="Checkout" color="green" @emitClick="showPopup = true"/>
        <button-component v-else text="Checkout" color="grey" @emitClick="checkout"/>
    <div>
        <div v-if="showPopup" class="popup-message">
        <h3>Total belanja anda Rp. {{ cartTotal }}</h3>
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
import { mapGetters } from 'vuex';

export default {
    data() {
      return {
        showPopup: false,
        showConfirmation: false
      };
    },
    computed:{
  ...mapGetters({
    cartTotal:"cartTotal"
  })
},
  methods: {
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