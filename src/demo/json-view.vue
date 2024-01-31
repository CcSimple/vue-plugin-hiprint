<template>
  <div>
    <a-button type="primary" @click="show">
      查看模板json
    </a-button>
    <a-modal :visible="visible" :maskClosable="false"
             @cancel="hideModal">
      <a-spin :spinning="spinning" style="min-height: 100px">
        <a-textarea style="width:40vw;height:50vh" v-model:value="jsonOut"/>
      </a-spin>
      <template slot="title">
        <a-space>
          <div style="margin-right: 20px">JSON</div>
          <a-switch checked-children="tid模式" un-checked-children="默认" v-model:checked="tidMode"
                    @change="onModeChange"/>
          <a-switch checked-children="美化" un-checked-children="压缩" v-model:checked="beautify"
                    @change="onModeChange"/>
        </a-space>
      </template>
      <template slot="footer">
        <a-button key="close" type="info" @click="hideModal">
          关闭
        </a-button>
      </template>
    </a-modal>
  </div>
</template>

<script>
export default {
  name: "JSONView",
  props: {
    template: {
      type: Object,
    }
  },
  data() {
    return {
      visible: false,
      spinning: true,
      jsonOut: "",
      tidMode: false,
      beautify: false,
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
    show() {
      this.visible = true
      this.spinning = true
      setTimeout(() => {
        let json = this.tidMode ? this.template.getJsonTid() : this.template.getJson();
        let beautify = this.beautify ? 2 : 0;
        this.jsonOut = JSON.stringify(json, null, beautify);
        this.spinning = false
      }, 500)
    },
    onModeChange() {
      this.show();
    }
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
