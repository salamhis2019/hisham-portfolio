import './assets/base.scss';
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import VueDOMPurifyHTML from 'vue-dompurify-html';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(VueDOMPurifyHTML);
app.use(router).mount("#app");
