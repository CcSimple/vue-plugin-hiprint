<template>
  <a-modal :visible="visible" :maskClosable="false"
           @cancel="hideModal" :width="width+'mm'">
    <a-spin :spinning="spinning" style="min-height: 100px">
      <div id="preview_content_tasks"></div>
    </a-spin>
    <template slot="title">
      <a-space>
        <div style="margin-right: 20px">打印预览</div>
        <a-button :loading="waitShowPrinter" type="primary" icon="printer" @click.stop="print">打印</a-button>
        <a-button type="primary" icon="printer" @click.stop="toPdf">pdf</a-button>
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
export default {
  name: "printPreview",
  props: {},
  data() {
    return {
      visible: false,
      spinning: true,
      waitShowPrinter: false,
      // 纸张宽 mm
      width: 0,
      // 模板
      hiprintTemplate: {},
      // 数据
      printData: {}
    }
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {
    hideModal() {
      this.visible = false
    },
    show(hiprintTemplate, printData, width = '210') {
      this.visible = true
      this.spinning = true
      this.width = hiprintTemplate.editingPanel ? hiprintTemplate.editingPanel.width : width;
      this.hiprintTemplate = hiprintTemplate
      this.printData = printData
      setTimeout(() => {
        // eslint-disable-next-line no-undef
        $('#preview_content_tasks').html(hiprintTemplate.getHtml(printData))
        this.spinning = false
      }, 500)
    },
    print() {
      this.waitShowPrinter = true
      this.hiprintTemplate.print(this.printData, {}, {
        callback: () => {
          this.waitShowPrinter = false
        }
      })
    },
    toPdf() {
      this.hiprintTemplate.toPdf(this.printData, '打印预览pdf');
    },
  }
}

</script>
<style lang="less" scoped>

/deep/ .ant-modal-body {
  padding: 0px;
}

/deep/ .ant-modal-content {
  margin-bottom: 24px;
}
</style>
