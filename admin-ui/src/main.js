import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

const options = {
  timeout:1000
  // You can set your default options here
};
createApp(App)
  .use(router)
  .use(Toast, options)
  .use(ElementPlus)
  .mount('#app');
