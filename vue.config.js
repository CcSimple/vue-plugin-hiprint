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
