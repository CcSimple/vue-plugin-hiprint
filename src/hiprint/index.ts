/**
 * NOTE:在react严格模式下，hiprint.design()会执行两次，导致出现两个面板
 */
import { hiprint, defaultElementTypeProvider } from './hiprint.bundle.js'
// 调用浏览器打印js
import './plugins/jquery.hiwprint.js'
// 默认配置 立即执行函数，挂载到window上
import './const/hiprint.config.js'
// 这俩必须引入 lock.css还得在html head里引入
import './css/hiprint.css'
import './css/print-lock.css'
import { version } from '../../package.json'
import { PanelOptions, TemplateJson } from './hiprint-types.js'

/**
 * 自动连接 / 连接
 * cb: 连接回调， (status, msg) {
 *   // status: true/false
 *   // msg: status == true 时 返回socket.connect回调 e
 * }
 */
const autoConnect = function (cb: () => {}) {
	window.autoConnect = true
	window.hiwebSocket &&
		window.hiwebSocket.hasIo() &&
		window.hiwebSocket.start(cb)
}

/**
 * 取消自动连接 / 断开连接
 */
const disAutoConnect = function () {
	window.autoConnect = false
	window.hiwebSocket && window.hiwebSocket.hasIo() && window.hiwebSocket.stop()
}

/**
 * 预览打印，调起系统打印预览
 * provider 左侧拖拽元素
 * template 模版json字符串
 * args 打印数据data, options,
 */
const webPrint = (
	provider = defaultElementTypeProvider,
	template: TemplateJson,
	...args: [data: Object, options?: Partial<PanelOptions>]
) => {
	hiprint.init({
		providers: [provider()],
	})
	var hiprintTemplate = new hiprint.PrintTemplate({
		template: template,
	})
	hiprintTemplate.print(...args)
	return hiprintTemplate
}
/**
 * 单模版直接打印， 需客户端支持
 * provider 左侧拖拽项对象
 * template 模版json字符串
 * args 打印数据data, options,
 */
const clientPrint = (
	provider = defaultElementTypeProvider,
	template: TemplateJson,
	...args: [data: Object, options: Partial<PanelOptions>]
) => {
	hiprint.init({
		providers: [provider()],
	})
	var hiprintTemplate = new hiprint.PrintTemplate({
		template: template,
	})
	hiprintTemplate.print2(...args)
	return hiprintTemplate
}
hiprint.version = version

window.hiprint = hiprint
export {
	autoConnect,
	disAutoConnect,
	hiprint,
	webPrint,
	clientPrint,
	defaultElementTypeProvider,
}
