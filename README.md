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
![image](https://badgen.net/npm/v/vue-plugin-hiprint)
![image](https://badgen.net/github/stars/CcSimple/vue-plugin-hiprint)
![image](https://badgen.net/npm/dw/vue-plugin-hiprint)
![image](https://badgen.net/npm/dm/vue-plugin-hiprint)
![image](https://badgen.net/npm/dy/vue-plugin-hiprint)

# vue-plugin-hiprint
> hiprint for Vue2.x / Vue3.x

### 分支说明
> main： vue2.x + ant1.7.x融合版 及 npm包源代码

> npm_demo： vue2.x + ant1.7.x + npm包使用 示例

> npm_demo_v3： vue3.x + vite + npm包(0.0.18)使用 示例

### 安装使用
> npm install vue-plugin-hiprint
```html
// 在index.html 文件中添加打印所需样式: 当然你也可以调整成 相对链接/自有链接
<link rel="stylesheet" type="text/css" media="print" href="https://cdn.jsdelivr.net/npm/vue-plugin-hiprint@latest/dist/print-lock.css">
```

### <a href="https://ccsimple.gitee.io/vue-plugin-hiprint/">Gitee Demo预览</a>
### <a href="http://hiprint.io/docs/start">hiprint官方文档</a>
### [npm包版本及更新记录](CHANGELOG.md)

## 配套直接打印客户端(win/mac/linux)
### <a href="https://gitee.com/CcSimple/electron-hiprint">gitee客户端源码 / 下载</a><a style="margin-left:10px" href="https://github.com/CcSimple/electron-hiprint"> github客户端源码</a>
<div style="color:red">如果使用npm包或者本项目,请使用如下样子的直接打印客户端(兼容官网的js)</div>
<div style="color:red">如果使用npm包或者本项目,请使用如下样子的直接打印客户端(兼容官网的js)</div>
<div style="color:red">如果使用npm包或者本项目,请使用如下样子的直接打印客户端(兼容官网的js)</div>
<div align="center">

![image](./res/tool.jpeg)

</div>
<div style="color:red">本项目需要上面样式的直接打印客户端; 下载地址见下表:</div>

|版本|下载地址|
|---|---|
|Win64|<a href="https://gitee.com/CcSimple/electron-hiprint/attach_files/1091816/download/hiprint_win_x64-1.0.2.exe">下载</a>|
|Win32|<a href="https://gitee.com/CcSimple/electron-hiprint/attach_files/1091805/download/hiprint_win_x32-1.0.2.exe">下载</a>|
|Linux64 (需要桌面系统)|<a href="https://gitee.com/CcSimple/electron-hiprint/attach_files/1091802/download/hiprint_linux_x64-1.0.2.tar.xz">下载</a>|
|Mac (intel)|<a href="https://gitee.com/CcSimple/electron-hiprint/attach_files/1091808/download/hiprint_mac_intel-1.0.2.dmg">下载</a>|
|Mac (M1)|<a href="https://gitee.com/CcSimple/electron-hiprint/attach_files/1091817/download/hiprint_mac_m1-1.0.2.dmg">下载</a>|



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

## 插件全局引入
```javascript
// main.js中 引入安装
import {hiPrintPlugin} from 'vue-plugin-hiprint'
Vue.use(hiPrintPlugin, '$pluginName')
hiPrintPlugin.disAutoConnect(); // 取消自动连接直接打印客户端
// 然后使用
this.$pluginName

// 引入后使用示例
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

## 组件内引入
```javascript
import {autoConnect, disAutoConnect, hiprint, defaultElementTypeProvider} from 'vue-plugin-hiprint'
// autoConnect(); // 默认 自动连接直接打印客户端
disAutoConnect(); // 取消自动连接直接打印客户端

// 引入后使用示例
hiprint.init();
var hiprintTemplate = new hiprint.PrintTemplate();
var panel = hiprintTemplate.addPrintPanel({ width: 100, height: 130, paperFooter: 340, paperHeader: 10 });
//文本
panel.addPrintText({ options: { width: 140, height: 15, top: 20, left: 20, title: 'hiprint插件手动添加text', textAlign: 'center' } });
//条形码
panel.addPrintText({ options: { width: 140, height: 35, top: 40, left: 20, title: '123456', textType: 'barcode' } });
//二维码
panel.addPrintText({ options: { width: 35, height: 35, top: 40, left: 165, title: '123456', textType: 'qrcode' } });
//长文本
panel.addPrintLongText({ options: { width: 180, height: 35, top: 90, left: 20, title: '长文本：hiprint是一个很好的webjs打印,浏览器在的地方他都可以运行' } });
//打印
hiprintTemplate.print({});
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

## 参与项目
```console
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

## 交流群
<table>
    <tr>
        <td><img src="https://gitee.com/CcSimple/vue-plugin-hiprint/raw/main/res/group.png"/></td>
        <td><img src="https://gitee.com/CcSimple/vue-plugin-hiprint/raw/main/res/wechat.png"/></td>
    </tr>
</table>

> 若过期 加我 备注加群

#### 支持一下项目, 或者请作者喝杯咖啡☕️
<table>
    <tr>
        <td><img src="https://gitee.com/CcSimple/vue-plugin-hiprint/raw/main/res/zWechat.png"/></td>
        <td><img src="https://gitee.com/CcSimple/vue-plugin-hiprint/raw/main/res/zAlipay.png"/></td>
    </tr>
</table>

## 状态/调整/优化
### 截止2022-06-15, npm包0.0.23版本已调整优化下列功能, 后续版本请查看[更新记录](CHANGELOG.md)
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
- [x] `新增坐标位置参数设置` 参数面板新增坐标位置参数,支持同步设置XY坐标,并提供coordinateSync设置默认同步与否
- [x] `新增宽高大小参数设置` 参数面板新增宽高大小参数,支持同步设置宽高,并提供widthHeightSync设置默认同步与否
- [x] `新增显示元素坐标位置` 拖拽时显示XY坐标位置,并支持两种显示默认,设置positionLineMode,坐标显示在辅助线上
- [x] `新增显示元素宽高大小` 点击元素时显示宽高大小,支持重新样式(.resize-panel .size-box)
- [x] `新增设置元素距离api` 多选元素后设置每个元素的间隔(垂直/水平) hiprintTemplate.setElsSpace(10,true)
- [x] `调整优化table表头`  支持动态显示/隐藏表头列, getJson时也返回了所有设置的列
- [x] `新增支持更新拖拽元素api` 通过tid获取拖拽元素/更新拖拽元素 hiprint.updateElementType(tid,(e)=>e)
- [x] `新增支持不打印功能`   设置元素 showInPage: 'none' 打印时不打印
- [x] `新增刷新获取打印机列表api` 连接上客户端时 通过 hiprint.refreshPrinterList 获取最新打印机列表
- [x] `新增获取IP、IPv6、MAC的api` 连接上客户端时 通过 hiprint.getAddress('mac',(data)=>{}) 获取MAC地址
- [x] `新增支持设置元素层级` 设置元素 zIndex: 10 调整元素层级
- [x] `调整优化元素设置fields问题` 设置元素 options.fields: [{"text":'id',"field":'id']; getJson将返回此列表
- [x] `新增支持图片地址选择按钮` new PrintTemplate时 指定 onImageChooseClick: (target) => {target.refresh('url')} 更新图片地址
- [x] `新增支持图片元素设置缩放格式fit`  object-fix: fill|contain|cover|none
- [x] `新增支持text元素修改为barcode/qrcode时调整控制按钮`  右和下控制点 变成 右下控制点(等比缩放)
- [x] `调整优化控制点等比缩放功能`  右下控制点拖动时等比缩放, 按住shift时可自由缩放
- [x] `调整优化元素框选功能`  从右侧参数栏快速从右往左选择时鼠标移动到design内时框选框的大小问题

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

|setElsSpace 使用示例|说明|
|---|---|
|.setElsSpace(10)|垂直距离10(pt)|
|.setElsSpace(10,true)|水平距离10(pt)|

### 咳咳..
第一次写插件(webpack打包这些都不太了解)，不合理的地方欢迎指正<a href="https://github.com/CcSimple/vue-plugin-hiprint/issues">issues</a>。
简单的修改了下`hiprint.bundle.js`引入了相关资源,然后`export hiprint,defaultElementTypeProvider`
#### 详见源码<a href="https://github.com/CcSimple/vue-plugin-hiprint">vue-plugin-hiprint</a>

### 关于如何融合处理
> 自己融合请查看 vue.config.js 对比 hiprint.bundle.js

> webpack.config.js，是npm打包需要处理的

### 开源使用说明
> npm包是基于hiprint官网2.5.4版本基础做的调整及优化;<br/>
> 本人对开源协议理解有限,如有侵权不合理的地方,请联系告知我;<br/>

hiprint 开源协议如下:
```
/**
 * jQuery Hiprint 2.5.4
 *
 * Copyright (c) 2016-2021 www.hinnn.com. All rights reserved.
 *
 * Licensed under the LGPL or commercial licenses
 * To use it on other terms please contact us: hinnn.com@gmail.com
 *
 */
```

### 关于LGPL协议

LGPL是GPL的一个为主要为类库使用设计的开源协议。和GPL要求任何使用/修改/衍生之GPL类库的的软件必须采用GPL协议不同。

LGPL允许商业软件通过类库引用(link)方式使用LGPL类库而不需要开源商业软件的代码。这使得采用LGPL协议的开源代码可以被商业软件作为类库引用并发布和销售。

但是如果修改LGPL协议的代码或者衍生，则所有修改的代码，涉及修改部分的额外代码和衍生的代码都必须采用LGPL协议。

因此LGPL协议的开源代码很适合作为第三方类库被商业软件引用，但不适合希望以LGPL协议代码为基础，通过修改和衍生的方式做二次开发的商业软件采用。

GPL/LGPL都保障原作者的知识产权，避免有人利用开源代码复制并开发类似的产品。

[npm]: https://img.shields.io/npm/v/vue-plugin-hiprint.svg
[npm-url]: https://npmjs.com/package/vue-plugin-hiprint
[node]: https://img.shields.io/node/v/vue-plugin-hiprint.svg
[node-url]: https://nodejs.org
