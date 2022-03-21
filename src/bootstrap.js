import { createApp } from 'vue'
import MfeOneApp from './MfeOne-App.vue'
import { createRouter, createWebHashHistory } from "vue-router";

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import RouteOne from './views/RouteOne'
import RouteTwo from './views/RouteTwo'

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
    { path: '/route1', component: RouteOne },
    { path: '/route2', component: RouteTwo },
  ]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })
  
const mount = (el) => {
    const app = createApp(MfeOneApp)
    app.use(router)
    app.use(ElementPlus)
    app.mount(el)
    // createApp(App).mount(el);
};

// let app = document.getElementById('app');
// mount(app)

export { mount }
