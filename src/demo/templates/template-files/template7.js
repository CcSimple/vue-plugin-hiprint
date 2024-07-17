export const name = "多列行合并示例";
export const desc = "动态数据多列行合并示例";
export const author = "54xavier";
export const link = "https://ccsimple.gitee.io/vue-plugin-hiprint/";
export const preview =
  "/static/template7.png";

import _ from "lodash";

// 构建打印数据

// 定义基础数据
const classTimes = ["23年秋季", "24年春季", "24年秋季"];
const classTypes = ["必修课", "选修课"];
const names = ["张三", "李四", "王五", "赵六", "孙七", "周八", "吴九", "郑十"];
const sexs = ["男", "女"];

var printData = {
  tableData: [], // 表格数据
  spanValues: {}, // 合并行数值
};

// 生成一个 开课时间(classTime) 随机数
const classRandom = [_.random(80, 120), _.random(180, 220)];
// 创建300条数据
_.times(300, (index) => {
  printData.tableData.push({
    classTime:
      classTimes[index < classRandom[0] ? 0 : index < classRandom[1] ? 1 : 2], // 根据随机数判断是哪个开课时间
    classType: classTypes[_.random(0, 1)], // 随机课程类型
    name: names[_.random(0, 7)], // 随机姓名
    sex: sexs[_.random(0, 1)], // 随机性别
    scoped: _.random(70, 100), // 随机分数
  });
});

// 根据 开课时间(classTime) 分组，后续数据需要在对应组中再判断合并情况，需要注意这里的数据结构已经发生了很大的变化
printData.tableData = _.groupBy(printData.tableData, (row) => row.classTime);

// 根据 课程类型(classType) 分组，后续数据需要在对应组中在判断合并情况，需要注意这里的数据结构已经发生了很大的变化
printData.tableData = _.map(printData.tableData, (childs, classTime) => {
  // console.log(classTime, childs);

  // 设置 开课时间(classTime)的合并行数，这里获取的即是每个 开课时间(classTime) 对应数量，即合并行数
  printData.spanValues[classTime] = childs.length;
  // 根据 课程类型(classType) 分组
  return _.groupBy(childs, (c_row) => c_row.classType);
});

// 将表格数据多维数组扁平化为一维数组
printData.tableData = _.flattenDeep(
  // 遍历 开课时间(classTime) 数组
  _.map(printData.tableData, (childs) =>
    // 遍历 课程类型(classType) 对象，需要注意这里的数据格式为对象
    _.map(childs, (c_childs, classType) => {
      // 设置 开课时间(classTime) 对应 课程类型(classType) 的合并行数，这里获取的即是每个 开课时间(classTime) 对应 课程类型(classType) 对应数量，即合并行数
      printData.spanValues[`${c_childs[0].classTime}_${classType}`] =
        c_childs.length;
      // 数据根据 姓名(name) 和 性别(sex) 排序
      c_childs = _.sortBy(c_childs, ["name", "sex"]);
      printData.spanValues = {
        ...printData.spanValues,
        // 使用 lodash 的 countBy 获取 开课时间(classTime) 对应 课程类型(classType) 对应 姓名(name) 对应 性别(sex) 的合并行数
        ..._.countBy(
          c_childs,
          (c_row) =>
            `${c_row.classTime}_${c_row.classType}_${c_row.name}_${c_row.sex}`
        ),
      };
      // 通过上面的多个 _.map 最终将返回一个多维数组，这是最里面一层
      return c_childs;
    })
  )
);

export const json = {
  panels: [
    {
      index: 0,
      name: 1,
      height: 297,
      width: 210,
      paperHeader: 49.5,
      paperFooter: 780,
      printElements: [
        {
          options: {
            left: 15,
            top: 57.5,
            height: 36,
            width: 550,
            coordinateSync: false,
            widthHeightSync: false,
            field: "tableData",
            rowsColumnsMerge: `(
              row,
              col,
              colIndex,
              rowIndex,
              tableData,
              printData
            ) => {
              // 定义合并列需要判断的字段
              const keyValueMap = {
                classTime: ["classTime"],
                classType: ["classTime", "classType"], // 意味着 课程类型(classType) 需要根据 开课时间(classTime) 和 课程类型(classType) 判断是否需要合并
                name: ["classTime", "classType", "name", "sex"],
                sex: ["classTime", "classType", "name", "sex"],
              };
              // 判断当前列是否存在于合并列中，是否存在 spanValues
              if (keyValueMap[col.field] && printData?.spanValues) {
                // 如果是第一行或者上一行的值和当前行的值不一样，那么就需要获取 spanValues 中的值
                if (
                  rowIndex === 0 ||
                  keyValueMap[col.field]
                    .map((key) => tableData[rowIndex - 1][key])
                    .join("_") !==
                    keyValueMap[col.field].map((key) => row[key]).join("_")
                ) {
                  return [
                    printData.spanValues[
                      keyValueMap[col.field].map((key) => row[key]).join("_")
                    ],
                    1,
                  ];
                }
                // 如果上一行的值和当前行的值一样，那么就不需要合并
                else {
                  return [0, 1];
                }
              }
              // 不是合并列字段或者没有 spanValues 的情况下，不需要合并
              else {
                return [1, 1];
              }
            }`,
            right: 564.49609375,
            bottom: 93.75,
            vCenter: 289.49609375,
            hCenter: 75.75,
            columns: [
              [
                {
                  title: "序号",
                  checked: true,
                  fixed: false,
                  rowspan: 1,
                  colspan: 1,
                  tableTextType: "sequence",
                  tableQRCodeLevel: 0,
                  tableSummaryTitle: true,
                  tableSummary: "",
                },
                {
                  title: "开课时间",
                  field: "classTime",
                  checked: true,
                  columnId: "classTime",
                  fixed: false,
                  rowspan: 1,
                  colspan: 1,
                },
                {
                  title: "课程类型",
                  field: "classType",
                  checked: true,
                  columnId: "classType",
                  fixed: false,
                  rowspan: 1,
                  colspan: 1,
                },
                {
                  title: "姓名",
                  field: "name",
                  checked: true,
                  columnId: "name",
                  fixed: false,
                  rowspan: 1,
                  colspan: 1,
                },
                {
                  title: "性别",
                  field: "sex",
                  checked: true,
                  columnId: "sex",
                  fixed: false,
                  rowspan: 1,
                  colspan: 1,
                },
                {
                  title: "学分",
                  field: "scoped",
                  checked: true,
                  columnId: "scoped",
                  fixed: false,
                  rowspan: 1,
                  colspan: 1,
                },
              ],
            ],
          },
          printElementType: {
            title: "表格",
            type: "table",
            editable: true,
            columnDisplayEditable: true,
            columnDisplayIndexEditable: true,
            columnTitleEditable: true,
            columnResizable: true,
            columnAlignEditable: true,
            isEnableEditField: true,
            isEnableContextMenu: true,
            isEnableInsertRow: true,
            isEnableDeleteRow: true,
            isEnableInsertColumn: true,
            isEnableDeleteColumn: true,
            isEnableMergeCell: true,
          },
        },
      ],
      paperNumberLeft: 565.5,
      paperNumberTop: 819,
      paperNumberContinue: true,
      watermarkOptions: {
        content: "vue-plugin-hiprint",
        rotate: 25,
        timestamp: true,
        format: "YYYY-MM-DD HH:mm",
      },
      panelLayoutOptions: {},
    },
  ],
};

export default {
  preview: preview,
  name: name,
  desc: desc,
  author: author,
  link: link,
  printData,
  json: json,
};
