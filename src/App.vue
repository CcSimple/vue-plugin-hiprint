<!--
 * @Author: 54xavier
 * @LastEditors: 54xavier
 * @Date: 2022-06-07 10:08:14
 * @LastEditTime: 2022-06-07 10:08:55
-->
<template>
  <div id="app">
    <a-space class="logos" style="float: left;">
      <img src="./assets/logo.png">
      <img src="./assets/hi.png">
      <div>期待大家的参与😁</div>
    </a-space>
    <a-row type="flex" class="menus">
      <a-button-group>
        <template v-for="demo in demoList">
          <a-button :type="demo.name === curDemo ? 'primary' : 'info'" @click="curDemo = demo.name" :key="demo.name">
            {{ demo.title }}
          </a-button>
        </template>
      </a-button-group>
    </a-row>
    <!-- 动态渲染组件，懒得去弄路由了 -->
    <keep-alive>
      <component :is="curDemo"/>
    </keep-alive>
  </div>
</template>

<script>

import printDesign from '@/demo/design/index'
import printCustom from '@/demo/custom/index'
import printTasks from '@/demo/tasks/index'
import printPanels from '@/demo/panels/index'

export default {
  name: 'App',
  components: {printDesign, printCustom, printTasks, printPanels},
  data() {
    return {
      curDemo: 'printDesign',
      keepInclude: 'printDesign,printCustom,printTasks,printPanels',
      demoList: [
        {name: 'printDesign', title: '默认拖拽设计'},
        {name: 'printCustom', title: '自定义设计'},
        {name: 'printTasks', title: '队列/批量打印'},
        {name: 'printPanels', title: '多面板设计'}
      ]
    }
  },
}
</script>

<style lang="less">
.logos {
  padding: 6px 24px;
  display: flex;
  justify-content: center;
  align-self: center;

  img {
    height: 40px;
    width: 40px;
  }
}

.menus {
  padding: 10px 24px;
}

// hiprint 拖拽图片
.hiprint-printElement-image-content {
  img {
    content: url("~@/assets/logo.png");
  }
}

// 修改 页眉/页脚线 样式
.hiprint-headerLine, .hiprint-footerLine {
  border-color: red !important;
}

.hiprint-headerLine:hover, .hiprint-footerLine:hover {
  border-top: 3px dashed red !important;
}

.hiprint-headerLine:hover:before {
  content: "页眉线";
  left: calc(50% - 18px);
  position: relative;
  background: #FFFF;
  top: -12px;
  color: red;
  font-size: 12px;
}

.hiprint-footerLine:hover:before {
  content: "页脚线";
  left: calc(50% - 18px);
  position: relative;
  color: red;
  background: #FFFF;
  top: -12px;
  font-size: 12px;
}
</style>
