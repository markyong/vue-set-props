import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css'

import VueSetProps from '../src/index'

Vue.use(ElementUI)

Vue.use(VueSetProps, {
  library: ElementUI,
  setProps: {
    Button: {
      type: 'primary',
      round: true
    },
    Input: {
      clearable: true
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
