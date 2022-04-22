let path = require('path')
let webpack = require('webpack')
const fs = require("fs");

module.exports = {
  publicPath: '/vue-plugin-hiprint',
  outputDir: 'demo',
  assetsDir: 'static',
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
      }),
    ],
    resolve: {
      alias: {
      },
      extensions: ['*', '.js', '.vue', '.json']
    },
  }
}
