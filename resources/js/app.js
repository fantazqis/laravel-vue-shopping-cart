/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('button-component', require('./components/ButtonComponent.vue').default);
Vue.component('title-component', require('./components/TitleComponent.vue').default);
Vue.component('product-item-component', require('./components/ProductItemComponent.vue').default);
Vue.component('product-list-component', require('./components/ProductListComponent.vue').default);
Vue.component('cart-list-component', require('./components/CartListComponent.vue').default);
Vue.component('cart-warning-component', require('./components/CartWarningComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import Vue from 'vue';
import VueRotuer from 'vue-router';
import { routes } from './routes';
import store from './store';

Vue.use(VueRotuer);
const router = new VueRotuer({
    mode: 'history',
    routes
});

const app = new Vue({
    el: '#app',
    router,
    store
});
