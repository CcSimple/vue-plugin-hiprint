let path = require('path')
let webpack = require('webpack')

module.exports = {
  publicPath: '/vue-plugin-hiprint',
  outputDir: 'demo',
  assetsDir: 'static',
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        jQuery: "jquery",
        $: "jquery"
      }),
    ],
    resolve: {
      alias: {
        'jquery$': path.resolve(__dirname, "./src/hiprint/plugins/jq-3.31.js"),
        'rgbcolor$': path.resolve(__dirname, "./src/hiprint/plugins/jspdf/rgbcolor.js"),
        'stackblur-canvas$': path.resolve(__dirname, "./src/hiprint/plugins/jspdf/stackblur-canvas.js"),
      },
      extensions: ['*', '.js', '.vue', '.json']
    },
  }
}
