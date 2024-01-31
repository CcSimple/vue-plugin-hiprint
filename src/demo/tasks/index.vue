<template>
  <a-card>
    <a-row :gutter="[8,0]" style="margin-bottom: 10px">
      <a-col :span="24">
        <a-space>
          <!-- 纸张设置 -->
          <a-button-group>
            <template v-for="(value,type) in paperTypes">
              <a-button :type="curPaperType === type ? 'primary' : 'info'" @click="setPaper(type,value)" :key="type">
                {{ type }}
              </a-button>
            </template>
            <a-popover v-model="paperPopVisible" title="设置纸张宽高(mm)" trigger="click">
              <div slot="content">
                <a-input-group compact style="margin: 10px 10px">
                  <a-input type="number" v-model="paperWidth" style=" width: 100px; text-align: center"
                           placeholder="宽(mm)"/>
                  <a-input style=" width: 30px; border-left: 0; pointer-events: none; backgroundColor: #fff"
                           placeholder="~" disabled
                  />
                  <a-input type="number" v-model="paperHeight" style="width: 100px; text-align: center; border-left: 0"
                           placeholder="高(mm)"/>
                </a-input-group>
                <a-button type="primary" style="width: 100%" @click="otherPaper">确定</a-button>
              </div>
              <a-button :type="'other'==curPaperType?'primary':''">自定义纸张</a-button>
            </a-popover>
          </a-button-group>
          <!-- 打印数量 -->
          打印数量：
          <a-slider v-model="count" style="width: 200px" :min="1" :max="10000"/>
          <a-input-number v-model="count" :min="1" :max="10000" style="margin-left: 16px"/>
          <!-- 预览/打印 -->
          <a-button-group>
            <a-button type="primary" icon="eye" @click="preView">
              预览
            </a-button>
            <a-button type="primary" @click="print">
              直接打印
              <a-icon type="printer"/>
            </a-button>
          </a-button-group>
          <!-- 保存/清空 -->
          <a-button-group>
            <a-button type="primary" icon="save" @click="save">
              保存
            </a-button>
            <a-popconfirm
              title="是否确认清空?"
              okType="danger"
              okText="确定清空"
              @confirm="clearPaper"
            >
              <a-icon slot="icon" type="question-circle-o" style="color: red"/>
              <a-button type="danger">
                清空
                <a-icon type="close"/>
              </a-button>
            </a-popconfirm>
          </a-button-group>
          <json-view :template="template"/>
        </a-space>
      </a-col>
    </a-row>
    <a-row :gutter="[8,0]">
      <a-col :span="4">
        <a-card style="height: 100vh">
          <a-row>
            <a-col :span="24" class="rect-printElement-types hiprintEpContainer">
            </a-col>
          </a-row>
        </a-card>
      </a-col>
      <a-col :span="14">
        <a-card class="card-design">
          <div id="hiprint-printTemplate" class="hiprint-printTemplate"></div>
        </a-card>
      </a-col>
      <a-col :span="6" class="params_setting_container">
        <a-card>
          <a-row class="hinnn-layout-sider">
            <div id="PrintElementOptionSetting"></div>
          </a-row>
        </a-card>
      </a-col>
    </a-row>
    <!-- 预览 -->
    <print-preview ref="preView"/>
  </a-card>
</template>

<script>

import printPreview from './preview'
import jsonView from '../json-view.vue'

import {hiprint} from '../../index'
import TaskRunner from 'concurrent-tasks';
import panel from './panel'
import provider from './providers'
import printData from './print-data'

let hiprintTemplate;
export default {
  name: "printCustom",
  components: {printPreview, jsonView},
  data() {
    return {
      template: null,
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
      paperPopVisible: false,
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
      this.template = hiprintTemplate = new hiprint.PrintTemplate({
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
      this.$error({
        title: "客户端未连接",
        content: (h) => (
          <div>
            连接【{hiwebSocket.host}】失败！
            <br />
            请确保目标服务器已
            <a
              href="https://gitee.com/CcSimple/electron-hiprint/releases"
              target="_blank"
            >
              下载
            </a>
            并
            <a href="hiprint://" target="_blank">
              运行
            </a>
            打印服务！
          </div>
        ),
      });
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
            'a-button',
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
      try {
        hiprintTemplate.clear();
      } catch (error) {
        this.$message.error(`操作失败: ${error}`);
      }
    }
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
