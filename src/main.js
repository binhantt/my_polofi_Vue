import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import 'bulma/css/bulma.css'
import { createPinia } from 'pinia';
import './index.css'
const app = createApp(App); 
app.use(router);

app.use(createPinia())
app.mount('#app')