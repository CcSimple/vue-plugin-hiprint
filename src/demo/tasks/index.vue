<template>
  <el-card>
    <el-row style="margin-bottom: 10px">
      <el-col :span="24">
        <a-space>
          <!-- 纸张设置 -->
          <el-button-group>
            <el-button   v-for="(value,type) in paperTypes" :type="curPaperType === type ? 'primary' : ' '" @click="setPaper(type,value)" :key="type">
              {{ type }}
            </el-button>
          </el-button-group>
          <el-popover
              placement="bottom"
              width="300"
              title="设置纸张宽高(mm)"
              v-model="paperPopVisible">
            <div style="display: flex;align-items: center;justify-content: space-between;margin-bottom: 10px">
              <el-input type="number" v-model="paperWidth" style=" width: 100px; text-align: center" place="宽（mm）"></el-input>~
              <el-input type="number" v-model="paperHeight" style=" width: 100px; text-align: center" place="高（mm）"></el-input>
            </div>
            <div>
              <el-button type="primary" style="width: 100%" @click="otherPaper" size="mini">确定</el-button>
            </div>
            <el-button slot="reference" type="primary" style="margin:0 10px">自定义宽高</el-button>
          </el-popover>
          <!-- 打印数量 -->
          打印数量：
          <el-slider
              style="width: 300px"
              v-model="count"
              :max="10000"
              show-input>
          </el-slider>

<!--          <a-slider v-model="count" style="width: 200px" :min="1" :max="10000"/>-->
<!--          <a-input-number v-model="count" :min="1" :max="10000" style="margin-left: 16px"/>-->
          <!-- 预览/打印 -->
          <el-button-group>
            <el-button type="primary" icon="el-icon-view" @click="preView">
              预览
            </el-button>
            <el-button  type="primary" icon="el-icon-printer" @click="print">
              直接打印
            </el-button >
            <el-button type="primary" icon="el-icon-s-management" @click="save">
              保存
            </el-button>
            <el-button  type="danger"  icon="el-icon-delete" @click="clearPaper">
              清空
            </el-button >
          </el-button-group>
        </a-space>
      </el-col>
    </el-row>
    <el-row >
      <el-col :span="4">
        <el-card style="height: 100vh">
          <el-row>
            <el-col :span="24" class="rect-printElement-types hiprintEpContainer">
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :span="14">
        <el-card class="card-design">
          <div id="hiprint-printTemplate" class="hiprint-printTemplate"></div>
        </el-card>
      </el-col>
      <el-col :span="6" class="params_setting_container">
        <el-card>
          <el-row class="hinnn-layout-sider">
            <div id="PrintElementOptionSetting"></div>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
    <!-- 预览 -->
    <print-preview ref="preView"/>
  </el-card>
</template>

<script>

import printPreview from './preview'
import {MessageBox} from 'element-ui'
import {hiprint} from 'vue-plugin-hiprint'
import TaskRunner from 'concurrent-tasks';
import panel from './panel'
import provider from './providers'
import printData from './print-data'

