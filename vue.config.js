let path = require('path')
let webpack = require('webpack')
const fs = require("fs");

module.exports = {
  publicPath: '/vue-plugin-hiprint',
  outputDir: 'demo',
  assetsDir: 'static',
  productionSourceMap: false,
  chainWebpack: config => {
    // 打包时 修改package.json 的dependencies
    config.plugin('define').tap(args => {
      if (process.env.NODE_ENV === 'production') {
        const pkgPath = path.join(__dirname, './package.json');
        let pkg = fs.readFileSync(pkgPath);
        pkg.dependencies = {
          "ant-design-vue": "^1.7.8",
          "core-js": "^3.6.5",
          "vue": "^2.5.11",
          "concurrent-tasks": "^1.0.7",
          "vue-ls": "^4.0.0",
          "@claviska/jquery-minicolors": "^2.3.6",
          "canvg": "^4.0.0",
          "html2canvas": "^1.4.1",
          "jquery": "^3.6.0",
          "jsbarcode": "^3.11.5",
          "jspdf": "^2.5.1",
          "nzh": "^1.0.8",
          "socket.io-client": "^3.1.3"
        }
      }
      return args
    })
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        jQuery: "jquery",
        $: "jquery"
      }),
    ],
    resolve: {
      alias: {
      },
      extensions: ['*', '.js', '.vue', '.json']
    },
  }
}
