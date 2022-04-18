import Vue from 'vue'
import App from './App.vue'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.use(Antd);

import {hiPrintPlugin} from './index'
Vue.use(hiPrintPlugin)
// hiPrintPlugin.disAutoConnect();

import Storage from 'vue-ls'
let options = {
  namespace: 'hiPrint-',
  name: 'ls',
  storage: 'local',
};
Vue.use(Storage, options);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
