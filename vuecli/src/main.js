import { createApp } from 'vue'
import App from './App.vue'
import './styles/headerStyle.scss'
import './styles/BlogStyle.scss'
import './styles/InternoHomeStyle.scss'
import './styles/ProjectStyle.scss'
import './styles/BlogDitailsStyle.scss'
import './styles/OurProjectStyle.scss'
import './styles/footerStyle.scss'
import store from './store'
import router from './router'

createApp(App).use(router).use(store).mount('#app')
