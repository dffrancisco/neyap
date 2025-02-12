import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios';
import vuetify from "./plugins/vuetify";
//@ts-ignore
import VueTheMask from 'vue-the-mask'
import Toast from "vue-toastification";
import router from "./router";


const app = createApp(App);
app.use(router);
app.use(vuetify);
//@ts-ignore
app.use(VueTheMask)
app.use(Toast);


app.config.globalProperties.axios = axios;


app.mount('#app');