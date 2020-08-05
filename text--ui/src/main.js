import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
//引入icon图标库
import('assets/font/iconfont.css')
//引入ui库
import 'element-ui/lib/theme-chalk/index.css'
//消息提示框
import {Message} from 'element-ui'
Vue.prototype.$message=Message

import {
  Button,
  Form,
  FormItem,
  Input
} from 'element-ui'

Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Button)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
