import { createApp } from 'vue'
import App from './App.vue'

import { Icon } from '@altipla/fa6-icon'
// import './icons'

// import router from './router'
// import store from './store'
// import './assets/style/page.css'


createApp(App).mount('#app')
let app = createApp(App)
app.component(Icon.name, Icon)
app.mount('#sample')
