<template>
  <a-modal :visible="visible" :maskClosable="false"
           @cancel="hideModal" :width="80+'vw'">
    <a-spin :spinning="spinning" style="min-height: 100px">
      <div v-show="isMultiPanel" id="template-preview-printPagination" style="margin: 14px 0 0 10px;"></div>
      <a-row>
        <a-col :span="18">
          <a-card class="card-design">
            <div id="template-preview"></div>
          </a-card>
        </a-col>
        <a-col :span="6">
          <a-card>
            <div id="template-preview-setting"></div>
          </a-card>
        </a-col>
      </a-row>
    </a-spin>
    <template slot="title">
      <a-space>
        <div style="margin-right: 20px">模板预览</div>
        <a-button :loading="waitShowPrinter" type="primary" icon="printer" @click.stop="print">打印</a-button>
        <a-button type="primary" icon="printer" @click.stop="toPdf">pdf</a-button>
        <a-button type="primary" icon="printer" @click.stop="print2">直接打印</a-button>
        <json-view :template="hiprintTemplate"/>
      </a-space>
    </template>
    <template slot="footer">
      <a-button key="close" type="info" @click="hideModal">
        关闭
      </a-button>
    </template>
  </a-modal>
</template>

<script>
import {hiprint} from '../../index'
import jsonView from '../json-view.vue'
import printPreview from "../custom/preview.vue";
import panel from "../design/panel";
import printData from "../design/print-data";

let hiprintTemplate;
export default {
  name: "templatePreview",
  components: {printPreview, jsonView},
  data() {
    return {
      visible: false,
      spinning: true,
      waitShowPrinter: false,
      template: null,
      isMultiPanel: true,
      // 模板
      hiprintTemplate: {},
      // 数据
      name: '名称',
      json: {},
      printData: {},
      // 扩展 css
      extendCss: ''
    }
  },
  methods: {
    hideModal() {
      this.visible = false
      $("link[media=print]").empty();
    },
    show(template) {
      let that = this;
      this.visible = true
      this.spinning = true
      this.template = template
      this.name = template.name
      this.json = template.json
      this.printData = template.printData
      this.extendCss = template.extendCss || "";
      if (this.extendCss.length > 1) {
        $(this.extendCss).appendTo($("link[media=print]"));
      }
      let isMounted = $('#template-preview').length <= 0 || $('#template-preview-setting').length <= 0;
      do {
        setTimeout(() => {
          $('#template-preview').empty()
          that.hiprintTemplate = hiprintTemplate = new hiprint.PrintTemplate({
            template: template.json,
            settingContainer: '#template-preview-setting',
            paginationContainer: '#template-preview-printPagination'
          })
          hiprintTemplate.design($('#template-preview'))
          that.isMultiPanel = template.json.panels.length > 1
          console.log('isMultiPanel', that.isMultiPanel)
          that.spinning = false
        }, 200)
        return
      } while (isMounted)
    },
    print() {
      let that = this;
      this.waitShowPrinter = true
      this.hiprintTemplate.print(this.printData, {}, {
        callback: () => {
          this.waitShowPrinter = false
        },
        styleHandler: () => {
          return that.extendCss
        }
      })
    },
    toPdf() {
      let that = this;
      this.hiprintTemplate.toPdf(this.printData, this.name, {
        styleHandler: () => {
          return that.extendCss
        }
      });
    },
    print2() {
      if (hiprint.hiwebSocket.opened) {
        let that = this;
        this.hiprintTemplate.print2(this.printData, {
          printer: '', title: this.name,
          styleHandler: () => {
            return that.extendCss
          }
        })
      } else
        this.$message.error('请先连接直接打印客户端')
    },
  }
}

</script>
<style lang="less" scoped>
.card-design {
  overflow: hidden;
  overflow-x: auto;
  overflow-y: auto;
}

/deep/ .ant-modal-body {
  padding: 0px;
}

/deep/ .ant-modal-content {
  margin-bottom: 24px;
}
</style>
