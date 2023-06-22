import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import './assets/forms.css'

createApp(App).use(store).use(router).mount('#app')
