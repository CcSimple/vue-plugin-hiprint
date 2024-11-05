const path = require('path')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

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
    new CopyPlugin([
      { from: './src/hiprint/css/print-lock.css', to: '' },
    ]),
  ],
  externals: {
    jquery: {
      commonjs: "jquery",
      commonjs2: "jquery",
      amd: "jquery",
      root: "jQuery",
    },
    "@claviska/jquery-minicolors": "@claviska/jquery-minicolors",
    jsbarcode: {
      commonjs: "jsbarcode",
      commonjs2: "jsbarcode",
      amd: "jsbarcode",
      root: "JsBarcode",
    },
    "socket.io-client": {
      commonjs: "socket.io-client",
      commonjs2: "socket.io-client",
      amd: "socket.io-client",
      root: "io",
    },
    "@wtto00/html2canvas": "html2canvas",
    canvg: 'canvg',
    jspdf: "jspdf",
    "bwip-js": 'bwip-js',
    "nzh": "Nzh",
  },
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
        test: /\.css$/,
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
