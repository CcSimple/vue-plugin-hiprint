export const name = '自定义渲染表格';
export const desc = '不一样的表格显示效果';
export const author = '群友提供'
export const link = 'https://github.com/CcSimple'
// url 或者 base64 或者 require('../../../assets/logo.png')
export const preview = '/static/template4.png';
export const extendCss = "<style>.products  {\n" +
    "    display: flex;\n" +
    "    flex-wrap: wrap;\n" +
    "    position: relative;\n" +
    "    box-sizing: border-box;\n" +
    "    border: 1px solid #c8c9cc;\n" +
    "    padding: 5pt;\n" +
    "    margin-bottom: 5pt;\n" +
    "}\n" +
    ".products .mg-row {\n" +
    "    display: flex;\n" +
    "    margin-bottom: 5pt;\n" +
    "}\n" +
    ".col-25 {\n" +
    "    max-width: 25%;\n" +
    "    flex: 0 0 25%;\n" +
    "}\n" +
    ".col-33 {\n" +
    "    max-width: 33.3333333333%;\n" +
    "    flex: 0 0 33.3333333333%;\n" +
    "}\n" +
    ".col-50 {\n" +
    "    max-width: 50%;\n" +
    "    flex: 0 0 50%;\n" +
    "}\n" +
    ".col-75 {\n" +
    "    max-width: 75%;\n" +
    "    flex: 0 0 75%;\n" +
    "}\n" +
    ".col-100 {\n" +
    "    width: 100%;\n" +
    "    flex: 0 0 100%;\n" +
    "}\n" +
    ".custom-table {\n" +
    "    width: 100%;\n" +
    "}\n" +
    ".custom-table .left {\n" +
    "    text-align: left;\n" +
    "}\n" +
    ".custom-table .right {\n" +
    "    text-align: right;\n" +
    "}\n" +
    ".custom-table .center {\n" +
    "    text-align: center;\n" +
    "}\n" +
    ".custom-table .custom-th, .custom-table .custom-tr{\n" +
    "    display: block;\n" +
    "    font-size: 0;\n" +
    "}\n" +
    ".custom-table .custom-th div:last-child, .custom-table .custom-tr div:last-child{\n" +
    "    border-right: 1px solid #000000;\n" +
    "}\n" +
    ".custom-table .custom-th div, .custom-table .custom-tr div{\n" +
    "    font-size: 6pt;\n" +
    "    display: inline-block;\n" +
    "    padding: 2pt 0;\n" +
    "    border-left: 1pt solid #000000;\n" +
    "    border-bottom: 1pt solid #000000;\n" +
    "    vertical-align: top;\n" +
    "}\n" +
    ".custom-table .custom-th div span, .custom-table .custom-tr div span {\n" +
    "    margin: 0 5pt;\n" +
    "}\n" +
    ".custom-table .custom-th div {\n" +
    "    border-top: 1pt solid #000000;\n" +
    "}\n" +
    ".custom-table .w-9 {\n" +
    "    width: 9%;\n" +
    "}\n" +
    ".custom-table .w-10 {\n" +
    "    width: 10%;\n" +
    "}\n" +
    ".custom-table .w-15 {\n" +
    "    width: 15%;\n" +
    "}\n" +
    ".custom-table .w-20 {\n" +
    "    width: 20%;\n" +
    "}\n" +
    ".custom-table .w-25 {\n" +
    "    width: 25%;\n" +
    "}\n" +
    ".custom-table .w-30 {\n" +
    "    width: 30%;\n" +
    "}\n" +
    ".custom-table .w-40 {\n" +
    "    width: 40%;\n" +
    "}</style>"
