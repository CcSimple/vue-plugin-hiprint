版本及更新记录
------------------------------
## 0.0.34 (2022-10-10)
<details>
  <summary>1. 🐛 fix 辅助元素 错位问题</summary>
</details>
<details>
  <summary>2. ✨ 调整优化 支持 cdn 引入 (非vue环境也可正常使用)</summary>

```html
<head>
    <!-- 打印样式是必须的，你可以调整成自由链接， 注意名称 print-lock.css -->
    <link rel="stylesheet" type="text/css" media="print" href="https://unpkg.com/vue-plugin-hiprint@0.0.34/dist/print-lock.css" />
    <!-- 下列使用的都是 unpkg提供的 稳定性未知, 建议下载自行处理  -->
    <!-- jquery 必须 -->
    <script src="https://unpkg.com/jquery@3.6.1/dist/jquery.js"></script>
    <!-- 条形码 -->
    <script src="https://unpkg.com/jsbarcode@3.11.5/dist/JsBarcode.all.min.js"></script>
    <!-- 颜色选择器 -->
    <script src="https://unpkg.com/@claviska/jquery-minicolors@2.3.6/jquery.minicolors.min.js"></script>
    <!-- 直接打印(print2)需要 -->
    <script src="https://unpkg.com/socket.io-client@4.5.1/dist/socket.io.min.js"></script>
    <!-- toPdf需要 -->
    <script src="https://unpkg.com/browse/canvg@4.0.1/dist/index.cjs"></script>
    <script src="https://unpkg.com/jspdf@2.5.1/dist/jspdf.umd.min.js"></script>
    <script src="https://unpkg.com/html2canvas@1.4.1/dist/html2canvas.js"></script>
    <!-- vue-plugin-hiprint 😃 -->
    <script src="https://unpkg.com/vue-plugin-hiprint@0.0.34/dist/vue-plugin-hiprint.js"></script>
</head>
```
</details>

## 0.0.32-fix (2022-09-29)
<details>
  <summary>1. 🐛 fix 双击编辑后 拖拽/选中 系列bug</summary>
</details>
<details>
  <summary>2. 🐛 fix 双击编辑 回车/点击其他元素/面板 确认编辑的bug</summary>
</details>

## 0.0.32 (2022-09-28)
<details>
  <summary>1. 🌈 新增支持 双击编辑 text 元素</summary>
</details>
<details>
  <summary>2. 🌈 新增 列参数: tableSummaryTitle 设置是否显示聚合函数标题</summary>
</details>
<details>
  <summary>3. 🌈 新增 参数: pageBreak 强制分页(让元素下一页开始打印)</summary>
</details>
<details>
  <summary>4. 🐛 fix 旋转后 拖拽 边界限制 bug</summary>
</details>
<details>
  <summary>5. 🐛 fix 表格 "一行多组" bug</summary>
</details>

## 0.0.30 (2022-09-01)
<details>
  <summary>1. 🌈 新增支持 选择图片后根据原始宽高自定义调整元素宽高</summary>

```javascript
hiprintTemplate = new hiprint.PrintTemplate({
  onImageChooseClick: (target) => {
    // 测试 3秒后修改图片地址值
    setTimeout(() => {
      // target.refresh(url,options,callback)
      // 自定义处理
      // target.refresh(url,false,(el,width,height)=>{
      //   el.options.width = width;
      //   el.designTarget.css('width', width + "pt");
      //   el.designTarget.children('.resize-panel').trigger($.Event('click'));
      // })
      target.refresh("https://portrait.gitee.com/uploads/avatars/user/1800/5400665_CcSimple_1591166830.png!avatar200", {
        // auto: true, // 根据图片宽高自动等比(宽>高?width:height)
        // width: true, // 按宽调整高
        // height: true, // 按高调整宽
        real: true // 根据图片实际尺寸调整(转pt)
      })
    }, 3000)
  }
})
```
</details>
<details>
  <summary>2. ✨ 调整优化 页脚线/页眉线时相互超过时 进行偏移处理</summary>
</details>
<details>
  <summary>3. ✨ 调整优化 页眉/页脚过近，表格分页卡死情况(无法正常分页计算)</summary>
