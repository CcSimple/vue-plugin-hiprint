import {hiprint, defaultElementTypeProvider} from './hiprint/hiprint.bundle.js'
require('./hiprint/hiprint.config')
// 样式
import "./hiprint/css/hiprint.css"
import "./hiprint/css/print-lock.css"

function initJquery() {
  if (window !== undefined) {
    window.jQuery = window.$ = jQuery;
    window.autoConnect = true;
  }
}

function initConfig() {

}

initJquery()

/**
 * 自动连接 / 连接
 * cb: 连接回调， (status, msg) {
 *   // status: true/false
 *   // msg: status == true 时 返回socket.connect回调 e
 * }
 */
let autoConnect = function(cb) {
  console.log('autoConnect');
  window.autoConnect = true;
  window.hiwebSocket && window.hiwebSocket.hasIo() && window.hiwebSocket.start(cb);
};

/**
 * 取消自动连接 / 断开连接
 */
let disAutoConnect = function() {
  console.log('disAutoConnect');
  window.autoConnect = false;
  window.hiwebSocket && window.hiwebSocket.hasIo() && window.hiwebSocket.stop();
};

let hiPrintPlugin = {
  disAutoConnect,
  install: function (Vue, name = '$hiPrint', autoConnect = true) {
    if (!autoConnect) {
      disAutoConnect();
    }
    let globalVue = Vue.prototype || Vue.config.globalProperties;
    globalVue[name] = hiprint;
    /**
   * 预览打印，调起系统打印预览
	 * provider 左侧拖拽元素
	 * template 模版json字符串
	 * args 打印数据data, options,
	 */
	 globalVue.$print = function (provider = defaultElementTypeProvider, template, ...args) {
		 hiprint.init({
			providers: [new provider()]
		});
		var hiprintTemplate = new hiprint.PrintTemplate({
			template: template,
		});
		hiprintTemplate.print(...args);
		return hiprintTemplate;
	 }
	 /**
    * 单模版直接打印， 需客户端支持
	  * provider 左侧拖拽项对象
	  * template 模版json字符串
	  * args 打印数据data, options,
	  */
	 globalVue.$print2 = function (provider = defaultElementTypeProvider, template, ...args) {
		 hiprint.init({
			providers: [new provider()]
		});
		var hiprintTemplate = new hiprint.PrintTemplate({
			template: template,
		});
		hiprintTemplate.print2(...args);
		return hiprintTemplate;
	 }
  }
}

export {
  autoConnect,
  disAutoConnect,
  hiprint,
  hiPrintPlugin,
  defaultElementTypeProvider,
}


