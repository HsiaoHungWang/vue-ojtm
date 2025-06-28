import { createApp } from 'vue'
// vue-router
import router from './router.js'
// pinia

import App from './App.vue'

const app = createApp(App)
app.use(router) //使用 vue-router
app.mount('#app')