</details>
<details>
  <summary>4. 🐛 fix 表格分页高度问题(未计算表格脚高度)</summary>
</details>
<details>
  <summary>5. 🐛 fix 表格脚"最后显示"及"底部聚合类型"问题</summary>
</details>
<details>
  <summary>6. 🐛 fix 表格头仅首页显示/不显示时 列宽拖拽调整问题</summary>
</details>

## 0.0.28 (2022-08-08)
<details>
  <summary>1. 🐛 socket.io-client 更新到 4.x</summary>
</details>
<details>
  <summary>2. 🐛 fix 打印预览(getHtml) 页码可拖拽问题</summary>
</details>
<details>
  <summary>3. 🐛 fix 模板不分页时, table design时模板高度问题</summary>
</details>
<details>
  <summary>4. 🐛 fix 分页后辅助元素错位问题</summary>
</details>
<details>
  <summary>5. 🐛 fix getJson 隐藏列未返回问题</summary>
</details>
<details>
  <summary>6. 🐛 fix 表格脚函数'最后显示'无效问题</summary>
</details>
<details>
  <summary>7. ✨ 调整优化 样式引入问题(当没有print-lock.css情况现默认空样式)</summary>
</details>
<details>
  <summary>8. ✨ 调整优化 页眉线问题(小于0时分页显示问题)</summary>
</details>
<details>
  <summary>9. 🐛 fix 新插入列,选择字段后,'列属性' 空白问题</summary>
</details>

## 0.0.26 (2022-07-07)
<details>
 <summary>1. 🌈 新增支持参数面板tabs分组(默认已分组支持自定义分组)</summary>

```javascript
hiprint.setConfig({
  text: {
    tabs: [
      // 隐藏部分 (根据已有分组顺序来)
      {
        name: '测试', options: [
          {
            name: 'title',
            hidden: false
          },
          {
            name: 'field',
            hidden: true
          },
        ]
      },
    ],
  },
  image: {
    tabs: [
      {
        // 整体替换 及当前选项卡 按新参数设定
        replace: true,
        name: '基本', options: [
          {
            name: 'field',
            hidden: false
          },
          {
            name: 'src',
            hidden: false
          },
          {
            name: 'fit',
            hidden: false
          }
        ]
      },
    ],
  }
});
```
</details>
<details>
 <summary>2. 🌈 新增支持拖拽元素 "吸附 / 对齐" 功能</summary>

</details>
<details>
 <summary>3. 🌈 新增Api获取选中元素 "getSelectEls" (框选/按住ctrl/command多选)</summary>

```javascript
// 单选时 返回 [e]
let els = hiprintTemplate.getSelectEls();
console.log(els)
```
</details>
<details>
 <summary>4. 🌈 新增Api更新选中元素参数 "updateOption" </summary>

```javascript
// 更新当前选中元素字体为 12pt
hiprintTemplate.updateOption('fontSize', 12);
// 更新当前选中元素字体粗细为 bolder
hiprintTemplate.updateOption('fontWeight', 'bolder');
```
</details>
<details>
 <summary>5. 🌈 新增Api IPP打印(需客户端1.0.4及以上) "ippPrint","ippRequest" </summary>

```javascript
/**
 * 通过IPP 可以调用打印机所提供的功能
 * 如：创建打印任务，取消打印任务，通过uri打印文档等等 （需要打印机支持）
 * 详见 IPP: https://github.com/williamkapke/ipp
 */
// 不知道打印机 ipp 情况， 可通过 '客户端' 获取一下
const printerList = hiprintTemplate.getPrinterList();
console.log(printerList)
if (!printerList.length) return;
let p = printerList[0];
console.log(p)
// 系统不同， 参数可能不同
let url = p.options['printer-uri-supported'];
// 测试 打印文本
hiprint.ippPrint({
  url: url,
  // 打印机参数： {version,uri,charset,language}
  opt: {},
  action: 'Print-Job',
  // ipp参数
  message: {
    "operation-attributes-tag": {
      "requesting-user-name": "hiPrint", // 用户名
      "job-name": "ipp Test Job", // 任务名
      "document-format": "text/plain" // 文档类型
    },
    // data 需为 Buffer (客户端简单处理了string 转 Buffer), 支持设置 encoding
    // data 需为 Buffer (客户端简单处理了string 转 Buffer), 支持设置 encoding
    // data 需为 Buffer (客户端简单处理了string 转 Buffer), 支持设置 encoding
    // 其他 Uint8Array/ArrayBuffer   默认仅 使用 Buffer.from(data)
    // 其他 Uint8Array/ArrayBuffer   默认仅 使用 Buffer.from(data)
    // 其他 Uint8Array/ArrayBuffer   默认仅 使用 Buffer.from(data)
    // 其他 Uint8Array/ArrayBuffer   默认仅 使用 Buffer.from(data)
    data: 'test test test test test test test',
    encoding: 'utf-8' // 默认可不传
  }
}, (res) => {
  // 执行的ipp 任务回调 / 错误回调
  console.log(res)
}, (printer) => {
  // ipp连接成功 回调 打印机信息
  console.log(printer)
})
```
</details>
<details>
 <summary>6. ✨ 调整优化"拖动方向"功能, 支持按住shift 横向拖动, shift+alt 竖向拖动 </summary>

