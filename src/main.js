import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// style
import '@/style/index.scss'

// el-v-dlc
import ElementVDlc from 'element2-v-dlc'
Vue.use(ElementVDlc)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
