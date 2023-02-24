import ProductPages from './components/ProductPagesComponent.vue'
import CartPages from './components/CartPagesComponent.vue'
import Example from './components/ExampleComponent.vue'

export const routes = [
    {
        path: "/",
        name: "example",
        component: Example
    },
    {
        path: "/product",
        name: "ProductPages",
        component: ProductPages
    },
    {
        path: "/cart",
        name: "CartPages",
        component: CartPages
    }
]