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
    <component :is="curDemo"/>
  </div>
</template>

<script>

import printDesign from '@/demo/design/index'
import printCustom from '@/demo/custom/index'

export default {
  name: 'App',
  components: {printDesign, printCustom},
  data() {
    return {
      curDemo: 'printDesign',
      demoList: [
        {name: 'printDesign', title: '默认拖拽设计'},
        {name: 'printCustom', title: '自定义设计'}
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
</style>
