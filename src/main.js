import { createApp } from 'vue'
import App       from './App.vue'
import router    from './router'
import store     from './store'
import          'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:8000';

let app = createApp(App).use(store).use(router)

app.mount('#app')