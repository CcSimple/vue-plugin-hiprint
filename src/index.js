import {hiprint, defaultElementTypeProvider} from './hiprint/hiprint.bundle.js'
require('./hiprint/hiprint.config')

/**
 * 使用 hiprint 提供的 jq-3.31
 * 见webpack.config
 * alias: {
 *     'jquery$': path.resolve(__dirname, "./src/hiprint/plugins/jq-3.31.js")
 *   },
 * plugins: [
 *    new webpack.ProvidePlugin({
 *     jQuery: "jquery",
 *     $: "jquery"
 *   }),
 * ]
 */
function initJquery() {
  if (window !== undefined) {
    window.jQuery = window.$ = jQuery;
  }
}

function initConfig() {

}

initJquery()

let hiPrintPlugin = {
  install: function (Vue, name = '$hiPrint') {
    Object.defineProperty(Vue.prototype, name, {value: hiprint});
	// Vue.component(HiPrint.name, HiPrint) // printPanel.name 组件的name属性
	/**
	 * temp 模版json字符串
	 * data 打印数据
	 * provider 左侧拖拽项对象
	 */
	 Vue.prototype.$print = function (temp,data,provider=defaultElementTypeProvider){//预览打印，调起系统打印预览
		 hiprint.init({
			providers: [new provider()]
		});
		var hiprintTemplate = new hiprint.PrintTemplate({
			template: temp,
		});
		hiprintTemplate.print(data);
	 } 
	 /**
	  * temp 模版json字符串
	  * data 打印数据
	  * provider 左侧拖拽项对象
	  * printInfo 打印相关配置项 如 打印机名称 等
	  * cb 打印成功回调
	  */
	 Vue.prototype.$print2 = function (temp,data,provider=defaultElementTypeProvider,printInfo={},cb){
		 hiprint.init({
			providers: [new provider()]
		});
		var hiprintTemplate = new hiprint.PrintTemplate({
			template: temp,
		});
		hiprintTemplate.print2(printData,printInfo)
		hiprintTemplate.on('printSuccess', function (data) {
			cb(data)
		})
	 } //单模版直接打印， 需客户端支持
  }
}

export {
  hiprint,
  hiPrintPlugin,
  defaultElementTypeProvider,
}


