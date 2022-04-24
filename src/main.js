import { createApp } from 'vue';
import App from './App.vue'
const app = createApp(App);

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
app.use(Antd)

import {hiPrintPlugin} from 'vue-plugin-hiprint'
app.use(hiPrintPlugin);
// hiPrintPlugin.disAutoConnect();

import Storage from 'vue-ls'
let options = {
  namespace: 'hiPrint-',
  name: 'ls',
  storage: 'local',
};
app.use(Storage, options);

app.config.productionTip = false

app.mount('#app')
