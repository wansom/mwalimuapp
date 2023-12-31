import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import './assets/forms.css'
import './assets/landing.css'
import './assets/about.css'
createApp(App).use(store).use(router).mount('#app')
