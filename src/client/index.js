import { createApp } from 'vue'
import { createWebHistory } from 'vue-router'
import App from '../App.vue'
import createRouter from '../router'
import { createPinia } from 'pinia'

const app = createApp(App)

// 路由
const router = createRouter(createWebHistory())
app.use(router)

// pinia
const pinia = createPinia()
app.use(pinia)

router.isReady().then(() => {
  app.mount('#app')
})
