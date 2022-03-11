import { createApp } from 'vue'
import App from './MfeOne-App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


const mount = (el) => {
    const app = createApp(App)
    app.use(ElementPlus)
    app.mount(el)
    // createApp(App).mount(el);
};

// let app = document.getElementById('app');
// mount(app)

export { mount }
