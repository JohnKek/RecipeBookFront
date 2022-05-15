import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import VueResource from 'vue-resource'
Vue.use(VueRouter)
Vue.use(VueResource)
import router from "@/router";
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  el:'#app',
  router,
})
