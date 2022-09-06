<template>
  <el-dialog :visible="visible" :maskClosable="false"
           @close="hideModal" :width="width+'mm'">
      <div id="preview_content"></div>
    <template slot="title">
        <div style="margin-right: 20px">打印预览</div>
        <el-button :loading="waitShowPrinter" type="primary" icon="printer" @click.stop="print">打印</el-button>
        <el-button type="primary" icon="printer" @click.stop="toPdf">pdf</el-button>
    </template>
    <template slot="footer">
      <el-button key="close" type="info" @click="hideModal">
        关闭
      </el-button>
    </template>
  </el-dialog>
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
      this.width = width
      this.hiprintTemplate = hiprintTemplate
      this.printData = printData
      setTimeout(() => {
        // eslint-disable-next-line no-undef
        $('#preview_content').html(hiprintTemplate.getHtml(printData))
        this.spinning = false
      }, 500)
    },
    print() {
      this.waitShowPrinter = true
      this.hiprintTemplate.print(this.printData, {}, {
        callback: () => {
          console.log('callback')
          this.waitShowPrinter = false
        }
      })
    },
    toPdf() {
      this.hiprintTemplate.toPdf({}, '打印预览');
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