</details>
<details>
 <summary>7. 🌈 新增支持添加自定义/重写参数 通过setConfig</summary>

```javascript
hiprint.setConfig({
  optionItems: [
    // 自定义添加一个scale参数  （重写及定义一个已存在的name）
    function () {
      function t() {
        // json模板 options 对应键值
        this.name = "scale";
      }
      return t.prototype.css = function (t, e) { // t: 元素对象， e 参数值
        if (t && t.length) {
          if (e) return t.css('transform', 'scale(' + e + ')');
        }
        return null;
      }, t.prototype.createTarget = function (t,i,e) { //  t: 元素对象，i: 元素options, e: 元素printElementType
        return this.target = $('<div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        缩放\n        </div>\n        <div class="hiprint-option-item-field">\n        <input type="number" class="auto-submit"/>\n        </div>\n    </div>'), this.target;
      }, t.prototype.getValue = function () {
        var t = this.target.find("input").val();
        if (t) return parseFloat(t.toString());
      }, t.prototype.setValue = function (t) { //  t: options 对应键的值
        this.target.find("input").val(t);
      }, t.prototype.destroy = function () {
        this.target.remove();
      }, t;
    }(),
  ],
  // 添加到 样式 tab 下的 transform 后面
  text: {
    tabs: [
      {
        name: '基础', options: []
      },
      {
        name: '样式', options: [
          {
            name: 'scale',
            after: 'transform', // 自定义参数，插入在 transform 之后
            hidden: false
          },
        ]
      }
    ]
  }
})
```
</details>
<details>
 <summary>8. 🌈 新增支持 二维码 "容错率" 参数 {L:1, M:0, Q:3, H:2}</summary>

```javascript
// json模板中配置
options: {
  qrcodeLevel: 1 // {L:1, M:0, Q:3, H:2}
}
```
</details>
<details>
 <summary>8. 🐛 一些问题的修复及调整</summary>

```
1. fix 不显示表头时，样式问题
2. fix 元素参数(字体、字间距)对宽高大小框的影响
3. fix printerList、address 回调越来越多的问题
4. fix printSuccess、printError 回调越来越多的问题
5. fix 多选元素 拖拽 辅助线 问题
6. 调整优化 宽高大小/坐标位置 样式 (居中)
7. fix 表格列排序样式问题
8. fix 部分参数设置未及时生效问题（左/右/下边框;上/下/右内边距）
```
</details>

## 0.0.24 (2022-06-26)
<details>
 <summary>1. 🌈 新增支持设置字体列表fontList</summary>

```javascript
hiprintTemplate = new hiprint.PrintTemplate({
  ...,
  // 自定义可选字体（本机已安装字体）
  // 或者使用 hiprintTemplate.setFontList([])
  // 或元素中 options.fontList: []
  fontList: [
    {title:'微软雅黑',value:'Microsoft YaHei'},
    {title:'黑体',value:'STHeitiSC-Light'},
    {title:'思源黑体',value:'SourceHanSansCN-Normal'},
    {title:'王羲之书法体',value:'王羲之书法体'},
    {title:'宋体',value:'SimSun'},
    {title:'华为楷体',value:'STKaiti'},
    {title:'cursive',value:'cursive'},
  ],
```
</details>
<details>
 <summary>2. ✨ 调整优化横/竖线参数，虚线->长虚线、短虚线</summary>

