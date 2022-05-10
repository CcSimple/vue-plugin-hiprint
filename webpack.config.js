const path = require('path')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    'vue-plugin-hiprint.js': './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: '[name]',
    library: 'vue-plugin-hiprint',
    libraryTarget: "umd",
    // libraryTarget: "commonjs2",
    umdNamedDefine: true
  },
  plugins: [
    new webpack.ProvidePlugin({
      jQuery: "jquery",
      $: "jquery"
    }),
    new MiniCssExtractPlugin({
      filename: "print-lock.css",
    })
  ],
  optimization:{
    minimizer:[
      new UglifyJsPlugin({
        sourceMap: true, //方便使用是查看具体错误位置
        parallel: true,  //使用多进程并行运行来提高构建速度
        uglifyOptions: {
          output: {
            comments: false
          },
          compress: {
            drop_debugger: true,
            drop_console: true
          }
        }
      })
    ]
  },
  module: {
    rules: [
      {
        test: /print-lock.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      },
      {
        test: /hiprint.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {}
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          name: '[name].[ext]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'jquery$': path.resolve(__dirname, "./src/hiprint/plugins/jq-3.31.js"),
      'rgbcolor$': path.resolve(__dirname, "./src/hiprint/plugins/jspdf/rgbcolor.js"),
      'stackblur-canvas$': path.resolve(__dirname, "./src/hiprint/plugins/jspdf/stackblur-canvas.js"),
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = 'cheap-module-source-map' //
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
