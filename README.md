<div align="center" style="margin-top: 10px">
  <a href="http://hiprint.io/">
    <img width="100" height="100" src="http://hiprint.io/Content/assets/hi.png">
  </a>
  <a href="https://cn.vuejs.org/">
    <img width="100" height="100" src="https://cn.vuejs.org/images/logo.svg">
  </a>
</div>

[![npm][npm]][npm-url]
[![node][node]][node-url]
[![size][size]][size-url]

# vue-plugin-hiprint
> hiprint for vue2.0

### 咳咳..
第一次写插件(webpack打包这些都不太了解)，不合理的地方欢迎指正<a href="https://github.com/CcSimple/vue-plugin-hiprint/issues">issues</a>。
简单的修改了下`hiprint.bundle.js`引入了相关资源,然后`export hiprint,defaultElementTypeProvider`
#### 详见源码<a href="https://github.com/CcSimple/vue-plugin-hiprint">vue-plugin-hiprint</a>

#### 呃呃.. 记录一下处理过程
> webpack 配置
```javascript
{
  // 引用本地资源, 一些源码中 require('xxx') 需要处理
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'jquery$': path.resolve(__dirname, "./src/hiprint/plugins/jq-3.31.js"),
      // 这两个资源在 plugins/jspdf/canvg.min.js 中的需要
      'rgbcolor$': path.resolve(__dirname, "./src/hiprint/plugins/jspdf/rgbcolor.js"),
      'stackblur-canvas$': path.resolve(__dirname, "./src/hiprint/plugins/jspdf/stackblur-canvas.js"),
    }
  },
  // 全局jQuery问题
  plugins: [
    new webpack.ProvidePlugin({
      jQuery: "jquery",
      $: "jquery"
    }),
  ],
  // 资源处理
  module: {
    rules: [
      // url-loader 处理 jquery.minicolors.png， 转成base64
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          name: '[name].[ext]'
        }
      }
    ]
  }
}
```


## Install
```console
npm install vue-plugin-hiprint
```
## Global use
```javascript
import {hiPrintPlugin} from 'vue-plugin-hiprint'
Vue.use(hiPrintPlugin, '$pluginName')
// then use
this.$pluginName

// for example
this.$pluginName.init();
var hiprintTemplate = new this.$pluginName.PrintTemplate();
var panel = hiprintTemplate.addPrintPanel({ width: 100, height: 130, paperFooter: 340, paperHeader: 10 });
//文本
panel.addPrintText({ options: { width: 140, height: 15, top: 20, left: 20, title: 'hiprint插件手动添加text', textAlign: 'center' } });
//条形码
panel.addPrintText({ options: { width: 140, height: 35, top: 40, left: 20, title: '123456', textType: 'barcode' } });
//二维码
panel.addPrintText({ options: { width: 35, height: 35, top: 40, left: 165, title: '123456', textType: 'qrcode' } });
//长文本
panel.addPrintLongText({ options: { width: 180, height: 35, top: 90, left: 20, title: '长文本：hiprint是一个很好的webjs打印,浏览器在的地方他都可以运行' } });
//表格
panel.addPrintTable({ options: { width: 252, height: 35, top: 130, left: 20, content: $('#testTable').html() } });
//Html
panel.addPrintHtml({ options: { width: 140, height: 35, top: 180, left: 20, content:'' } });
//竖线//不设置宽度
panel.addPrintVline({ options: { height: 35, top: 230, left: 20 } });
//横线 //不设置高度
panel.addPrintHline({ options: { width: 140, top: 245, left: 120 } });
//矩形
panel.addPrintRect({ options: { width: 35, height: 35, top: 230, left: 60 } });
//打印
hiprintTemplate.print({});
//直接打印，需要安装客户端
hiprintTemplate.print2({});
```
## Custom design
```javascript
import {hiprint,defaultElementTypeProvider} from 'vue-plugin-hiprint'
hiprint.init({
  providers: [new defaultElementTypeProvider()]
})
hiprint.PrintElementTypeManager.buildByHtml($('.ep-draggable-item'));
hiprintTemplate = new hiprint.PrintTemplate({
  template: {},
  settingContainer: '#PrintElementOptionSetting',
  paginationContainer: '.hiprint-printPagination'
});
hiprintTemplate.design('#hiprint-printTemplate');
```

## Questions
> design时怎么修改默认图片？
```javascript
<!-- 组件内, 显示的图片-->
<style lang="less" scoped>
/deep/ .hiprint-printElement-image-content {
  img {
    content: url("~@/assets/logo.png");
  }
}
</style>
<!-- App.vue 拖拽时显示的图片-->
<!-- 不要 scoped, 拖拽时是添加到 html body内的-->
<style lang="less">
.hiprint-printElement-image-content {
  img {
    content: url("~@/assets/logo.png");
  }
}
</style>
```



[npm]: https://img.shields.io/npm/v/vue-plugin-hiprint-test.svg
[npm-url]: https://npmjs.com/package/vue-plugin-hiprint-test
[node]: https://img.shields.io/node/v/vue-plugin-hiprint-test.svg
[node-url]: https://nodejs.org
[size]: https://packagephobia.now.sh/badge?p=vue-plugin-hiprint-test
[size-url]: https://packagephobia.now.sh/result?p=vue-plugin-hiprint-test
