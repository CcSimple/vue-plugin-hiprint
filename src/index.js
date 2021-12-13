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
  }
}

export {
  hiprint,
  hiPrintPlugin,
  defaultElementTypeProvider,
}


