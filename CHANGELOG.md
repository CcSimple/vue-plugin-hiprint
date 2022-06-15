版本及更新记录
------------------------------
## 0.0.23 (2022-06-15)
### 1.新增支持不打印功能
```
设置元素 options.showInPage: 'none' 打印时不打印
或在右侧参数 '显示规则' 下列选择 '始终隐藏'
```
### 2.新增刷新获取打印机列表api
```javascript
// 连接上客户端时 获取最新打印机列表
hiprint.refreshPrinterList((list)=>{
  console.log(list)
})
```

### 3.新增获取IP、IPv6、MAC的api
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

### 4.新增支持设置元素层级
```
options.zIndex: 10 调整元素层级
或在右侧参数 '元素层级' 中输入 10
```

### 5.调整优化元素设置fields问题
```
(原无法返回此fields列表，且需设置在元素的printElementType中)
设置元素字段名 options.fields: [{"text":'id',"field":'id']
字段名将变成下列选择样式， getJson() 将返回此列表
```
### 6.新增支持图片地址选择按钮
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

### 7. 新增支持图片元素设置缩放格式fit
```
图片元素设置 options.bject-fix: fill|contain|cover|none
或右侧参数 '图片缩放' 下拉选择
```

### 8. 调整优化控制点等比缩放功能
```
text元素修改为barcode/qrcode时调整控制按钮
右下控制点拖动时等比缩放, 按住shift时可自由缩放
```

### 9. 调整优化元素框选功能
```
从右侧参数栏快速从右往左选择时鼠标移动到design内时框选框的大小问题
```
