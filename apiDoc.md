# 连接客户端、中转文档

## 1. 连接客户端或中转

### 1.1 hiprint init 时入参 `host`、`token`

```js
hiprint.init({
  ...otherOptions,
  host: "http://localhost:17521", // 桌面客户端地址
  token: "vue-plugin-hiprint", // 客户端设置的令牌
});
```

### 1.2 调用 hiwebsocket 提供的 api

```js
hiwebSocket.setHost(
  "http://localhost:17521",
  "vue-plugin-hiprint",
  // callback
  (connect) => {
    if (connect) {
      console.log("连接成功");
      // do something after connected
    } else {
      console.log("连接失败");
    }
  }
);
```

### 1.3 连接中转服务器

```js
hiprint.init({
  ...otherOptions,
  host: "https://v5.printjs.cn:17521", // 桌面客户端地址
  token: "hiprint-17521", // 中转服务器设置的令牌
});

// OR

hiwebSocket.setHost(
  "https://v5.printjs.cn:17521",
  "hiprint-17521",
  // callback
  (connect) => {
    if (connect) {
      console.log("连接成功");
      // do something after connected
    } else {
      console.log("连接失败");
    }
  }
);
```

> [!TIP]
> 如果你使用公益中转服务器 [v5.printjs.cn:17521](https://github.com/Xavier9896/node-hiprint-transit#%E5%85%8D%E8%B4%B9%E6%9C%8D%E5%8A%A1-%E7%94%A8%E7%88%B1%E5%8F%91%E7%94%B5) `token` 支持通配符，请设置一个唯一的 `token`
>
> `hiprint-test-1`、`hiprint-17521`、`hiprint_10086`。
>
> 更多中转相关信息请查看 [node-hiprint-transit](https://github.com/Xavier9896/node-hiprint-transit) 文档

## 2. 获取客户端或中转信息

### 2.1 直连客户端

#### 2.1.1 获取客户端信息 clientInfo

连接成功后客户端会主动发送客户端信息到 web。

```js
// 连接成功的情况下从 hiwebSocket 获取客户端信息
if (hiwebSocket.opened) {
  console.log("客户端信息：", hiwebSocket.clientInfo);
}
```

<details>
    <summary>查看示例数据</summary>

```js
clientInfo = {
  hostname: "Admin", // 主机名
  version: "1.0.13", // 客户端版本
  platform: "win32", // 平台类型
  arch: "x64", // 系统架构
  mac: "d0:46:0c:97:4b:68", // mac 地址
  ip: "192.168.0.114", // 设备 ip
  ipv6: "fe80::2157:4b26:1c2f:c4ca", // 设备 ipv6
  clientUrl: "http://192.168.0.114:17521", // 本地服务地址
  machineId: "0e8b222e-517b-491e-883a-b6283a62e280", // 设备唯一 ID（可用于标识）
  nickName: "打印客户端", // 客户端设置的友好昵称（可用于显示、标识）
};
```

</details>

调用 api 获取最新的客户端信息

> [!TIP]
> 基本上无需调用该 API，客户端修改配置、重启会重新连接，直接从 `hiwebSocket.clientInfo` 获取即可，如果你确实需要也可以手动调用

```js
hiprint.getClientInfo((clientInfo) => {
  console.log("最新客户端信息：", clientInfo);
});
// OR
hiwebSocket.getClientInfo();
hinnn.event.on("clientInfo", (clientInfo) => {
  console.log("最新客户端信息：", clientInfo);
});
```

#### 2.1.2 直连客户端，获取打印机列表 printerList

连接成功后客户端会主动发送打印机列表到 web。

```js
// 在连接成功的情况下从 hiwebSocket 获取打印机列表
if (hiwebSocket.opened) {
  console.log("打印机列表：", hiwebSocket.printerList);
}
```

<details>
    <summary>查看示例数据</summary>

```js
printerList = [
  {
    description: "",
    displayName: "Microsoft Print to PDF",
    isDefault: true,
    name: "Microsoft Print to PDF",
    options: {
      "printer-location": "",
      "printer-make-and-model": "Microsoft Print To PDF",
      system_driverinfo:
        "Microsoft Print To PDF;10.0.19041.3570 (WinBuild.160101.0800);Microsoft® Windows® Operating System;10.0.19041.3570",
    },
    status: 0,
  }, {…}, {…}
];
```

</details>

调用 api 获取最新的打印机列表

```js
hiprint.refreshPrinterList((printerList) => {
  console.log("最新打印机列表：", printerList);
});
// OR
hiwebSocket.refreshPrinterList();
hinnn.event.on("printerList", (printerList) => {
  console.log("最新打印机列表：", printerList);
});
```

#### 2.1.3 获取纸张信息 仅 win 支持，需主动请求

```js
// 获取指定打印机纸张信息
hiwebSocket.getPaperSizeInfo(printerName);
// 获取所有打印机纸张信息
hiwebSocket.getPaperSizeInfo();
hinnn.event.on("paperSizeInfo", (paperSize) => {
  console.log(`${printerName} 纸张：`, paperSize);
});
```

<details>
    <summary>查看示例数据</summary>

```js
paperSize = [
  {
    "PrinterName": "Microsoft Print to PDF",
    "TaskNumber": 0, // 打印队列任务数
    "Status": 0, // 打印机状态码
    "StatusMsg": "准备就绪（Ready）", // 打印机状态信息
    "PaperSizes": [
      {
        "Height": 1100,
        "Kind": 1,
        "PaperName": "信纸",
        "RawKind": 1,
        "Width": 850
      },
      {...}, {...}, {...}
    ]
  }
]
```

</details>

### 2.2 连接中转服务器

#### 2.2.1 获取客户端集合 clients

连接成功后中转服务器会主动发送 clients 到 web。

```js
// 在连接成功的情况下从 hiwebSocket 获取客户端集合
if (hiwebSocket.opened) {
  console.log("客户端集合：", hiwebSocket.clients);
}
```

调用 api 获取最新的客户端集合

```js
hiprint.getClients((clients) => {
  console.log("客户端集合：", clients);
});
// OR
hiwebSocket.getClients();
hinnn.event.on("clients", (clients) => {
  console.log("客户端集合：", clients);
});
```

<details>
    <summary>查看示例数据</summary>

```js
paperSize = {
  HB2OhMUEJuQx9YdxAAAV: {
    clientId: "HB2OhMUEJuQx9YdxAAAV",
    printerList: [
      {
        name: "导出为WPS PDF",
        displayName: "导出为WPS PDF",
        description: "",
        status: 0,
        isDefault: false,
        options: {
          "printer-location": "",
          "printer-make-and-model": "Kingsoft Virtual Printer Driver",
          system_driverinfo:
            "Kingsoft Virtual Printer Driver;0,3,0,0;WPS Office;12,1,0,19768",
        },
      }, {...}, {...}
    ],
    hostname: "PC-2024111111",
    version: "1.0.13",
    platform: "win32",
    arch: "x64",
    mac: "aa:bb:cc:dd:ee:ff",
    ip: "192.168.1.2",
    ipv6: "240e:390:96a4:bb70:1486:fcc8:3ed9:42be",
    clientUrl: "http://192.168.1.2:17521",
    machineId: "5a6f6a42-fb17-4b3f-bc2f-3fb104f4910a",
    nickName: "打印客户端1",
  },
  "wHOB6kn6JkPLV-b5AAAm": {
    clientId: "wHOB6kn6JkPLV-b5AAAm",
    printerList: [
      {
        name: "TSC TTP-244",
        displayName: "TSC TTP-244",
        description: "",
        status: 0,
        isDefault: true,
        options: {
          "printer-location": "",
          "printer-make-and-model": "TSC TTP-244",
          system_driverinfo:
            "TSC TTP-244;0.3.0.0;Seagull Printer Drivers;1.0.0",
        },
      }, {...}, {...}
    ],
    hostname: "PC-2025111111",
    version: "1.0.13",
    platform: "win32",
    arch: "x64",
    mac: "aa:bb:cc:dd:ee:ff",
    ip: "192.168.1.3",
    ipv6: "fe80::99e:98ee:16f:18",
    clientUrl: "http://192.168.127.111:17521",
    machineId: "48017401-113e-4394-a348-2526f0c9031b",
    nickName: "打印客户端2",
  },
};
```

</details>

#### 2.2.2 获取打印机列表 printerList

连接成功后中转服务器会主动发送打印机列表到 web。

```js
// 在连接成功的情况下从 hiwebSocket 获取打印机列表
if (hiwebSocket.opened) {
  console.log("打印机列表：", hiwebSocket.printerList);
}
```

<details>
    <summary>查看示例数据</summary>

与直连 `electron-hiprint` 类似的数据结构，不同的地方在于 `printer` 对象中会多一个 `server` 对象，该对象指示了打印机所属的客户端信息，方便可以快速根据打印机反选出客户端。

```diff
printerList = [
  {
    name: "导出为WPS PDF",
    displayName: "导出为WPS PDF",
    description: "",
    status: 0,
    isDefault: false,
    options: {
      "printer-location": "",
      "printer-make-and-model": "Kingsoft Virtual Printer Driver",
      system_driverinfo:
        "Kingsoft Virtual Printer Driver;0,3,0,0;WPS Office;12,1,0,19768",
    },
+   server: {
+     clientId: "2EhIpBydILmQRrVLAAAE",
+     hostname: "PC-2024111111",
+     version: "1.0.13",
+     platform: "win32",
+     arch: "x64",
+     mac: "fc:34:97:be:39:3f",
+     ip: "192.168.1.2",
+     ipv6: "240e:390:96a4:bb70:1486:fcc8:3ed9:42be",
+     clientUrl: "http://192.168.1.2:17521",
+     machineId: "5a6f6a42-fb17-4b3f-bc2f-3fb104f4910a",
+     nickName: "打印客户端1",
+   },
  }, {...}, {...}
];
```

</details>

## 3. 打印

### 3.1 直连 `electron-hiprint` 静默打印

#### 3.1.1 打印 hiprint 模板

```js
const hiprintTemplate = new hiprint.PrintTemplate({
  template: {}, // 模板json对象
});
// 单一模板静默打印
hiprintTemplate.print2(
  printData, // Object | Array<Object> 打印数据，数组时为批量打印
  { ...offsetOption, printer: "打印机名称", title: "打印任务名称" }
);
hiprintTemplate.on("printSuccess", (res) => {
  console.log("打印成功", res);
});
hiprintTemplate.on("printError", (err) => {
  console.error("打印失败", err);
});

// OR

// 多模板静默打印
hiprint.print2(
  {
    templates: [
      {
        template: hiprintTemplate,
        data: printData, // Object | Array<Object> 打印数据，数组时为批量打印
        options: {
          printer: "Microsoft Print to PDF", // 打印机名称
          copies: 2, // 打印份数
          landscape: false, // 是否横向打印
        },
      },
      // 支持多模板，在此处继续添加如上格式即可
    ],
  },
  (res) => {
    console.log("打印成功", res);
  },
  (err) => {
    console.error("打印失败", err);
  }
);
```

#### 3.1.2 render api 获取 jpeg、pdf、打印

> [!TIP]
> render api 是 `electron-hiprint@^1.0.12-beta7` 扩展支持的功能，hiprint 中未对这些 api 提供内置，直接调用 `hiwebSocket.socket` 发送即可。
>
> 详见 [模板+data 或 html 返回 jpeg、pdf、打印](https://github.com/CcSimple/electron-hiprint#%E6%A8%A1%E6%9D%BFdata-%E6%88%96-html-%E8%BF%94%E5%9B%9E-jpegpdf%E6%89%93%E5%8D%B0)

```js
const socket = hiwebSocket.socket;
socket.emit("render-jpeg", {
  template: panel, // 模板对象
  data: printData, // Object打印数据
});
socket.emit("render-jpeg", {
  html: "html字符串", // html 字符串
});
socket.on("render-jpeg-success", (data) => {
  // data.buffer
});
socket.on("render-jpeg-error", (data) => {
  // data.msg
});
```

### 3.2 中转打印

> [!IMPORTANT]
>
> 前置条件，获取 `clients`，参考 [2.2.1 获取客户端集合 clients](#221-获取客户端集合-clients)

#### 3.2.1 打印 hiprint 模板

```js
const hiprintTemplate = new hiprint.PrintTemplate({
  template: {}, // 模板json对象
});
// 单一模板静默打印
hiprintTemplate.print2(
  printData, // Object | Array<Object> 打印数据，数组时为批量打印
  {
    client: "HB2OhMUEJuQx9YdxAAAV", // 客户端 ID
    printer: "打印机名称",
    title: "打印任务名称",
  }
);
hiprintTemplate.on("printSuccess", (res) => {
  console.log("打印成功", res);
});
hiprintTemplate.on("printError", (err) => {
  console.error("打印失败", err);
});

// OR

// 多模板静默打印
hiprint.print2(
  {
    templates: [
      {
        template: hiprintTemplate,
        data: printData, // Object | Array<Object> 打印数据，数组时为批量打印
        options: {
          printer: "Microsoft Print to PDF", // 打印机名称
          copies: 2, // 打印份数
          landscape: false, // 是否横向打印
        },
      },
      // 支持多模板，在此处继续添加如上格式即可
    ],
    options: {
      clientId: "HB2OhMUEJuQx9YdxAAAV", // 客户端 ID
    },
  },
  (res) => {
    console.log("打印成功", res);
  },
  (err) => {
    console.error("打印失败", err);
  }
);
```

#### 3.2.2 render api 获取 jpeg、pdf、打印

> [!TIP]
> render api 是 `electron-hiprint@^1.0.12-beta7` 扩展支持的功能，hiprint 中未对这些 api 提供内置，直接调用 `hiwebSocket.socket` 发送即可。
>
> 详见 [模板+data 或 html 返回 jpeg、pdf、打印](https://github.com/CcSimple/electron-hiprint#%E6%A8%A1%E6%9D%BFdata-%E6%88%96-html-%E8%BF%94%E5%9B%9E-jpegpdf%E6%89%93%E5%8D%B0)

```js
const socket = hiwebSocket.socket;
socket.emit("render-jpeg", {
  clientId: "HB2OhMUEJuQx9YdxAAAV", // 客户端 ID
  template: panel, // 模板对象
  data: printData, // Object打印数据
});
socket.emit("render-jpeg", {
  clientId: "HB2OhMUEJuQx9YdxAAAV", // 客户端 ID
  html: "html字符串", // html 字符串
});
socket.on("render-jpeg-success", (data) => {
  // data.buffer
});
socket.on("render-jpeg-error", (data) => {
  // data.msg
});
```

# 4. 写在最后

[hiprint](https://github.com/hinnncom/hiprint) 原包中并没有内置 [socket.io-client](https://socket.io/zh-CN/docs/v4/client-api/)，`vue-plugin-hiprint` 默认内置，并提供 `print2`、`refreshPrinterList` 等 api 旨在方便用户，但 api 文档四纷五落，虽然 `electron-hiprint` 有非常全面的 api 文档，但不少用户反馈 `vue-plugin-hiprint`、`electron-hiprint` 和 `node-hiprint-transit` 的文档各有不同，不知道应该以哪个为尊，故此次对 `vue-plugin-hiprint` api 文档进行编写完善。

本质上所有 api 都只需要获取到 `hiwebSocket.socket` 按 `electron-hiprint` 文档调用即可。

以上内容如有错误，欢迎 PR 或 issue 指正。