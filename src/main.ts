import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index"
import store from "./store/myStore.js"
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'



const app = createApp(App)
    .use(router).use(ElementPlus)
app.provide("store", store);

app.mount('#app')
