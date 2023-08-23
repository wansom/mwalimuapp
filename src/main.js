
import Vue from 'vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue'
import DefaultLayout from './layouts/Default.vue'
import DashboardLayout from './layouts/Dashboard.vue'
import DashboardRTLLayout from './layouts/DashboardRTL.vue'
import router from './router'
import VueSocialSharing from 'vue-social-sharing'
import { Cropper } from 'vue-advanced-cropper'
import '../public/home/css/style.css'
import './scss/app.scss'
import '../public/home/css/nice-select.css'
import '../public/home/css/themify-icons.css'
import '../public/home/css/elegant-icons.css'
import 'vue-advanced-cropper/dist/style.css';

import store from './store'
import { auth } from "./database/index";
import './assets/tailwind.css'
import VueMeta from 'vue-meta'

Vue.use(VueMeta)
Vue.use(Antd);
Vue.use(VueSocialSharing);
Vue.use(Cropper);

Vue.config.productionTip = true

// Adding template layouts to the vue components.
Vue.component("layout-default", DefaultLayout);
Vue.component("layout-dashboard", DashboardLayout);
Vue.component("layout-dashboard-rtl", DashboardRTLLayout);

let app;
auth.onAuthStateChanged((user) => {
  if (!app) {
    app = new Vue({
      router,
      store,
      metaInfo: {
        // if no title is specified, "Dial a Lawyer" will be used as a default title
        title: 'Fikisha mashinani', 
        // all titles will be injected into this template
        titleTemplate: '%s | Fikisha mashinani',
        meta: [
          { property: 'og:site_name', content: 'Dial a Lawyer' },
          { property: 'og:image', content: 'https://firebasestorage.googleapis.com/v0/b/scanpal-f74da.appspot.com/o/banner.jpg?alt=media&token=638b0c97-bd4b-4e0a-8053-874fc7e5bc80'},
          { property: 'og:description', content: 'Our mission is to aid access to justice across Africa by linking verified legal professionals in the justice sector to the market' },
          { name: 'twitter:site', content: '@dialalawyer' },
          { name: 'twitter:description', content: 'Our mission is to aid access to justice across Africa by linking verified legal professionals in the justice sector to the market' },
          // other meta tags...
        ]
      },
      render: (h) => h(App),
    }).$mount("#app");
  }
  if (user) {
    store.dispatch("fetchAllUsers")
  }
  store.dispatch("fetchAllUsers")
  store.dispatch("fetchAllOrders")
  store.dispatch("getAllTransactions")
});