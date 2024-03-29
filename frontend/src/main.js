import './assets/main.css'

import { createApp } from 'vue'
import router from '@/router/index'
import App from './App.vue'
import { createPinia } from 'pinia'

const app = createApp(App)

app.use(createPinia())
app.use(router).mount('#app')
