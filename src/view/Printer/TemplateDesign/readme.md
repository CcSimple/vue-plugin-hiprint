## hiprint在react18中的应用(以下为个人使用总结,可能存在理解偏差)
  
  **文档参考hiprint.io或vue-plugin-hiprint**

### 1.概念
  hiprint:是一个全局注册的对象,hiprint.init(options)可以理解为启动器,需要初始化的provider在这里传递参数
  provider:即PrintElement拖动布局的核心,
  template:**核心概念** 模板,由hiprint.PrintTemplate(id,panelOptions)方法创建,返回一个template实例,可以理解为一个可以包含**很多面板**的容器.同过template.design(dom)方法挂载到指定节点
  panel:面板,
### 2. 拖动布局(开发设计)
   步骤:1.用PrinterContextProvider 包裹组件,在context中会初始化其他hooks
        2.在useEffect钩子中调用context里的 buildProviders,buildDesigner 用于初始化provider和designer,
        3. 也可以调用hiprint.setConfig自定义元素的设置项
        4. toolbar调用context里的方法,实现修改纸张 放大缩小 导入导出 选择模板等功能
### 3. 预览
   templateInstance.getHtml(data) 获取模板和数据结合渲染的html,$(id).html()显示预览
### 4. 浏览器打印
   template.print(data) 需要提前设置打印机
### 5. 客户端打印和云打印
   在hiprint.init({host:'',token:''})的时候指定ws地址
   本地打印 template.print2(data)
   云打印  需要指定客户端





