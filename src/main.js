import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import PrimeVue from 'primevue/config';
import primeflex from 'primeflex/primeflex.css'
import primeicons from 'primeicons/primeicons.css'
import i18n from './i18n/index.js'
import router from './router/index.js'
import Material from '@primeuix/themes/material'



const app = createApp(App);

app.use(PrimeVue,{theme:{preset:Material},ripple:true})
    .use(i18n)
    .use(router)
    .mount('#app');