export const printData = {
  title: 'XXXX有限公司',  // 标题
  orderId: 'XY202304001',  // 订单号
  workId: 'GLSW2023001',  // 工程单号
  work_info: [
    {
      workId: 'GLSW2023001',  // 工程单号
      order_date: '2023-06-03',   // 订单日期
      customer: '广州戈蓝生物科技有限公司',  // 客户名称
      quality: '做工精细注意细节', // 质量要求
      delivery_date: '2023-06-31',    // 交货日期
    }
  ],
  printDate: '2023/06/03 12:00:00',   // 打印日期
  creater: '张三',  // 制单人
  checker: '李四',  // 审核人
  product_info: [    // 产品信息
    {
      product_type: '精装盒',
      product_name: 'Benggre臻护凝时皮肤管理套',
      product_size: '380*280*45',
      product_quantity: 1000,
      product_packing: '纸包',
      workmanship: '手工、粘、啤',
      yinshuase: '四色',
      wenjian: '新',
      yangpin: '有',
      remark: '不明白请及时问清楚',     // 备注
      material: [
        {
          type_name: '面纸',
          name: '350克冰白珠光纸',
          quantity: 1400,
          size: '787*880（各拼一个）',
          warkmanship: '哑胶、浮雕烫金、烫金、击凸、单面印'
        },
        {type_name: '内盒卡纸', name: '350克单铜', quantity: 2300, size: '787*880（各拼一个）', warkmanship: ''},
      ]
    },
    {
      product_type: '精装盒',
      product_name: 'Benggre肌肤水润嫩滑肌套',
      product_size: '380*280*45',
      product_quantity: 1000,
      product_packing: '纸包',
      workmanship: '哑胶、浮雕烫金、烫金、击凸、手工、粘、啤、单面印',
      yinshuase: '四色',
      wenjian: '新',
      yangpin: '有',
      remark: '不明白请及时问清楚',     // 备注
      material: [
        {
          type_name: '面纸',
          name: '350克冰白珠光纸',
          quantity: 1400,
          size: '787*880（各拼一个）',
          warkmanship: '哑胶、浮雕烫金、烫金、击凸、单面印'
        },
        {type_name: '内盒卡纸', name: '350克单铜', quantity: 2300, size: '787*880（各拼一个）', warkmanship: ''},
      ]
    }
  ],
  order_remark: 'Benggre臻护凝时皮肤管理套 （尺寸：380*280*45数量1000个）2、Benggre肌肤水润嫩滑肌套 （尺寸：380*280*45数量1000个）3、Benggre光感焕肤套 （尺寸：340*260*45数量1000个）4、Benggre三纹鱼舒缓倍护能量套 （尺寸：380*280*45数量1000个）：350克冰白珠光纸四色印刷，工艺烫金、佛雕烫金、激凸，内盒350克单铜过哑膜啤折盒，内有吸塑要放吸塑进去注意质量不要开胶烫金不清晰磨花等情况。跟进一下客户的纸箱',
}
export const json = {
  "panels": [
    {
      "index": "0",
      "name": "1",
      "height": 296,
      "width": 210,
      "paperHeader": "66",
      "paperFooter": 813,
      "printElements": [
        {
          "options": {
            "left": 145,
            "top": 12.5,
            "height": 19.5,
            "width": 316.5,
            "field": "title",
            "testData": "xxxxx有限公司",
            "fontSize": 20.25,
            "letterSpacing": 6,
            "fontWeight": "700",
            "textContentVerticalAlign": "middle",
            "hideTitle": true,
            "title": "企业名称",
            "right": 461.25,
            "bottom": 33,
            "vCenter": 303,
            "hCenter": 23.25,
            "coordinateSync": false,
            "widthHeightSync": false,
            "qrCodeLevel": 0,
            "textAlign": "center"
          },
          "printElementType": {
            "title": "企业名称",
            "type": "text"
          }
        },
        {
          "options": {
            "left": 507,
            "top": 15,
            "height": 42,
            "width": 42,
            "field": "workId",
            "testData": "MGPT2023002",
            "fontSize": 12,
            "lineHeight": 18,
            "textType": "qrcode",
            "title": "二维码",
            "right": 549,
            "bottom": 51,
            "vCenter": 528,
            "hCenter": 30,
            "coordinateSync": false,
            "widthHeightSync": false,
            "qrCodeLevel": 0
          },
          "printElementType": {
            "title": "二维码",
            "type": "text"
          }
        },
        {
          "options": {
            "left": 247.5,
            "top": 37.5,
            "height": 19.5,
            "width": 100.5,
            "title": "工程单",
            "right": 347.25,
            "bottom": 42.75,
            "vCenter": 297,
            "hCenter": 37.875,
            "coordinateSync": false,
            "widthHeightSync": false,
            "fontSize": 18,
            "fontWeight": "400",
            "letterSpacing": 9,
            "textAlign": "center",
            "textContentVerticalAlign": "middle",
            "lineHeight": 18,
            "qrCodeLevel": 0
          },
          "printElementType": {
            "title": "文本",
            "type": "text"
          }
        },
        {
          "options": {
            "left": 13.5,
            "top": 45,
            "height": 16,
            "width": 120,
            "field": "orderId",
            "testData": "XY20230602001",
            "fontSize": 6.75,
            "textAlign": "center",
            "textContentVerticalAlign": "middle",
            "title": "订单编号",
            "right": 124.5,
            "bottom": 60.25,
            "vCenter": 64.5,
            "hCenter": 52.25,
            "coordinateSync": false,
            "widthHeightSync": false,
            "qrCodeLevel": 0
          },
          "printElementType": {
            "title": "订单编号",
            "type": "text"
          }
        },
        {
          "options": {
            "left": 7.5,
            "top": 61.5,
            "height": 9,
            "width": 577.5,
            "right": 96.75,
            "bottom": 64.5,
            "vCenter": 51.75,
            "hCenter": 60
          },
          "printElementType": {
            "title": "横线",
            "type": "hline"
          }
        },
        {
          "options": {
            "left": 28.5,
            "top": 70.5,
            "height": 36,
            "width": 538.5,
            "field": "work_info",
            "fields": [
              {
                "text": "订单日期",
                "field": "order_date"
              },
              {
                "text": "工程单号",
                "field": "workId"
              },
              {
                "text": "客户名称",
                "field": "customer"
              },
              {
                "text": "交货日期",
                "field": "delivery_date"
              },
              {
                "text": "质量要求",
                "field": "quality"
              }
            ],
            "right": 578.5,
            "bottom": 109.5,
            "vCenter": 303.5,
            "hCenter": 91.5,
            "coordinateSync": false,
            "widthHeightSync": false,
            "columns": [
              [
                {
                  "width": 78.01380865921793,
                  "title": "订单日期",
                  "field": "order_date",
                  "checked": true,
                  "columnId": "order_date",
                  "fixed": false,
                  "rowspan": 1,
                  "colspan": 1,
                  "align": "center"
                },
                {
                  "width": 82.37420460893856,
                  "title": "工程单号",
                  "field": "workId",
                  "checked": true,
                  "columnId": "workId",
                  "fixed": false,
                  "rowspan": 1,
                  "colspan": 1,
                  "align": "center"
                },
                {
                  "width": 164.95573673184356,
                  "title": "客户名称",
                  "field": "customer",
                  "checked": true,
                  "columnId": "customer",
                  "fixed": false,
                  "rowspan": 1,
                  "colspan": 1,
                  "align": "left",
                  "tableQRCodeLevel": 0,
                  "tableSummaryTitle": true,
                  "tableSummary": ""
                },
                {
                  "width": 90.0673840782123,
                  "title": "交货日期",
                  "field": "delivery_date",
                  "checked": true,
                  "columnId": "delivery_date",
                  "fixed": false,
                  "rowspan": 1,
                  "colspan": 1,
                  "align": "center"
                },
                {
                  "width": 123.08886592178769,
                  "title": "质量要求",
                  "field": "quality",
                  "checked": true,
                  "columnId": "quality",
                  "fixed": false,
                  "rowspan": 1,
                  "colspan": 1,
                  "align": "left",
                  "tableQRCodeLevel": 0,
                  "tableSummaryTitle": true,
                  "tableSummary": ""
                }
              ]
            ]
          },
          "printElementType": {
            "title": "订单信息（表格）",
            "type": "table",
            "editable": true,
            "columnDisplayEditable": true,
            "columnDisplayIndexEditable": true,
            "columnTitleEditable": true,
            "columnResizable": true,
            "columnAlignEditable": true,
            "isEnableEditField": true,
            "isEnableContextMenu": true,
            "isEnableInsertRow": true,
            "isEnableDeleteRow": true,
            "isEnableInsertColumn": true,
            "isEnableDeleteColumn": true,
            "isEnableMergeCell": true
          }
        },
        {
          "options": {
            "left": 25.5,
            "top": 123,
            "height": 126,
            "width": 546,
            "tableFooterRepeat": "no",
            "field": "product_info",
            "fields": [
              {
                "text": "类型",
                "field": "product_type"
              }
            ],
            "right": 573,
            "bottom": 248.25,
            "vCenter": 300,
            "hCenter": 185.25,
            "coordinateSync": false,
            "widthHeightSync": false,
            "tableHeaderRepeat": "none",
            "tableBorder": "noBorder",
            "tableHeaderBorder": "noBorder",
            "tableHeaderCellBorder": "noBorder",
            "tableBodyRowBorder": "noBorder",
            "tableBodyCellBorder": "noBorder",
            "tableFooterBorder": "noBorder",
            "tableFooterCellBorder": "noBorder",
            "columns": [
              [
                {
                  "width": 546,
                  "title": "类型",
                  "field": "product_type",
                  "checked": true,
                  "columnId": "product_type",
                  "fixed": false,
                  "rowspan": 1,
                  "colspan": 1,
                  "align": "left",
                  "renderFormatter": "function(value,row,index,options){\n    let rowTemplate = '';\n    rowTemplate += `\n        <div class='products'>\n            <div class='mg-row col-25'>\n                <span class='title'>产品类型：</span>\n                <span class='info'>${row.product_type}</span>\n            </div>\n            <div class='mg-row col-75'>\n                <span class='title'>产品名称：</span>\n                <span class='info'>${row.product_name}</span>\n            </div>\n            <div class='mg-row col-25'>\n                <span class='title'>产品尺寸：</span>\n                <span class='info'>${row.product_size}</span>\n            </div>\n            <div class='mg-row col-25'>\n                <span class='title'>订单数量：</span>\n                <span class='info'>${row.product_quantity}</span>\n            </div>\n            <div class='mg-row col-25'>\n                <span class='title'>包装方式：</span>\n                <span class='info'>${row.product_packing}</span>\n            </div>\n            <div class='mg-row col-25'>\n                <span class='title'>印刷色：</span>\n                <span class='info'>${row.yinshuase}</span>\n            </div>\n            <div class='mg-row col-25'>\n                <span class='title'>文件：</span>\n                <span class='info'>${row.wenjian}</span>\n            </div>\n            <div class='mg-row col-25'>\n                <span class='title'>样品：</span>\n                <span class='info'>${row.yangpin}</span>\n            </div>\n            <div class='mg-row col-100'>\n                <span class='title'>印后工艺：</span>\n                <span class='info'>${row.workmanship}</span>\n            </div>\n            <div class='mg-row col-100'>\n                <span class='title'>注意事项：</span>\n                <span class='info'>${row.remark}</span>\n            </div>\n            <div class='custom-table'>\n                <div class='custom-th'>\n                    <div class='w-10 center'><span>类型</span></div>\n                    <div class='w-20 left'><span>材料名称</span></div>\n                    <div class='w-20 center'><span>尺寸</span></div>\n                    <div class='w-9 center'><span>数量</span></div>\n                    <div class='w-40 left'><span>材料工艺</span></div>\n                </div>`;\n                for (var i = 0; i < row.material?.length; i++) {\n                    rowTemplate += `\n                        <div class='custom-tr'>\n                            <div class='w-10 center'><span>${row.material[i].type_name}</span></div>\n                            <div class='w-20 left'><span>${row.material[i].name}</span></div>\n                            <div class='w-20 center'><span>${row.material[i].size}</span></div>\n                            <div class='w-9 center'><span>${row.material[i].quantity}</span></div>\n                            <div class='w-40 left'><span>${row.material[i].warkmanship}</span></div>\n                        </div>\n                    `;\n                }\n            rowTemplate += `</div></div>`;\n            return rowTemplate;\n}",
                  "tableQRCodeLevel": 0,
                  "tableSummaryTitle": true,
                  "tableSummary": ""
                }
              ]
            ]
          },
          "printElementType": {
            "title": "产品资料",
            "type": "table",
            "editable": true,
            "columnDisplayEditable": true,
            "columnDisplayIndexEditable": true,
            "columnTitleEditable": true,
            "columnResizable": true,
            "columnAlignEditable": true,
            "isEnableEditField": true,
            "isEnableContextMenu": true,
            "isEnableInsertRow": true,
            "isEnableDeleteRow": true,
            "isEnableInsertColumn": true,
            "isEnableDeleteColumn": true,
            "isEnableMergeCell": true
          }
        },
        {
          "options": {
            "left": 22.5,
            "top": 265.5,
            "height": 177,
            "width": 538.5,
            "right": 567,
            "bottom": 522.75,
            "vCenter": 297.75,
            "hCenter": 434.25
          },
          "printElementType": {
            "title": "矩形",
            "type": "rect"
          }
        },
        {
          "options": {
            "left": 30,
            "top": 268.5,
            "height": 27,
            "width": 82.5,
            "title": "订单备注",
            "right": 117.75,
            "bottom": 501,
            "vCenter": 76.5,
            "hCenter": 487.5,
            "coordinateSync": false,
            "widthHeightSync": false,
            "hideTitle": true,
            "fontSize": 12,
            "textContentVerticalAlign": "middle",
            "qrCodeLevel": 0
          },
          "printElementType": {
            "title": "文本",
            "type": "text"
          }
        },
        {
          "options": {
            "left": 36,
            "top": 304.5,
            "height": 124.5,
            "width": 511.5,
            "right": 553.5,
            "bottom": 509.25,
            "vCenter": 297.75,
            "hCenter": 432.75,
            "field": "order_remark",
            "coordinateSync": false,
            "widthHeightSync": false,
            "hideTitle": true,
            "fontFamily": "SimSun",
            "letterSpacing": 2.25,
            "qrCodeLevel": 0
          },
          "printElementType": {
            "title": "文本",
            "type": "text"
          }
        },
        {
          "options": {
            "left": 307.5,
            "top": 450,
            "height": 16,
            "width": 120,
            "field": "creater",
            "testData": "李四",
            "fontSize": 6.75,
            "textAlign": "left",
            "textContentVerticalAlign": "middle",
            "title": "制单人",
            "right": 419.25,
            "bottom": 598,
            "vCenter": 359.25,
            "hCenter": 590
          },
          "printElementType": {
            "title": "制单人",
            "type": "text"
          }
        },
        {
          "options": {
            "left": 429,
            "top": 450,
            "height": 16,
            "width": 120,
            "field": "checker",
            "testData": "赵五",
            "fontSize": 6.75,
            "textContentVerticalAlign": "middle",
            "title": "审核",
            "right": 526.5,
            "bottom": 269.5,
            "vCenter": 466.5,
            "hCenter": 261.5,
            "coordinateSync": false,
            "widthHeightSync": false,
            "qrCodeLevel": 0
          },
          "printElementType": {
            "title": "审核员",
            "type": "text"
          }
        },
        {
          "options": {
            "left": 7.5,
            "top": 814.5,
            "height": 16,
            "width": 168,
            "field": "printDate",
            "testData": "2022-01-01 09:00",
            "fontSize": 6.75,
            "textAlign": "left",
            "textContentVerticalAlign": "middle",
            "title": "打印时间",
            "right": 147,
            "bottom": 833.5,
            "vCenter": 77.25,
            "hCenter": 825.5
          },
          "printElementType": {
            "title": "打印时间",
            "type": "text"
          }
        }
      ],
      "paperNumberLeft": 300,
      "paperNumberTop": 816,
      "paperNumberContinue": true,
      "watermarkOptions": {
        "content": "",
        "fillStyle": "rgba(184, 184, 184, 0.3)",
        "fontSize": "14px",
        "rotate": 25,
        "width": 200,
        "height": 200,
        "timestamp": true,
        "format": "YYYY-MM-DD HH:mm"
      }
    }
  ]
}

export default {
  preview: preview,
  name: name,
  desc: desc,
  author: author,
  link: link,
  extendCss: extendCss,
  printData: printData,
  json: json
}
