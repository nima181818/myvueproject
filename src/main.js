// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import basiccalculater from './components/basiccalculater/basiccalculater'
import calculus from './components/calculus/calculus'
import limitation from './components/limitation/limitation'
import funcCanvas from './components/funcCanvas/funcCanvas'
import newsofmath from './components/newsofmath/newsofmath'
import reglogin from './components/reglogin/reglogin'
import axios from 'axios'
import VeeValidate, { Validator } from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'
Vue.prototype.$axios = axios
Validator.addLocale(zh_CN)
Vue.use(VeeValidate, {
  locale: 'zh_CN'
})
const dictionary = {
  zh_CN: {
    messages: {
      'mylogin': () => '账号格式不正确哦>.<'
    },
    attributes: {
      'mylogin': '账号'
    }

  }
}
Validator.updateDictionary(dictionary)
Vue.use(axios)
Vue.prototype.$axios = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.extend(App)
let router = new VueRouter({

  routes: [
    {
      path: '/components/basiccalculater/basiccalculater',
      component: basiccalculater
    },
    {
      path: '/components/calculus/calculus',
      component: calculus
    },
    {
      path: '/components/limitation/limitation',
      component: limitation
    },
    {
      path: '/components/funcCanvas/funcCanvas',
      component: funcCanvas
    },
    {
      path: '/components/newsofmath/newsofmath',
      component: newsofmath
    },
    {
      path: '/components/reglogin/reglogin',
      component: reglogin
    }

  ]

})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
