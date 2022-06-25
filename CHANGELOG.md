版本及更新记录
------------------------------
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
