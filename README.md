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
![image](https://badgen.net/packagephobia/publish/vue-plugin-hiprint)
![image](https://badgen.net/packagephobia/install/vue-plugin-hiprint)

# vue-plugin-hiprint <a href="http://hiprint.io/docs/start">hiprint官方文档</a>
> hiprint for Vue2.x / Vue3.x

### 分支说明
> main： vue2.x + ant1.7.x融合版 及 npm包源代码

> npm_demo： vue2.x + ant1.7.x + npm包使用 示例

> npm_demo_v3： vue3.x + vite + npm包(0.0.18)使用 示例

## 配套直接打印客户端(win/mac/linux)
### <a href="https://gitee.com/CcSimple/electron-hiprint">gitee</a> <a href="https://github.com/CcSimple/electron-hiprint"> github</a>
<div align="center">

![image](./res/tool.jpeg)

</div>

## 演示/截个图咯~
<table>
    <tr>
        <td><img src="https://gitee.com/CcSimple/vue-plugin-hiprint/raw/main/res/img_0.png"/></td>
        <td><img src="https://gitee.com/CcSimple/vue-plugin-hiprint/raw/main/res/img_1.png"/></td>
    </tr>
    <tr>
        <td><img src="https://gitee.com/CcSimple/vue-plugin-hiprint/raw/main/res/img_2.png"/></td>
        <td><img src="https://gitee.com/CcSimple/vue-plugin-hiprint/raw/main/res/img_3.png"/></td>
    </tr>
    <tr>
        <td><img src="https://gitee.com/CcSimple/vue-plugin-hiprint/raw/main/res/gif00.gif"/></td>
        <td><img src="https://gitee.com/CcSimple/vue-plugin-hiprint/raw/main/res/gif01.gif"/></td>
    </tr>
</table>

## 参与/预览 <a href="https://ccsimple.gitee.io/vue-plugin-hiprint/">demo</a>
```console
git clone https://github.com/CcSimple/vue-plugin-hiprint.git
// or
git clone https://gitee.com/CcSimple/vue-plugin-hiprint.git
// init
cd vue-plugin-hiprint
npm i
// 调试预览
npm run serve
// 打包
npm run build
```
## demo调试（显示打印iframe）
```javascript
// 快速显示/隐藏 打印iframe  方便调试 ￣□￣｜｜
// 在浏览器控制台输入：
// 显示打印页面
$('#app').css('display','none');
$('#hiwprint_iframe').css('visibility','visible');
$('#hiwprint_iframe').css('width','100%');
$('#hiwprint_iframe').css('height','251.09mm'); // 这里替换个实际高度才能显示完
// 显示vue页面
$('#app').css('display','block');
$('#hiwprint_iframe').css('visibility','hidden');
```

## 安装使用
```console
// 控制台中输入 以安装npm包
npm install vue-plugin-hiprint
// 在index.html 文件中添加打印所需样式: 当然你也可以调整成 相对链接/自有链接
<link rel="stylesheet" type="text/css" media="print" href="https://cdn.jsdelivr.net/npm/vue-plugin-hiprint@latest/dist/print-lock.css">
```
## 使用示例
```javascript
// main.js中 引入安装
import {hiPrintPlugin} from 'vue-plugin-hiprint'
Vue.use(hiPrintPlugin, '$pluginName')
// 然后使用
this.$pluginName

// 例如
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
## 自定义设计 （详情查看demo目录）
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

## 常见问题
> design时怎么修改默认图片？
```vue
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
> print/print2 打印回调
```javascript
// 浏览器预览打印
hiprintTemplate.print(this.printData, {}, {
  callback: () => {
    console.log('浏览器打印窗口已打开')
  }
})
// 直接打印
hiprintTemplate.print2(printData, {printer: '打印机名称', title: '打印标题'})
hiprintTemplate.on('printSuccess', function (data) {
  console.log('打印完成')
})
hiprintTemplate.on('printError', function (data) {
  console.log('打印失败')
})
```
> 打印重叠 / 样式问题
```javascript
/**
 * 从 0.0.19 起, 在index.html添加:
 * <link rel="stylesheet" type="text/css" media="print" href="https://cdn.jsdelivr.net/npm/vue-plugin-hiprint@latest/dist/print-lock.css">
 * 以处理打印所需css, 当然你也可以自行处理
 * 比如： index.html目录下放一个print-lock.css, 然后在index.html添加:
 * <link rel="stylesheet" type="text/css" media="print" href="/print-lock.css">
 */

// 添加自定义样式
hiprintTemplate.print(this.printData, {}, {
  styleHandler: () => {
    // 这里拼接成放html->head标签内的css/style
    // 1.例如：使用hiprin官网的样式
    let css = '<link href="http://hiprint.io/Content/hiprint/css/print-lock.css" media="print" rel="stylesheet">'
    // 2.重写样式：所有文本红色
    css += '<style>.hiprint-printElement-text{color:red !important;}</style>'
    return css
  }
})
// 直接打印
hiprintTemplate.print2(this.printData, {
  styleHandler: () => {
    // 这里拼接成放html->head标签内的css/style
    // 1.例如：使用hiprin官网的样式
    let css = '<link href="http://hiprint.io/Content/hiprint/css/print-lock.css" media="print" rel="stylesheet">'
    // 2.重写样式：所有文本红色
    css += '<style>.hiprint-printElement-text{color:red !important;}</style>'
    return css
  }
})
```
> 修改默认配置 / 显示/隐藏元素设置参数
```javascript
// 0.0.13， 新增setConfig方法
// 还原配置
hiprint.setConfig()
// 替换配置
hiprint.setConfig({
  movingDistance: 2.5,
  text:{
    supportOptions: [
      {
        name: 'styler',
        hidden: true
      },
      {
        name: 'formatter',
        hidden: true
      },
    ]
  }
})
```
> 取消自动socket连接 / socket连接报错问题
```javascript
/**
 * 取消自动连接
 */
// 在main.js中设置
import {hiPrintPlugin} from 'vue-plugin-hiprint'
Vue.use(hiPrintPlugin,'$hiprint', false);
// hiPrintPlugin 同时提供了 disAutoConnect 方法
hiPrintPlugin.disAutoConnect();
// 在组件中使用 见： demo/design/index.vue
import {disAutoConnect, autoConnect, hiprint} from 'vue-plugin-hiprint'
disAutoConnect();
// 同时 export了 autoConnect，disAutoConnect 方法
/**
 * 连接回调及打印
 */
autoConnect((status,msg) => {
  if (status) {
    hiprintTemplate.print2(printData, {printer: '', title: 'hiprint测试打印'});
  }
});
/**
 * socket连接报错？
 * 由于npm包更新到socket.io 3.x版本，官网提供的客户端，npm包是无法连接的
 * 请使用gitee提供的客户端, 同时gitee客户端可传更多的参数， 如是否打印颜色/打印份数/DPI等
 * 详情electron见：https://www.electronjs.org/zh/docs/latest/api/web-contents
 */
```

## 交流群
<table>
    <tr>
        <td><img src="https://gitee.com/CcSimple/vue-plugin-hiprint/raw/main/res/group.png"/></td>
        <td><img src="https://gitee.com/CcSimple/vue-plugin-hiprint/raw/main/res/wechat.png"/></td>
    </tr>
</table>

> 若过期 加我 备注加群


## 状态/调整/优化
- [x] `vue 插件` 发布npm包,方便直接使用
- [x] `Ant Design Vue demo` 默认拖拽设计、自定义设计、队列打印
- [x] `优化删除元素功能` 支持 backSpace/delete 按键删除
- [x] `优化拖动功能` 调整优化 不允许元素拖出窗口 按住ctrl/command允许脱出窗口外
- [x] `优化框选功能` fix 原只能从上往下框选问题
- [x] `支持修改默认直接打印主机` window.hiwebSocket.setHost("xxx:17521")
- [x] `print优化调整` 支持设置callback 见demo的preview.vue
- [x] `table/tableCustom优化调整` 支持设置options.fields 双击选择字段,
- [x] `table优化调整` 支持设置isEnableInsertColumn/isEnableDeleteColumn等参数，支持插入/删除列
- [x] `table/tableCustom优化调整` 支持设置options.tableHeaderRepeat/tableFooterRepeat 表头/表脚显示模式
- [x] `table优化调整` 支持设置 不显示表头
- [x] `条形码优化调整` fix 条码格式错误的问题（EAN-13、ITF、UPC等）
- [x] `字段名优化调整` 元素的字段名(field) 支持嵌套（eg: a.b.c.d）
- [x] `新增支持不分页(小票打印)` 可设置不分页 table、longText处理
- [x] `新增支持复制/粘贴` 支持 基本元素的ctrl+c/v(复制/粘贴)
- [x] `新增支持设置是否自动连接客户端` 支持 不自动连接'直接打印'客户端
- [x] `新增支持表格设置列显示类型` 支持 设置表格列显示图片、二维码、条形码
- [x] `调整优化表格列拖拽列宽限制` fix 设置旋转角度后 拖拽、跳动、辅助线相关问题
- [x] `npm包新增提供Api打印方法` main.js引入时，Vue原型添加print、print2Api，方便直接打印
- [x] `新增支持多选功能` 按住ctrl/command 多选元素 键盘/鼠标拖动 移动
- [x] `调整优化元素设置旋转角度问题` fix 设置旋转角度后 拖拽、跳动、辅助线相关问题
- [x] `新增支持元素拖拽旋转` 基本元素上新增旋转控制点，拖拽旋转、双击还原
- [x] `调整优化标尺` 使用svg替换原图片标尺，让标尺更清晰
- [x] `新增支持放大缩小功能` 提供模板新增zoom方法(transform：scale)，放大缩小拖动不乱跳
- [x] `调整优化以支持Vue3.x` 调整qrcode.js fix vite项目报错问题
- [x] `元素添加禁止拖拽` panels[n]printElements[m]options.draggable true、false
- [x] `添加对齐api` hiprintTemplate.setElsAlign
- [x] `表格字段添加聚合功能` 表格字段配置 options.columns[n]tableSummary
- [x] `新增支持操作历史记录` 支持ctrl/command+(shift)+z 撤销重做, 并提供hiprintTemplate的undo,redo方法

|setElsAlign 参数说明|说明|
|---|---|
|left|左对齐|
|vertical|居中|
|right|右对齐|
|top|顶部对齐|
|horizontal|垂直居中|
|bottom|底部对齐|
|distributeHor|横向分散|
|distributeVer|纵向分散|

|tableSummary 参数说明|说明|
|---|---|
|-(缺省或不匹配)|不聚合|
|count|计数|
|sum|合计|
|avg|平均值|
|min|最小值|
|max|最大值|

### 咳咳..
第一次写插件(webpack打包这些都不太了解)，不合理的地方欢迎指正<a href="https://github.com/CcSimple/vue-plugin-hiprint/issues">issues</a>。
简单的修改了下`hiprint.bundle.js`引入了相关资源,然后`export hiprint,defaultElementTypeProvider`
#### 详见源码<a href="https://github.com/CcSimple/vue-plugin-hiprint">vue-plugin-hiprint</a>

### 关于如何融合处理
> 自己融合请查看 vue.config.js 对比 hiprint.bundle.js

> webpack.config.js，是npm打包需要处理的


[npm]: https://img.shields.io/npm/v/vue-plugin-hiprint.svg
[npm-url]: https://npmjs.com/package/vue-plugin-hiprint
[node]: https://img.shields.io/node/v/vue-plugin-hiprint.svg
[node-url]: https://nodejs.org
