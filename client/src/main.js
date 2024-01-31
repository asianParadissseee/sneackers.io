import {createApp} from 'vue'
import App from './app/app.vue'
import "@/shared/assets/main.css"
import {createPinia} from "pinia";

const app = createApp(App)
app.mount('#app')
app.use(createPinia())
