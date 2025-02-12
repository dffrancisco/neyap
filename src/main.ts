import { createApp } from 'vue'
import App from './App.vue'
import vuetify from "./plugins/vuetify";
//@ts-ignore
import VueTheMask from 'vue-the-mask'
import Toast from "vue-toastification";

const app = createApp(App);
app.use(vuetify);
//@ts-ignore
app.use(VueTheMask)
app.use(Toast);
app.mount('#app');