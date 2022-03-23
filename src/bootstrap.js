import { createApp } from 'vue'
import MfeOneApp from './MfeOne-App.vue'
import { createRouter, createWebHashHistory } from "vue-router";

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import RouteOne from './views/MfeOne-RouteOne'
import RouteTwo from './views/MfeOne-RouteTwo'

import store from './store/store'

const routes = [
    { path: '/', component: RouteOne },
    { path: '/mfeone-route2', component: RouteTwo },
  ]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })
  
const mount = (el) => {
    const app = createApp(MfeOneApp)
    app.use(router)
    app.use(store)
    app.use(ElementPlus)
    app.mount(el)
    // createApp(App).mount(el);
};
// let app = document.getElementById('app');
// mount(app)

export { mount }
