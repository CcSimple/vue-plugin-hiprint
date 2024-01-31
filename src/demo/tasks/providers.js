/* eslint-disable */
import {hiprint} from '../../index'

// 自定义设计元素1
export const aProvider = function (ops) {
  var addElementTypes = function (context) {
    context.removePrintElementTypes("taskProviderModule");
    context.addPrintElementTypes(
      "taskProviderModule",
      [
        new hiprint.PrintElementTypeGroup("平台", [
          {
            tid: 'taskProviderModule.header', title: '单据表头', data: '单据表头', type: 'text',
            options: {
              testData: '单据表头',
              height: 17,
              fontSize: 16.5,
              fontWeight: "700",
              textAlign: "center",
              hideTitle: true
            }
          },
          {
            tid: 'taskProviderModule.type', title: '单据类型', data: '单据类型', type: 'text',
            options: {
              testData: '单据类型',
              height: 16,
              fontSize: 15,
              fontWeight: "700",
              textAlign: "center",
              hideTitle: true
            }
          },
          {
            tid: 'taskProviderModule.order', title: '订单编号', data: 'XS888888888', type: 'text',
            options: {
              field: 'orderId',
              testData: 'XS888888888',
              height: 16,
              fontSize: 6.75,
              fontWeight: "700",
              textAlign: "left",
              textContentVerticalAlign: "middle"
            }
          },
          {
            tid: 'taskProviderModule.date', title: '业务日期', data: '2020-01-01', type: 'text',
            options: {
              field: 'date',
              testData: '2020-01-01',
              height: 16,
              fontSize: 6.75,
              fontWeight: "700",
              textAlign: "left",
              textContentVerticalAlign: "middle"
            }
          },
          {
            tid: 'taskProviderModule.barcode', title: '条形码', data: 'XS888888888', type: 'text',
            options: {
              field: 'barcode',
              testData: 'XS888888888',
              height: 32,
              fontSize: 12,
              lineHeight: 18,
              textType: "barcode"
            }
          },
          {
            tid: 'taskProviderModule.qrcode', title: '二维码', data: 'XS888888888', type: 'text',
            options: {
              field: 'qrcode',
              testData: 'XS888888888',
              height: 32,
              fontSize: 12,
              lineHeight: 18,
              textType: "qrcode"
            }
          },
          {
            tid: 'taskProviderModule.platform', title: '平台名称', data: '平台名称', type: 'text',
            options: {
              testData: '平台名称',
              height: 17,
              fontSize: 16.5,
              fontWeight: "700",
              textAlign: "center",
              hideTitle: true
            }
          },
          {tid: 'taskProviderModule.logo', title: 'Logo', data: '', type: 'image'},
        ]),
        new hiprint.PrintElementTypeGroup("库管", [
          {
            tid: 'taskProviderModule.creater', title: '制单人', data: '李四', type: 'text',
            options: {
              field: 'creater',
              testData: '李四',
              height: 16,
              fontSize: 6.75,
              fontWeight: "700",
              textAlign: "left",
              textContentVerticalAlign: "middle"
            }
          },
          {
            tid: 'taskProviderModule.printDate', title: '打印时间', data: '2022-01-01 09:00', type: 'text',
            options: {
              field: 'printDate',
              testData: '2022-01-01 09:00',
              height: 16,
              fontSize: 6.75,
              fontWeight: "700",
              textAlign: "left",
              textContentVerticalAlign: "middle"
            }
          },
          {
            tid: 'taskProviderModule.signer', title: '库管签字', data: '', type: 'text',
            options: {
              title: '库管签字：',
              height: 16,
              fontSize: 6.75,
              fontWeight: "700",
              textAlign: "left",
              textContentVerticalAlign: "middle"
            }
          },
        ]),
        new hiprint.PrintElementTypeGroup("表格/其他", [
          {
            tid: 'taskProviderModule.table', title: '订单数据',
            type: 'table',
            options: {
              field: 'table',
              tableHeaderRepeat: 'first',
              tableFooterRepeat: 'last',
              fields: [
                {text: '名称', field: 'NAME'},
                {text: '数量', field: 'SL'},
                {text: '规格', field: 'GG'},
                {text: '条码', field: 'TM'},
                {text: '单价', field: 'DJ'},
                {text: '金额', field: 'JE'},
              ],
            },
            editable: true,
            columnDisplayEditable: true,//列显示是否能编辑
            columnDisplayIndexEditable: true,//列顺序显示是否能编辑
            columnTitleEditable: true,//列标题是否能编辑
            columnResizable: true, //列宽是否能调整
            columnAlignEditable: true,//列对齐是否调整
            isEnableEditField: true, //编辑字段
            isEnableContextMenu: true, //开启右键菜单 默认true
            isEnableInsertRow: true, //插入行
            isEnableDeleteRow: true, //删除行
            isEnableInsertColumn: true, //插入列
            isEnableDeleteColumn: true, //删除列
            isEnableMergeCell: true, //合并单元格
            columns: [
              [
                {title: '名称', align: 'center', field: 'NAME', width: 150},
                {title: '数量', align: 'center', field: 'SL', width: 80},
                {title: '规格', align: 'center', field: 'GG', width: 80, checked: false},
                {title: '条码', align: 'center', field: 'TM', width: 100, checked: false},
                {title: '单价', align: 'center', field: 'DJ', width: 100},
                {title: '金额', align: 'center', field: 'JE', width: 100, checked: false},
              ],
            ],
            footerFormatter: function (options, rows, data, currentPageGridRowsData) {
              if (data && data['totalCap']) {
                return `<td style="padding:0 10px" colspan="100">${'应收金额大写: ' + data['totalCap']}</td>`
              }
              return '<td style="padding:0 10px" colspan="100">应收金额大写: </td>'
            },
          },
          {tid: 'taskProviderModule.customText', title: '文本', customText: '自定义文本', custom: true, type: 'text'}
        ]),
        new hiprint.PrintElementTypeGroup("辅助", [
          {
            tid: 'taskProviderModule.hline',
            title: '横线',
            type: 'hline'
          },
          {
            tid: 'taskProviderModule.vline',
            title: '竖线',
            type: 'vline'
          },
          {
            tid: 'taskProviderModule.rect',
            title: '矩形',
            type: 'rect'
          },
          {
            tid: 'taskProviderModule.oval',
            title: '椭圆',
            type: 'oval'
          }
        ])
      ]
    );
  };
  return {
    addElementTypes: addElementTypes
  };
};

export default aProvider()
