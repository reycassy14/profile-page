import './style.css';

import { createApp } from 'vue';
import App from './App.vue';
// import VueLazyLoad from 'vue-lazyload'
import router from './router';
import { MotionPlugin } from '@vueuse/motion';

const app = createApp(App);

app.use(MotionPlugin).use(router)

app.mount('#app')
