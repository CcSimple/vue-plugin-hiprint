
### 基于vue-plugin-hiprint v0.0.56,并参考其demo的react实现,具体使用方法请阅读vue-plugin-hiprint的文档

1. 本Demo中添加了部分常用的ts类型声明,如果需要使用其他类型,请自行添加;
2. 将每个template封装成一个context,常用template常用功能封装为内部hooks方便调用;
3. 为同时使用本地打印和中转打印,单独封装了一个socket /src/hiprint/plugins/local-client-socket
4. qrcode和barcode的标题默认状态修改,默认:只隐藏标题,不隐藏测试数据;

### **注意**
 ## **严格模式下 `hiprint.design()` 方法会执行两次,导致出现两个面板**