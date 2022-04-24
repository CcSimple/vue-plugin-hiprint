<template>
  <a-modal :visible="visible" :maskClosable="false" :bodyStyle="{ 'padding': 0 }"
           @cancel="hideModal" :width="width+'mm'">
    <a-spin :spinning="spinning" style="min-height: 100px">
      <div id="preview_content"></div>
    </a-spin>
    <template #title>
      <a-space>
        <div style="margin-right: 20px">打印预览</div>
        <a-button :loading="waitShowPrinter" type="primary" @click.stop="print">
          <template #icon>
            <PrinterOutlined/>
          </template>
          打印
        </a-button>
        <a-button type="primary" @click.stop="toPdf">
          <template #icon>
            <PrinterOutlined/>
          </template>
          pdf
        </a-button>
      </a-space>
    </template>
    <template #footer>
      <a-button type="info" @click="hideModal">
        <template #icon>
          <CloseOutlined/>
        </template>
        关闭
      </a-button>
    </template>
  </a-modal>
</template>

<script>
import {
  PrinterOutlined,
  CloseOutlined,
} from '@ant-design/icons-vue';

export default {
  name: "printPreview",
  components: {PrinterOutlined, CloseOutlined},
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