let hiprintTemplate;
export default {
  name: "printCustom",
  components: {printPreview},
  data() {
    return {
      paperPopVisible:false,
      // 打印数量
      count: 1,
      // 当前纸张
      curPaper: {
        type: 'other',
        width: 80,
        height: 60
      },
      // 纸张类型
      paperTypes: {
        'A3': {
          width: 420,
          height: 296.6
        },
        'A4': {
          width: 210,
          height: 296.6
        },
        'A5': {
          width: 210,
          height: 147.6
        },
        'B3': {
          width: 500,
          height: 352.6
        },
        'B4': {
          width: 250,
          height: 352.6
        },
        'B5': {
          width: 250,
          height: 175.6
        }
      },
      // 自定义纸张
      paperWidth: '80',
      paperHeight: '60',
    }
  },
  computed: {
    curPaperType() {
      let type = 'other'
      let types = this.paperTypes
      for (const key in types) {
        let item = types[key]
        let {width, height} = this.curPaper
        if (item.width === width && item.height === height) {
          type = key
        }
      }
      return type
    }
  },
  mounted() {
    this.init()
    this.otherPaper()
  },
  methods: {
    init() {
      hiprint.init({
        providers: [provider]
      });
      $('.hiprintEpContainer').empty()
      hiprint.PrintElementTypeManager.build('.hiprintEpContainer', 'taskProviderModule');
      $('#hiprint-printTemplate').empty()
      let template = this.$ls.get('KEY_TEMPLATE_TASKS', panel)
      hiprintTemplate = new hiprint.PrintTemplate({
        template: template,
        settingContainer: '#PrintElementOptionSetting',
        paginationContainer: '.hiprint-printPagination'
      });
      hiprintTemplate.design('#hiprint-printTemplate');
    },
    /**
     * 设置纸张大小
     * @param type [A3, A4, A5, B3, B4, B5, other]
     * @param value {width,height} mm
     */
    setPaper(type, value) {
      try {
        if (Object.keys(this.paperTypes).includes(type)) {
          this.curPaper = {type: type, width: value.width, height: value.height}
          hiprintTemplate.setPaper(value.width, value.height)
        } else {
          this.curPaper = {type: 'other', width: value.width, height: value.height}
          hiprintTemplate.setPaper(value.width, value.height)
        }
      } catch (error) {
        this.$message.error(`操作失败: ${error}`)
      }
    },
    otherPaper() {
      let value = {}
      value.width = this.paperWidth
      value.height = this.paperHeight
      this.paperPopVisible = false
      this.setPaper('other', value)
    },
    preView() {
      let {width} = this.curPaper
      this.$refs.preView.show(hiprintTemplate, printData, width)
    },
    print() {
      if (window.hiwebSocket.opened) {
        const printerList = hiprintTemplate.getPrinterList();
        console.log(printerList)
        this.tasksPrint()
        return
      }
      this.$message.error('客户端未连接,无法直接打印')
    },
    // 队列打印
    tasksPrint() {
      // 官网/文档： https://concurrent-tasks.js.org/
      const runner = new TaskRunner();
      runner.setConcurrency(1); // 同时执行数量
      const task = []
      let that = this
      const tasksKey = `open${Date.now()}`;
      for (let i = 1; i <= this.count; i++) {
        // done -> 任务完成回调
        let key = `task${i}`;
        task.push(done => {
          let printData = {count: i.toString()}
          that.realPrint(runner, done, key, i, printData, tasksKey)
        })
      }
      runner.addMultiple(task)
      this.openNotification(runner, tasksKey)
    },
    realPrint(runner, done, key, i, printData, tasksKey) {
      let that = this
      that.$notification.info({
        key: key,
        placement: 'topRight',
        duration: null,
        message: `正在准备打印第 ${i} 张`,
        description: '队列运行中...',
      });
      let template = that.$ls.get('KEY_TEMPLATE_TASKS', panel)
      let hiprintTemplate = new hiprint.PrintTemplate({
        template: template,
      });
      hiprintTemplate.print2(printData, {printer: '', title: key});
      hiprintTemplate.on('printSuccess', function () {
        let info = runner.tasks.list.length > 1 ? '准备打印下一张' : '已完成打印'
        that.$notification.success({
          key: key,
          placement: 'topRight',
          message: key + ' 打印成功',
          description: info,
        });
        done()
        if (!runner.isBusy()) {
          that.$notification.close(tasksKey)
        }
      })
      hiprintTemplate.on('printError', function () {
        that.$notification.close(key)
        done()
        that.$message.error('打印失败，已加入重试队列中')
        runner.add(that.realPrint(runner, done, key, i, printData))
      })
    },
    openNotification(runner, tasksKey) {
      let that = this;
      that.$notification.open({
        key: tasksKey,
        message: '队列运行中...',
        duration: 0,
        placement: 'topLeft',
        description: '点击关闭所有任务',
        btn: h => {
          return h(
            'el-button',
            {
              props: {
                type: 'danger',
                size: 'small',
              },
              on: {
                click: () => {
                  that.$notification.close(tasksKey);
                  // 详情请查阅文档
                  runner.removeAll();
                  that.$message.info('已移除所有任务');
                },
              },
            },
            '关闭任务',
          );
        },
      });
    },
    save() {
      let json = hiprintTemplate.getJson()
      let template = this.$ls.get('KEY_TEMPLATE_TASKS', panel)
      console.log(json)
      console.log(JSON.stringify(json))
      this.$ls.set('KEY_TEMPLATE_TASKS', template)
      this.$message.info('保存成功')
    },
    clearPaper() {
      MessageBox.confirm('是否确认清空模板信息?', '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        try {
          hiprintTemplate.clear();
        } catch (error) {
          this.$message.error(`操作失败: ${error}`);
        }
      }).catch((err) => {
        console.log(err)
      })
    },
  }
}
</script>

<style lang="less" scoped>
// build 拖拽
/deep/ .hiprint-printElement-type > li > ul > li > a {
  padding: 4px 4px;
  color: #1296db;
  line-height: 1;
  height: auto;
  text-overflow: ellipsis;
}

// 默认图片
/deep/ .hiprint-printElement-image-content {
  img {
    content: url("~@/assets/logo.png");
  }
}

// 设计容器
.card-design {
  overflow: hidden;
  overflow-x: auto;
  overflow-y: auto;
}

</style>
