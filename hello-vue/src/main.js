import { createApp } from 'vue'
import App from './App.vue'
import HelloAPI from '@/services/HelloAPI'  //getting data from HelloAPI


let app = createApp(App)

app.config.globalProperties.$hello_api = HelloAPI  // same as imported

app.mount('#app')
