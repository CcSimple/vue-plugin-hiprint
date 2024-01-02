export default {
  "panels": [{
    "index": 0,
    "height": 297,
    "width": 210,
    "paperHeader": 49.5,
    "paperFooter": 780,
    "watermarkOptions": {
      "content": "vue-plugin-hiprint",
      "rotate": 25,
      "timestamp": true,
      "format": "YYYY-MM-DD HH:mm"
    },
    "printElements": [{
      "options": {
        "left": 175.5,
        "top": 10.5,
        "height": 27,
        "width": 259,
        "title": "HiPrint自定义模块打印插件",
        "fontSize": 19,
        "fontWeight": "600",
        "textAlign": "center",
        "lineHeight": 26,
        "coordinateSync": true,
        "widthHeightSync": true,
        "draggable": false,
      }, "printElementType": {"title": "自定义文本", "type": "text"}
    }, {
      "options": {"left": 60, "top": 27, "height": 13, "width": 52, "title": "页眉线", "textAlign": "center"},
      "printElementType": {"title": "自定义文本", "type": "text"}
    }, {
      "options": {"left": 25.5, "top": 57, "height": 705, "width": 9, "fixed": true, "borderStyle": "dotted"},
      "printElementType": {"type": "vline"}
    }, {
      "options": {"left": 60, "top": 61.5, "height": 48, "width": 87, "src": "", "fit": "contain"},
      "printElementType": {"title": "图片", "type": "image"}
    }, {
      "options": {
        "left": 153,
        "top": 64.5,
        "height": 39,
        "width": 276,
        "title": "二维码以及条形码均采用svg格式打印。不同打印机打印不会造成失真。图片打印：不同DPI打印可能会导致失真，",
        "fontFamily": "微软雅黑",
        "textAlign": "center",
        "lineHeight": 18
      }, "printElementType": {"title": "自定义文本", "type": "text"}
    }, {
      "options": {
        "left": 457.5,
        "top": 79.5,
        "height": 13,
        "width": 120,
        "title": "姓名",
        "field": "name",
        "testData": "古力娜扎",
        "color": "#f00808",
        "textDecoration": "underline",
        "textAlign": "center",
        "fields": [{"text":'id',"field":'id'},{"text":'姓名',"field":'name'},{"text":'性别',"field":'gender'},{"text":'数量',"field":'count'}],
      }, "printElementType": {"title": "文本", "type": "text"}
    }, {
      "options": {
        "left": 483,
        "top": 115,
        "height": 60,
        "width": 60,
        "title": "123456789",
        "textAlign": "center",
        "textType": "qrcode"
      }, "printElementType": {"title": "自定义文本", "type": "text"}
    }, {
      "options": {
        "left": 285,
        "top": 125,
        "height": 40,
        "width": 175,
        "title": "123456789",
        "fontFamily": "微软雅黑",
        "textAlign": "center",
        "textType": "barcode"
      }, "printElementType": {"title": "自定义文本", "type": "text"}
    }, {
      "options": {
        "left": 60,
        "top": 110,
        "height": 19,
        "width": 213,
        "title": "所有打印元素都可已拖拽的方式来改变元素大小",
        "fontFamily": "微软雅黑",
        "textAlign": "center",
        "lineHeight": 18
      }, "printElementType": {"title": "自定义文本", "type": "text"}
    }, {
      "options": {
        "left": 60,
        "top": 130,
        "height": 40,
        "width": 40,
        "title": "qrcode",
        "field": "qrcode",
        "testData": "qrcode",
      },
      "printElementType": {
        "title": "二维码",
        "type": "qrcode",
      }
    }, {
      "options": {
        "left": 160,
        "top": 130,
        "height": 40,
        "width": 80,
        "title": "barcode",
        "field": "barcode",
        "testData": "barcode",
      },
      "printElementType": {
        "title": "条形码",
        "type": "barcode",
      }
    }, {
      "options": {
        "left": 153,
        "top": 189,
        "height": 13,
        "width": 238,
        "title": "单击元素，右侧可自定义元素属性",
        "textAlign": "center",
        "fontFamily": "微软雅黑"
      }, "printElementType": {"title": "自定义文本", "type": "text"}
    }, {
      "options": {"left": 60, "top": 190.5, "height": 13, "width": 51, "title": "横线", "textAlign": "center"},
      "printElementType": {"title": "自定义文本", "type": "text"}
    }, {
      "options": {
        "left": 415.5,
        "top": 190.5,
        "height": 13,
        "width": 164,
        "title": "可以配置各属性的默认值",
        "textAlign": "center",
        "fontFamily": "微软雅黑"
      }, "printElementType": {"title": "自定义文本", "type": "text"}
    }, {
      "options": {"left": 60, "top": 214.5, "height": 10, "width": 475.5},
      "printElementType": {"title": "横线", "type": "hline"}
    }, {
      "options": {
        "left": 235.5,
        "top": 220.5,
        "height": 32,
        "width": 342,
        "title": "自定义表格：用户可左键选中表头，右键查看可操作项，操作类似Excel，双击表头单元格可进行编辑。内容：title#field",
        "fontFamily": "微软雅黑",
        "textAlign": "center",
        "lineHeight": 15
      }, "printElementType": {"title": "自定义文本", "type": "text"}
    }, {
      "options": {
        "left": 156,
        "top": 265.5,
        "height": 13,
        "width": 94,
        "title": "表头列大小可拖动",
        "fontFamily": "微软雅黑",
        "textAlign": "center"
      }, "printElementType": {"title": "自定义文本", "type": "text"}
    }, {
      "options": {
        "left": 60,
        "top": 265.5,
        "height": 13,
        "width": 90,
        "title": "红色区域可拖动",
        "fontFamily": "微软雅黑",
        "textAlign": "center"
      }, "printElementType": {"title": "自定义文本", "type": "text"}
    }, {
      "options": {
        "left": 60,
        "top": 285,
        "height": 56,
        "width": 511.5,
        "field": "table",
        "tableFooterRepeat": "",
        "tableBorder": "noBorder",
        "tableHeaderBorder": "topBorder",
        "tableHeaderCellBorder": "border",
        "tableBodyRowBorder": "topBorder",
        "tableFooterBorder": "topBorder",
        "fields": [{"text":'id',"field":'id'},{"text":'姓名',"field":'name'},{"text":'性别',"field":'gender'},{"text":'数量',"field":'count'}],
        "columns": [[{"width": 85.25, "colspan": 1, "rowspan": 1, "checked": true}, {
          "title": "性别",
          "field": "gender",
          "width": 85.25,
          "colspan": 1,
          "rowspan": 1,
          "checked": false
        }, {
          "title": "姓名",
          "field": "name",
          "width": 85.25,
          "align": "center",
          "colspan": 1,
          "rowspan": 1,
          "checked": true,
          "tableSummary": "count"
        }, {
          "title": "数量",
          "field": "count",
          "width": 85.25,
          "align": "center",
          "colspan": 1,
          "rowspan": 1,
          "checked": true,
          "tableSummary": "sum"
		    }, {
          "width": 85.25,
          "colspan": 1,
          "rowspan": 1,
          "checked": true
        }, {"width": 85.25, "colspan": 1, "rowspan": 1, "checked": true}]]
      }, "printElementType": {
        "title": "表格", "type": "table",
        // editable: true,
        // columnDisplayEditable: true,//列显示是否能编辑
        // columnDisplayIndexEditable: true,//列顺序显示是否能编辑
        // columnTitleEditable: true,//列标题是否能编辑
        // columnResizable: true, //列宽是否能调整
        // columnAlignEditable: true,//列对齐是否调整
        // isEnableEditField: true, //编辑字段
        // isEnableContextMenu: true, //开启右键菜单 默认true
        // isEnableInsertRow: true, //插入行
        // isEnableDeleteRow: true, //删除行
        // isEnableInsertColumn: true, //插入列
        // isEnableDeleteColumn: true, //删除列
        // isEnableMergeCell: true, //合并单元格
      }
    }, {
      "options": {
        "left": 21,
        "top": 346.5,
        "height": 61.5,
        "width": 15,
        "title": "装订线",
        "lineHeight": 18,
        "fixed": true,
        "contentPaddingTop": 3.75,
        "backgroundColor": "#ffffff"
      }, "printElementType": {"type": "text"}
    }, {
      "options": {
        "left": 225,
        "top": 355,
        "height": 13,
        "width": 346.5,
        "title": "自定义模块：主要为开发人员设计，能够快速，简单，实现自己功能",
        "textAlign": "center"
      }, "printElementType": {"title": "自定义文本", "type": "text"}
    }, {
      "options": {"left": 60, "top": 370.5, "height": 18, "width": 79, "title": "配置项表格", "textAlign": "center"},
      "printElementType": {"title": "自定义文本", "type": "text"}
    }, {
      "options": {
        "left": 225,
        "top": 385.5,
        "height": 38,
        "width": 346.5,
        "title": "配置模块：主要为客户使用，开发人员可以配置属性，字段，标题等，客户直接使用，配置模块请参考实例2",
        "fontFamily": "微软雅黑",
        "lineHeight": 15,
        "textAlign": "center",
        "color": "#d93838"
      }, "printElementType": {"title": "自定义文本", "type": "text"}
    }, {
      "options": {
        "left": 60,
        "top": 487.5,
        "height": 13,
        "width": 123,
        "title": "长文本会自动分页",
        "textAlign": "center"
      }, "printElementType": {"title": "自定义文本", "type": "text"}
    }, {
      "options": {"left": 60, "top": 507, "height": 40, "width": 511.5, "field": "longText"},
      "printElementType": {"title": "长文", "type": "longText"}
    }, {
      "options": {"left": 475.5, "top": 565.5, "height": 100, "width": 100},
      "printElementType": {"title": "矩形", "type": "rect"}
    }, {
      "options": {"left": 174, "top": 568.5, "height": 13, "width": 90, "title": "竖线", "textAlign": "center"},
      "printElementType": {"title": "自定义文本", "type": "text"}
    }, {
      "options": {"left": 60, "top": 574.5, "height": 100, "width": 10},
      "printElementType": {"title": "竖线", "type": "vline"}
    }, {
      "options": {"left": 210, "top": 604.5, "height": 13, "width": 120, "title": "横线", "textAlign": "center"},
      "printElementType": {"title": "自定义文本", "type": "text"}
    }, {
      "options": {"left": 130.5, "top": 625.5, "height": 10, "width": 277},
      "printElementType": {"title": "横线", "type": "hline"}
    }, {
      "options": {
        "left": 364.5,
        "top": 649.5,
        "height": 13,
        "width": 101,
        "title": "矩形",
        "textAlign": "center"
      }, "printElementType": {"title": "自定义文本", "type": "text"}
    }, {
      "options": {"left": 525, "top": 784.5, "height": 13, "width": 63, "title": "页尾线", "textAlign": "center"},
      "printElementType": {"title": "自定义文本", "type": "text"}
    }, {
      "options": {"left": 12, "top": 786, "height": 49, "width": 49},
      "printElementType": {"title": "html", "type": "html"}
    }, {
      "options": {
        "left": 75,
        "top": 790.5,
        "height": 13,
        "width": 137,
        "title": "红色原型是自动定义的Html",
        "textAlign": "center"
      }, "printElementType": {"title": "自定义文本", "type": "text"}
    }, {
      "options": {
        "left": 334.5,
        "top": 810,
        "height": 13,
        "width": 205,
        "title": "页眉线已上。页尾下以下每页都会重复打印",
        "textAlign": "center"
      }, "printElementType": {"title": "自定义文本", "type": "text"}
    }],
    "paperNumberLeft": 565.5,
    "paperNumberTop": 819
  }]
}
