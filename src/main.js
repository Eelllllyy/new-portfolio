import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {library} from "@fortawesome/fontawesome-svg-core";
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fab, far)
const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')


// createApp(App).use(router).mount('#app')
