版本及更新记录
------------------------------
### 💐️  GitHub 提交 PR 合并后可自动发布到 npm 仓库;
### 💐  同时自动更新 GitHub Pages 同步 Gitee;
### 💐  感谢各位贡献者的支持。 🔥

## 0.0.56 (2023-11-19)
> 使用此版本 请更新最新的 print-lock.css

- 点击 ▶ 可查看详情

<details>
  <summary>01. 🌈 新增 条形码、二维码独立元素，使用 bwip-js 库生成 svg </summary>
解决原 text 元素中的条形码、二维码 类型不全，生成条码、二维码不清晰的问题
</details>
<details>
  <summary>02. 🌈 新增 元素参数 国际化 i18n 支持 </summary>
原生为简体中文，英语、德语、西班牙语、法语、意大利语、日语、俄语、繁体中文皆为 AI 机翻，欢迎帮助 [订正](https://github.com/CcSimple/vue-plugin-hiprint/tree/main/src/i18n)。

```js
hiprint.init({
  lang: 'en', // 设置语言 ['cn', 'en', 'de', 'es', 'fr', 'it', 'ja', 'ru', 'cn_tw']
});
```
</details>
<details>
  <summary>03. 🌈 新增 中转服务 node-hiprint-transit 的支持</summary>

[中转服务 node-hiprint-transit](https://github.com/Xavier9896/node-hiprint-transit)

  ```js
  import { hiprint } from 'vue-plugin-hiprint'

  hiprint.init({
      host: 'https://printjs.cn:17521', // 此处输入服务启动后的地址
      token: 'vue-plugin-hiprint',     // 用于鉴权的token
  });

  // or

  hiwebSocket.setHost("https://printjs.cn:17521", "vue-plugin-hiprint")

  console.log(hiwebSocket.clients, hiwebSocket.printerList)

  // 中转服务专有的 api，可获取所有连接中转服务的客户端 v1.0.7
  hiprint.getClients()
  hiwebSocket.getClients()
  ```
详情转至 [文档说明](./README.md#使用-中转服务-node-hiprint-transit-实现代理)
</details>
<details>
  <summary>04. 🌈 新增 客户端信息获取(需客户端^1.0.7)</summary>

原本你可以通过 hiprint.getAddress 或 hiwebSocket.getAddress 获取客户端的 ip、ipv6、mac、dns、all、interface、vboxnext 信息，但是需要你主动调用方法去获取。

在 v1.0.7 中我们仍然保留该方式，但移除了用处不大的 dns、interface、vboxnext 类型，同时在连接成功后自动返回客户端 clientInfo 信息

```js
// 手动获取方法
hiprint.getClientInfo()
// or
hiwebSocket.getClientInfo()
```
```js
console.log(hiwebSocket.clientInfo)

{
  arch: "x64",
  clientUrl: "http://192.168.0.2:17521",
  ip: "192.168.0.2",
  ipv6: "fe80::13f:eb0f:e426:7c92",
  mac: "a1:a2:a3:a4:a5:a6",
  machineId: "12c90ff9-b9f4-4178-9099-9dd326b70c2e",
  platform: "win32",
  printerList: [{
    description: "",
    displayName: "Microsoft Print to PDF",
    isDefault: true,
    name: "Microsoft Print to PDF",
    options: {,
      "printer-location": "",
      "printer-make-and-model": "Microsoft Print To PDF",
      "system_driverinfo": "Microsoft Print To PDF;10.0.19041.3570 (WinBuild.160101.0800);Microsoft® Windows® Operating System;10.0.19041.3570"
    },
    status: 0
  }, {…}, {…}, {…}, {…}, {…}],
  version: "1.0.7",
}
```
</details>
<details>
  <summary>05. 🌈 新增 底部聚合格式化函数 tableSummaryFormatter </summary>
</details>
<details>
  <summary>06. 🌈 新增 表格支持设置测试数据 设计时可设置模拟数据 </summary>
</details>
<details>
  <summary>07. ✨ 调整优化 分组表格头/脚函数 返回更多参数,不再局限于td标签内</summary>
</details>
<details>
  <summary>08. 🐛️ fix 表格最后列(多行表头时) 左边框不显示问题</summary>
</details>
<details>
  <summary>09. 🐛️ fix 修复表格脚计数 将分组头、脚 计算入内的bug</summary>
</details>
<details>
  <summary>10. 🐛️ fix 表格脚设置最后显示，前面分页的页脚位置占位空白</summary>
</details>
<details>
  <summary>11. 🐛️ fix 参数字体大小问题、标尺img max-width 问题(样式问题)</summary>
</details>
<details>
  <summary>12. 🐛️ fix 参数栏删除按钮未触发数据更新问题</summary>
</details>
<details>
  <summary>13. 🐛️ fix 更新多面板模板时, 其他面板点击元素 属性渲染问题</summary>
</details>
<details>
  <summary>14. 🐛️ fix 更新模板json 水印未更新的 bug</summary>
</details>
<details>
  <summary>15. 🐛️ fix 表格合并列后无法自动撑满整个表格容器</summary>
</details>
<details>
  <summary>16. 🐛️ fix 空白表格 卡死bug</summary>
</details>

## 0.0.55-beta14
<details>
  <summary>01. 🌈 添加对中转服务 node-hiprint-transit 的支持</summary>

  [中转服务 node-hiprint-transit](https://github.com/Xavier9896/node-hiprint-transit)

  ```js
  import { hiprint } from 'vue-plugin-hiprint'

  hiprint.init({
      host: 'https://printjs.cn:17521', // 此处输入服务启动后的地址
      token: 'vue-plugin-hiprint',     // 用于鉴权的token
  });

  // or

  hiwebSocket.setHost("https://printjs.cn:17521", "vue-plugin-hiprint")

  console.log(hiwebSocket.clients, hiwebSocket.printerList)

  // 中转服务专有的 api，可获取所有连接中转服务的客户端 v1.0.7
  hiprint.getClients()
  hiwebSocket.getClients()
  ```
  详情转至 [文档说明](./README.md#使用-中转服务-node-hiprint-transit-实现代理)
</details>
<details>
  <summary>02. 🌈 新的客户端信息获取</summary>

原本你可以通过 hiprint.getAddress 或 hiwebSocket.getAddress 获取客户端的 ip、ipv6、mac、dns、all、interface、vboxnext 信息，但是需要你主动调用方法去获取。

在 v1.0.7 中我们仍然保留该方式，但移除了用处不大的 dns、interface、vboxnext 类型，同时在连接成功后自动返回客户端 clientInfo 信息

```js
// 手动获取方法
hiprint.getClientInfo()
// or
hiwebSocket.getClientInfo()
```
```js
console.log(hiwebSocket.clientInfo)

{
  arch: "x64",
  clientUrl: "http://192.168.0.2:17521",
  ip: "192.168.0.2",
  ipv6: "fe80::13f:eb0f:e426:7c92",
  mac: "a1:a2:a3:a4:a5:a6",
  machineId: "12c90ff9-b9f4-4178-9099-9dd326b70c2e",
  platform: "win32",
  printerList: [{
    description: "",
    displayName: "Microsoft Print to PDF",
    isDefault: true,
    name: "Microsoft Print to PDF",
    options: {,
      "printer-location": "",
      "printer-make-and-model": "Microsoft Print To PDF",
      "system_driverinfo": "Microsoft Print To PDF;10.0.19041.3570 (WinBuild.160101.0800);Microsoft® Windows® Operating System;10.0.19041.3570"
    },
    status: 0
  }, {…}, {…}, {…}, {…}, {…}],
  version: "1.0.7",
}
```
</details>

## 0.0.55-beta8(2023-09-12)
<details>
  <summary>01. 🌈 添加国际化 i18n 支持 </summary>

原生为简体中文，英语、德语、西班牙语、法语、意大利语、日语、俄语、繁体中文皆为 AI 机翻，欢迎帮助 [订正](https://github.com/CcSimple/vue-plugin-hiprint/tree/main/src/i18n)。

```js
hiprint.init({
  lang: 'en', // 设置语言 ['cn', 'en', 'de', 'es', 'fr', 'it', 'ja', 'ru', 'cn_tw']
});
```
</details>

## 0.0.55-beta5(2023-09-06)
<details>
  <summary>01. ✨ 调整优化 与打印服务链接添加 token 可选项</summary>
该功能需要 v1.0.7 之后的 <a href="https://gitee.com/CcSimple/electron-hiprint/releases">客户端(electron-hiprint)</a> 配合使用

```js
// 无需自定义 token
hiprint.hiwebSocket.setHost('http://localhost:17521',(connected, e) => {
  console.log('connected', connected);
  console.log('e', e);
})

// 添加自定义 token
hiprint.hiwebSocket.setHost('http://localhost:17521', 'token',(connected, e) => {
  console.log('connected', connected);
  console.log('e', e);
})
```
</details>
<details>
  <summary>02. ✨ 调整优化 hiprint.init 初始化 可以传入 host 、token</summary>

```js
hiprint.init({
  providers: [provider.f],
  host: 'http://localhost:17521', // 可在此处设置连接地址与端口号
  token: 'token' // 可在此处设置连接 token
});
```
</details>

## 0.0.55-beta3(2023-08-16)
<details>
  <summary>01. 🌈 新增 条形码、二维码独立元素，使用 bwip-js 库生成 svg </summary>
解决原 text 元素中的条形码、二维码 类型不全，生成条码、二维码不清晰的问题
</details>

## 0.0.54 (2023-07-05)
**⚠️⚠️⚠️ 破坏性更新 Breaking changes**
> ⚠️ 使用此版本 请更新最新的 print-lock.css
<details>
  <summary>01. 🌈 新增支持 文本换行参数(不换行、隐藏、省略)</summary>
</details>
<details>
  <summary>02. 🌈 新增支持 多面板/批量打印 页码续排/重排 选项</summary>
</details>
<details>
  <summary>03. 🌈 新增支持 多面板选中回调 onSelectPanel 使用场景：当选择回调的时候刷新相关界面设置。</summary>

```javascript
hinnn.event.clear("onSelectPanel");
hinnn.event.on("onSelectPanel", (panel, index, li) => {
  console.log("onSelectPanel", panel, index, li);
});
```
</details>
<details>
  <summary>04. ✨ 调整优化 toPdf 支持导出 指定类型(blob、bloburi、dataurl等)见 demo 示例</summary>
</details>
<details>
  <summary>05. ✨ 调整优化 当表格某一行数据超出最大分页高度时, 无限循环卡死问题(同时给出提示)</summary>
</details>
<details>
  <summary>06. ✨ 调整优化 行/列合并函数 回调新增 tableData, printData</summary>
</details>
<details>
  <summary>07. ✨ 调整优化 表格表头 边框参数</summary>
</details>
<details>
  <summary>08. ✨ 调整优化 旋转角度, input类型为number</summary>
</details>
<details>
  <summary>09. ✨ 调整优化 文本 上下对齐 参数(改用 grid 实现)</summary>
</details>
<details>
  <summary>10. ✨ 调整优化 图片元素 显示 隐藏规则 参数</summary>
</details>
<details>
  <summary>11. 🐛️ fix 缩放后 撤销/重做 再点击元素位置跳动问题</summary>
</details>
<details>
  <summary>12. 🐛️ fix setConfig 参数不生效 bug</summary>
</details>
<details>
  <summary>13. 🐛️ fix 聚合函数 最大/小值 显示 Infinity 问题</summary>
</details>

## 0.0.52 (2023-05-08)
<details>
  <summary>1. 🌈 新增支持 表格设置"每页最大行数"功能</summary>
</details>
<details>
  <summary>2. 🌈 新增支持 双击"格式化函数"等, 填充placeholder</summary>
</details>
<details>
  <summary>3. 🌈 新增支持 "底部聚合合并列数"参数,实现自定义合并列</summary>
</details>
<details>
  <summary>4. ✨ 调整优化 分页规则:不分页时, 移除thead,tfoot. 直接插入到tbody</summary>
</details>
<details>
  <summary>5. ✨ 调整优化 默认provider 新增defaultModule.emptyTable</summary>
</details>
<details>
  <summary>6. 🐛️ fix 框选框 点击时跳位的问题</summary>
</details>
<details>
  <summary>7. 🐛️ fix updateElementType 错误</summary>
</details>
<details>
  <summary>8. 🐛️ fix 设计时 清空水印内容 水印未销毁问题</summary>
</details>
<details>
  <summary>9. 🐛️ fix 行/列合并函数 placeholder 错误</summary>
</details>
<details>
  <summary>10. 🐛️ fix provider 配置表格列,样式函数等参数是函数时,默认getJson未返回其值的问题</summary>
</details>

## 0.0.50 (2023-03-31)
<details>
  <summary>1. 🌈️ 新增支持 水印功能</summary>

```javascript
let json = {
    panels:[
      // 面板设置 水印参数
      // 更多参数可查看本项目 src/hiprint/plugins/watermark.js
      "watermarkOptions": {
        "content": "vue-plugin-hiprint",
          "rotate": 25,
          "timestamp": true,
          "format": "YYYY-MM-DD HH:mm"
      },
    ]
}
```
</details>
<details>
  <summary>2. ✨ 调整优化 多行表头字段渲染问题</summary>
</details>
<details>
  <summary>3. ✨ 调整优化 表头合并问题</summary>
</details>
<details>
  <summary>4. ✨ 调整优化 表格列 部分参数返回默认值问题(getJson不需要返回的值)</summary>
</details>
<details>
  <summary>5. ✨ 调整优化 支持撤销重做 调整表头/调整列字段 操作</summary>
</details>
<details>
  <summary>6. ✨ 调整优化 "行/列合并函数" 添加"rowIndex" 行下标回调</summary>
</details>
<details>
  <summary>7. 🐛️ fix 当有"行/列合并函数" 设置表体行高无效问题</summary>
</details>
<details>
  <summary>8. 🐛️ fix "行/列合并函数" 分页列缺少/塌陷问题 并支持设置 分页是否清除合并内容</summary>
</details>
<details>
  <summary>9. 🐛️ fix tableColumn 参数多次提交问题</summary>
</details>

## 0.0.48 (2023-03-09)
<details>
  <summary>1. ✨ 调整优化 setHost 支持回调</summary>

```javascript
hiprint.hiwebSocket.setHost('http://localhost:17521',(connected, e) => {
  console.log('connected', connected);
  console.log('e', e);
})
```
</details>
<details>
  <summary>2. ✨ 调整优化 参数 draggable:false 时，不显示删除按钮</summary>
</details>
<details>
  <summary>3. ✨ 调整优化 design 网格线支持多面板</summary>
</details>
<details>
  <summary>4. 🐛️ fix 竖线无法旋转 bug</summary>
</details>
<details>
  <summary>5. 🐛️ fix hiprint.init error</summary>
</details>

## 0.0.46 (2023-02-23)
<details>
  <summary>01. 🌈️ 新增支持 多面板名称自定义功能(创建模板添加 "onPanelAddClick" 和 "defaultPanelName" 属性)</summary>

```javascript
let hiprintTemplate = new hiprint.PrintTemplate({
  template: {},
  settingContainer: '#PrintElementOptionSetting',
  paginationContainer: '.hiprint-printPagination',
  defaultPanelName: '默认面板名称', // 默认面板名称(当面板没有 name 属性时)
  onPanelAddClick: (panel, createPanel) => {
    // 修改名称, 可以弹出输入框, 也可以直接修改
    panel.name = '新面板' + (panel.index+1);
    // 记得 调用 createPanel 创建面板
    createPanel(panel);
  },
});
```
</details>
<details>
  <summary>02. 🌈️ 新增支持 吸附线功能 && 优化调整吸附功能 支持设置 吸附阈值等 adsorbMin、showAdsorbLine、adsorbLineMin</summary>

```javascript
hiprint.setConfig({
  adsorbMin: 3, //吸附最小距离pt
  showAdsorbLine: true, //显示吸附线
  adsorbLineMin: 6, //吸附线显示最小距离pt
})
```
</details>
<details>
  <summary>03. 🌈️ 新增支持 table 分组字段函数 和 分组头/脚格式化函数</summary>

```javascript
{
    options: {
      // 分组统计字段
      groupFieldsFormatter: function(groupData,options) {
          return ["name"];
      }
      // 分组表头
      groupFormatter: function(groupData,options) {
          return '<td></td>';
      }
      // 分组表脚
      groupFooterFormatter: function(groupData,options) {
          return '<td></td>';
      }
    }
}
```
</details>
<details>
  <summary>04. 🌈️ 新增支持 design 显示网格 -> design('#id',{ grid: true })</summary>

```javascript
let hiprintTemplate = new hiprint.PrintTemplate({
  template: {},
  settingContainer: '#PrintElementOptionSetting',
});
hiprintTemplate.design('#id',{ grid: true });
```
</details>
<details>
  <summary>05. 🌈️ 新增支持 模板获取测试数据Api getTestData</summary>
</details>
<details>
  <summary>06. 🌈 新增支持 表格列 表格头样式函数 @PromiseAll</summary>
</details>
<details>
  <summary>07. ✨ 调整优化 update功能,支持更新多面板,并选中默认面板 eg: update({},1)</summary>
</details>
<details>
  <summary>08. ✨ 调整优化 更改纸张大小时,按比例设置页脚线高度</summary>
</details>
<details>
  <summary>09. ✨ 调整优化 双击编辑文本时 hover 显示问题</summary>
</details>
<details>
  <summary>10. ✨ 调整优化 多面板 样式美化</summary>
</details>
<details>
  <summary>11. 🐛️ fix 多表格 并排问题</summary>
</details>
<details>
  <summary>12. 🐛️ fix 页眉线/页尾线 宽度问题</summary>
</details>
<details>
  <summary>13. 🐛️ fix 多选元素 拖拽未选中元素 bug</summary>
</details>
<details>
  <summary>14. 🐛️ fix 元素旋转 缩放后 点击跳动问题</summary>
</details>
<details>
  <summary>15. 🐛️ fix 框选时遇hover停滞问题</summary>
</details>
<details>
  <summary>16. 🐛️ fix 其他一些已知小bug</summary>
</details>

## 0.0.44 (2023-01-18)
<details>
  <summary>1. 🌈️  选中元素新增删除按钮</summary>
</details>
<details>
  <summary>2. ✨ 调整优化 页码格式 支持 ${paperNo+1} 增量页码</summary>
</details>
<details>
  <summary>3. ✨ 调整优化 新拖拽元素宽高大小显示</summary>
</details>
<details>
  <summary>4. ✨ 调整优化 hover元素时显示删除按钮及宽高大小</summary>
</details>
<details>
  <summary>5. ✨ 调整优化 当图片元素没设置宽高时,获取宽高大小</summary>
</details>
<details>
  <summary>6. ✨ 调整优化 常见错误 Error 中文提示; 如 tableCustom</summary>
</details>
<details>
  <summary>7. 🐛️ fix 框选后 getSelectEls 无法获取选中元素 bug</summary>
</details>
<details>
  <summary>8. 🐛️ fix table 设置表体行高 自动填充 bug</summary>
</details>

## 0.0.40 (2022-12-26)
<details>
  <summary>1. 🌈️  新增支持 文本、表格聚合添加「转大小写」功能 同时提供 hinnn.toUpperCase 方法</summary>

```javascript
hinnn.toUpperCase('0',10.8) // 十点八
hinnn.toUpperCase('5',10.8) // 人民币壹拾元捌角
hinnn.toUpperCase('7',10.8) // 壹拾元捌角零分
```
</details>
<details>
  <summary>2. 🌈️  新增 表格列"单元格渲染函数"实现自定义单元格内容</summary>

```javascript
// eg: 自定义渲染进度条样式
function(value,row,index,options) {
    return `<progress value='${value}' max="1000"></progress>`;
}
```
</details>
<details>
  <summary>3. ✨ 调整优化 放大/缩小时拖拽元素偏移问题, 缩放后拖拽不进设计器的问题</summary>
</details>
<details>
  <summary>4. ✨ 调整优化 table列 编辑相关问题</summary>
</details>
<details>
  <summary>5. 🐛️ fix 表格"自动补全"导致底部元素重叠bug</summary>
</details>
<details>
  <summary>6. 🐛️ fix 'table' 默认可编辑,插入 bug</summary>
</details>

## 0.0.38 (2022-10-29)
<details>
  <summary>1. 🌈️  新增支持 设置 table列 底部聚合文本(tableSummaryText: '自定义文本) </summary>
</details>
<details>
  <summary>2. 🌈️  新增支持 设置 table列 底部聚合类型左右对齐方式(tableSummaryAlign: 'left/center/right')</summary>
</details>
<details>
  <summary>3. 🌈️  新增支持 设置 table列 底部聚合小数位(tableSummaryNumFormat: '0/1/2/3/4/5/6')</summary>
</details>
<details>
  <summary>4. 🌈️  新增支持 编辑查看 table "空白列"</summary>
</details>
<details>
  <summary>5. ✨ 调整优化 table【多行表头合并】导致"数据错位"及"底部聚合函数"问题</summary>
</details>
<details>
  <summary>6. ✨ 调整优化 table ⚠️ options: "fields"(列字段列表) "tableFields"(表格字段列表)</summary>
</details>
<details>
  <summary>7. ✨ 调整优化 table列 底部聚合类型(tableSummary) 支持 text (仅显示设置的文本)</summary>
</details>
<details>
  <summary>8. 🐛️ fix 模板内"多表格"分页/卡死问题</summary>
</details>
<details>
  <summary>9. 🐛️ fix 一些已知bug (点击看详情)</summary>

```
1.fix toPdf options isDownload bug (toPdf 传3个参数时未正常导出pdf问题)
2.fix size-box font-family bug
3.fix 多行表头编辑bug
4.fix table 卡死问题（模板内"多表格"分页问题）
5.fix table tableSummaryTitle(底部聚合标题) 参数bug
```
</details>

## 0.0.36-fix (2022-10-11)
<details>
  <summary>1. 🐛️ fix webpack/vue2.x npm 引入错误</summary>
</details>

## 0.0.36 (2022-10-10)
**⚠️⚠️⚠️ 破坏性更新 Breaking changes**
<details>
  <summary>1. ⚠️  移除 'tableCustom' 元素 'table' 默认可编辑,插入 </summary>
</details>
<details>
  <summary>2. 🐛 fix 辅助元素 错位问题</summary>
</details>
<details>
  <summary>3. ✨ 调整优化 支持 cdn 引入 (非vue环境也可正常使用)</summary>

```html
<head>
    <!-- 打印样式是必须的，你可以调整成自由链接， 注意名称 print-lock.css -->
    <link rel="stylesheet" type="text/css" media="print" href="https://unpkg.com/vue-plugin-hiprint@0.0.36/dist/print-lock.css" />
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
    <script src="https://unpkg.com/canvg@3.0.10/lib/umd.js"></script>
    <script src="https://unpkg.com/jspdf@2.5.1/dist/jspdf.umd.min.js"></script>
    <script src="https://unpkg.com/html2canvas@1.4.1/dist/html2canvas.js"></script>
    <!-- vue-plugin-hiprint 😃 -->
    <script src="https://unpkg.com/vue-plugin-hiprint@0.0.36/dist/vue-plugin-hiprint.js"></script>
</head>
<body>
<!-- 注意 defer -->
<script defer>
  console.log('vue-plugin-hiprint')
  console.log(window['vue-plugin-hiprint'])
  console.log('hiprint')
  // hiprint 以注入 全局
  console.log(hiprint)
  var autoConnect = window['vue-plugin-hiprint'].autoConnect,
    disAutoConnect = window['vue-plugin-hiprint'].disAutoConnect,
    defaultElementTypeProvider = window['vue-plugin-hiprint'].defaultElementTypeProvider;
</script>
</body>
```
</details>

## ~~0.0.35 (2022-10-10)  beta版~~
<details>
  <summary>1. ⚠️  移除 'tableCustom' 元素 'table' 默认可编辑,插入 </summary>
</details>

## ~~0.0.34-fix (2022-10-10)~~
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

## 0.0.23 (2022-06-15) 之前已调整优化部分

- [x] `vue 插件` 发布npm包,方便直接使用
- [x] `Ant Design Vue demo` 默认拖拽设计、自定义设计、队列打印
- [x] `优化删除元素功能` 支持 backSpace/delete 按键删除
- [x] `优化拖动功能` 调整优化 不允许元素拖出窗口 按住ctrl/command允许拖出窗口外
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