```
详见参数配置
```
</details>
<details>
 <summary>3. 🐛 fix元素多时卡机的问题(hinnn.event导致)</summary>

```
元素多卡顿问题(hinnn.event导致)
```
</details>
<details>
 <summary>4. ✨ 调整优化部分样式问题，并支持重写(辅助线,始终隐藏元素)样式</summary>

```
始终隐藏元素 重写 .alwaysHide css

position/size-box的样式（层级及元素行高影响问题）

/* 拖拽时元素辅助线 */
.toplineOfPosition, .bottomlineOfPosition {
  border: 0;
  border-top: 1px dashed  rgb(169, 169, 169);
}
.leftlineOfPosition, .rightlineOfPosition {
  border: 0;
  border-left: 1px dashed  rgb(169, 169, 169);
}
```
</details>
<details>
 <summary>5. 🐛 ️fix优化表格列显示隐藏/列排序相关问题</summary>

```
```
</details>
<details>
 <summary>6. ✨ 调整优化列选择/列宽调整的问题</summary>

```
```
</details>
<details>
 <summary>7. 🌈 新增支持设置面板参数显示/隐藏</summary>

```javascript
hiprint.setConfig({
  movingDistance: 2.5,
  panel: {
    supportOptions: [
      {
        name: 'firstPaperFooter', // 隐藏 首页页尾
        hidden: true
      },
      {
        name: 'evenPaperFooter', // 隐藏 偶数页页尾
        hidden: true
      },
    ]
  }
})
```
</details>

## 0.0.23 (2022-06-15)
<details>
 <summary>1. 新增支持不打印功能</summary>

```
设置元素 options.showInPage: 'none' 打印时不打印
或在右侧参数 '显示规则' 下列选择 '始终隐藏'
```
</details>
<details>
 <summary>2. 新增刷新获取打印机列表api</summary>

```javascript
// 连接上客户端时 获取最新打印机列表
hiprint.refreshPrinterList((list)=>{
  console.log(list)
})
```
</details>

<details>
 <summary>3. 新增获取IP、IPv6、MAC的api</summary>

```javascript
// 连接上客户端时 获取MAC地址等
/**
 * 参数格式：
 * 1. 类型（ip、ipv6、mac、dns、all、interface、vboxnet）
 * 2. 回调 data => {addr, e}  addr: 返回的数据 e:错误信息
 * 3. 其他参数 ...args
 */
hiprint.getAddress('mac',(data)=>{
  console.log('mac')
  console.log(data)
})
```
</details>

<details>
 <summary>4. 新增支持设置元素层级</summary>

```
options.zIndex: 10 调整元素层级
或在右侧参数 '元素层级' 中输入 10
```
</details>

<details>
 <summary>5. 调整优化元素设置fields问题</summary>

```
(原无法返回此fields列表，且需设置在元素的printElementType中)
设置元素字段名 options.fields: [{"text":'id',"field":'id']
字段名将变成下列选择样式， getJson() 将返回此列表
```
</details>

<details>
 <summary>6. 新增支持图片地址选择按钮</summary>

```javascript
hiprintTemplate = new hiprint.PrintTemplate({
  template: panel,
  // 图片选择功能
  onImageChooseClick: (target) => {
    // target.getValue()
    // 测试 3秒后修改图片地址值
    setTimeout(()=>{
      target.refresh("url")
    },3000)
  },
  settingContainer: '#PrintElementOptionSetting',
});
```
</details>

<details>
 <summary>7. 新增支持图片元素设置缩放格式fit</summary>

```
图片元素设置 options.bject-fix: fill|contain|cover|none
或右侧参数 '图片缩放' 下拉选择
```
</details>

<details>
 <summary>8. 调整优化控制点等比缩放功能</summary>

```
text元素修改为barcode/qrcode时调整控制按钮
右下控制点拖动时等比缩放, 按住shift时可自由缩放
```
</details>

<details>
 <summary>9. 调整优化元素框选功能</summary>

```
从右侧参数栏快速从右往左选择时鼠标移动到design内时框选框的大小问题
```
</details>
