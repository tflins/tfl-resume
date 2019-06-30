import Vue from 'vue'
import App from './App.vue'
import './common/scss/fullpage.min.css'
import 'fullpage.js/vendors/scrolloverflow'
import VueFullPage from 'vue-fullpage.js'

Vue.use(VueFullPage)

import './common/scss/index.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
