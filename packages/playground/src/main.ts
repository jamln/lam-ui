import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import LamUi from '@lam-ui/components'

const app = createApp(App)
app.use(LamUi)
app.mount('#app')