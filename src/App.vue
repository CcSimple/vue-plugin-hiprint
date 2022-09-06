<template>
  <div id="app" >
    <div  style="display: flex; align-items: center;justify-content: left">
      <div class="logos">
        <img src="./assets/logo.png">
        <img src="./assets/hi.png">
        <div>期待大家的参与😁</div>
      </div>
      <el-row type="flex" class="menus">
        <el-button-group>
          <template v-for="demo in demoList">
            <el-button :type="demo.name === curDemo ? 'primary' : ' '" @click="curDemo = demo.name" :key="demo.name">
              {{ demo.title }}
            </el-button>
          </template>
        </el-button-group>
      </el-row>
    </div>
    <!-- 动态渲染组件，懒得去弄路由了 -->
    <keep-alive :include='keepInclude' :max="10">
      <component :is="curDemo"/>
    </keep-alive>
  </div>
</template>

<script>

import printDesign from '@/demo/design/index'
import printCustom from '@/demo/custom/index'
import printTasks from '@/demo/tasks/index'

export default {
  name: 'App',
  components: {printDesign, printCustom, printTasks},
  data() {
    return {
      curDemo: 'printDesign',
      keepInclude: 'printDesign,printCustom,printTasks',
      demoList: [
        {name: 'printDesign', title: '默认拖拽设计'},
        {name: 'printCustom', title: '自定义设计'},
        {name: 'printTasks', title: '队列/批量打印'}
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
