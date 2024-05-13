/*
 * @Author: 54xavier
 * @LastEditors: admin@54xavier.cn
 * @Date: 2023-02-28 14:00:03
 * @LastEditTime: 2024-05-13 23:39:39
 */
export const name = "Echarts实现";
export const desc = "通过HTML元素实现Echarts-svg";
export const author = "54xavier";
export const link = "https://ccsimple.gitee.io/vue-plugin-hiprint/";
// url 或者 base64 或者 require('../../../assets/logo.png')
export const preview =
  "/static/template6.png";
function getRandomInt({ min = 10, max = 200 }) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export const printData = {
  lineData: Array.from(new Array(7), () => getRandomInt({})),
  barData: Array.from(new Array(7), () => getRandomInt({})),
  pieData: Array.from(new Array(5), (_, i) => ({
    value: getRandomInt({}),
    name: `系列${i}`,
  })),
};
export const json = {
  panels: [
    {
      index: 0,
      name: 1,
      height: 297,
      width: 210,
      paperHeader: 0,
      paperFooter: 842,
      printElements: [
        {
          options: {
            left: 0,
            top: 0,
            height: 1,
            width: 1,
            formatter: `function(t, e, printData) {
                var script = document.createElement("script");
                script.setAttribute("type", "text/javascript");
                script.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/echarts/5.4.3/echarts.min.js");
                return script;
            }`,
          },
          printElementType: {
            // 此元素为 Echarts 依赖，此方法仅浏览器打印(print)生效，print2可能会无法加载依赖，需要手动在electron-hiprint项目中引入依赖
            // 如果不使用 print2 可将此依赖全局添加到你自己项目中，只需设计、预览时能加载到此依赖即可
            title: "Echarts依赖",
            type: "html",
          },
        },
        {
          options: {
            left: 12,
            top: 12,
            height: 200,
            width: 200,
            formatter: `function(t, e, printData) {
                if (window.echarts) {
                    var echartDom = document.createElement("div");
                    echartDom.style.width = "267px";
                    echartDom.style.height = "267px";
                    var echartInstance = echarts.init(echartDom,null,{renderer: "svg"})
                    echartInstance.setOption({
                        animation: false,
                        grid: {
                            top: 10,
                            right: 20,
                            bottom: 30,
                            left: 36,
                        },
                        xAxis: {
                            type: 'category',
                            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                        },
                        yAxis: {
                            type: 'value'
                        },
                        series: [
                            {
                                data: printData?.lineData || [150, 230, 224, 218, 135, 147, 260],
                                type: 'line'
                            }
                        ]
                    })
                    return echartDom;
                } else {
                    return '<div style="width: 267px;height: 267px; border: 1px solid;">点击打印预览查看</div>'
                }
            }`,
          },
          printElementType: { title: "html", type: "html" },
        },
        {
          options: {
            left: 230,
            top: 12,
            height: 200,
            width: 200,
            formatter: `function(t, e, printData) {
                  if (window.echarts) {
                      var echartDom = document.createElement("div");
                      echartDom.style.width = "267px";
                      echartDom.style.height = "267px";
                      var echartInstance = echarts.init(echartDom,null,{renderer: "svg"})
                      echartInstance.setOption({
                          animation: false,
                          grid: {
                              top: 10,
                              right: 20,
                              bottom: 30,
                              left: 36,
                          },
                          xAxis: {
                              type: 'category',
                              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                          },
                          yAxis: {
                              type: 'value'
                          },
                          series: [
                              {
                                  data: printData?.barData || [150, 230, 224, 218, 135, 147, 260],
                                  type: 'bar'
                              }
                          ]
                      })
                      return echartDom;
                  } else {
                      return '<div style="width: 267px;height: 267px; border: 1px solid;">点击打印预览查看</div>'
                  }
                }`,
          },
          printElementType: { title: "html", type: "html" },
        },
        {
          options: {
            left: 12,
            top: 230,
            height: 200,
            width: 200,
            formatter: `function(t, e, printData) {
                  if (window.echarts) {
                      var echartDom = document.createElement("div");
                      echartDom.style.width = "267px";
                      echartDom.style.height = "267px";
                      var echartInstance = echarts.init(echartDom,null,{renderer: "svg"})
                      echartInstance.setOption({
                          animation: false,
                          series: [
                              {
                                  name: 'Access From',
                                  type: 'pie',
                                  radius: ['40%', '70%'],
                                  avoidLabelOverlap: false,
                                  itemStyle: {
                                      borderRadius: 10,
                                      borderColor: '#fff',
                                      borderWidth: 2
                                  },
                                  label: {
                                      show: false,
                                      position: 'center'
                                  },
                                  emphasis: {
                                      label: {
                                          show: true,
                                          fontSize: 40,
                                          fontWeight: 'bold'
                                      }
                                  },
                                  labelLine: {
                                      show: false
                                  },
                                  data: printData?.pieData || [
                                      { value: 1048, name: 'Search Engine' },
                                      { value: 735, name: 'Direct' },
                                      { value: 580, name: 'Email' },
                                      { value: 484, name: 'Union Ads' },
                                      { value: 300, name: 'Video Ads' }
                                  ]
                              }
                          ]
                        })
                      return echartDom;
                  } else {
                      return '<div style="width: 267px;height: 267px; border: 1px solid;">点击打印预览查看</div>'
                  }
                }`,
          },
          printElementType: { title: "html", type: "html" },
        },
        {
          options: {
            left: 12,
            top: 460,
            height: 45,
            width: 418,
            title:
              "说明：此处模版以一个不可见 html 元素加载 echarts ，故第一次打开无法显示预览，但后续的 print api 能够正常显示，你可以在你的项目中全局加载 echarts 依赖，保证设计、预览时能加载到 echarts 依赖，即可删除用于引入依赖的html元素。使用 print2 需要在 electron-hiprint 项目渲染层中添加该依赖，否则客户端首次打印都无法正常渲染 echarts",
          },
          printElementType: { title: "说明", type: "longText" },
        },
        {
          options: {
            left: 12,
            top: 505,
            height: 24,
            width: 418,
            color: "#FF0000",
            title:
              "注意：Echarts 默认开启 动画，请在 option 中配置 animation 为 false，否则打印时因为动画会导致只显示动画第一帧",
          },
          printElementType: { title: "注意", type: "longText" },
        },
      ],
      paperNumberLeft: 565.5,
      paperNumberTop: 819,
      paperNumberContinue: true,
      watermarkOptions: {},
    },
  ],
};
export default {
  preview: preview,
  name: name,
  desc: desc,
  author: author,
  link: link,
  printData: printData,
  json: json,
};
