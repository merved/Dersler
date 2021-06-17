import Vue from 'vue'
import App from './App.vue'
import store from './store'



/*store: içerisinde farklı statelerde verileri tutan
* bi değişken anlamında kullanmıştık.
* */
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
