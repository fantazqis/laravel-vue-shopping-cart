<template>
    <div>
      <cart-list-component/>
          <cart-warning-component/>
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
    </div>
    
</template>

<script>

  </script>
