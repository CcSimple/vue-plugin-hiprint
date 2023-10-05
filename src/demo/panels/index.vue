<template>
  <a-card>
    <a-row :gutter="[8,0]" style="margin-bottom: 10px">
      <a-col :span="4">
        <!-- 模板选择 -->
        <a-select v-model='mode' showSearch @change="changeMode" :defaultValue="0" option-label-prop="label"
                  style="width: 100%;">
          <a-select-option v-for='(opt,idx) in modeList' :key='idx' :label="opt.name" :value='idx'>
            {{ opt.name }}
          </a-select-option>
        </a-select>
      </a-col>
      <a-col :span="20">
        <a-row>
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
                    <a-input type="number" v-model="paperHeight"
                             style="width: 100px; text-align: center; border-left: 0"
                             placeholder="高(mm)"/>
                  </a-input-group>
                  <a-button type="primary" style="width: 100%" @click="otherPaper">确定</a-button>
                </div>
                <a-button :type="'other'==curPaperType?'primary':''">自定义纸张</a-button>
              </a-popover>
            </a-button-group>
            <a-button type="text" icon="zoom-out" @click="changeScale(false)"></a-button>
            <a-input-number
              :value="scaleValue"
              :min="scaleMin"
              :max="scaleMax"
              :step="0.1"
              disabled
              style="width: 70px;"
              :formatter="value => `${(value * 100).toFixed(0)}%`"
              :parser="value => value.replace('%', '')"
            />
            <a-button type="text" icon="zoom-in" @click="changeScale(true)"></a-button>
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
          <!-- 多面板的容器 -->
          <div class="hiprint-printPagination" style="margin-top: 14px;"></div>
        </a-row>
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
import {providers, providerList} from './providers'
import printData from './print-data'

let hiprintTemplate;
export default {
  name: "printPanels",
  components: {printPreview, jsonView},
  data() {
    return {
      template: null,
      // 模板选择
      mode: 0,
      modeList: [],
      // 当前纸张
      curPaper: {
        type: 'other',
        width: 220,
        height: 80
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
      scaleValue: 1,
      scaleMax: 5,
      scaleMin: 0.5,
      // 自定义纸张
      paperPopVisible: false,
      paperWidth: '220',
      paperHeight: '80',
      lastjson: '',
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
      this.modeList = providerList
      this.changeMode()
      this.buildTemplate()
    },
    changeMode() {
      let {mode} = this
      let provider = providerList[mode]
      hiprint.init({
        providers: [...providers]
      });
      $('.hiprintEpContainer').empty()
      hiprint.PrintElementTypeManager.build('.hiprintEpContainer', provider.value);

    },
    buildTemplate() {
      $('#hiprint-printTemplate').empty()
      let templates = this.$ls.get('KEY_TEMPLATES_PANELS', {})
      let that = this;
      this.template = hiprintTemplate = new hiprint.PrintTemplate({
        template: templates,
        settingContainer: '#PrintElementOptionSetting',
        paginationContainer: '.hiprint-printPagination',
        defaultPanelName: '默认面板名称',
        onPanelAddClick: (panel, createPanel) => {
          panel.name = '新面板' + (panel.index + 1);
          that.$message.success('弹出个东西,让你们知道,在这里可以自定义面板名称');
          that.$notification.success({
            placement: 'topRight',
            message: '弹出个东西,让你们知道,在这里可以自定义面板名称',
            description: '自定义面板名称',
          });
          createPanel(panel);
        },
      });
      hiprintTemplate.design('#hiprint-printTemplate', {grid: true});
      // 获取当前放大比例, 当zoom时传true 才会有
      this.scaleValue = hiprintTemplate.editingPanel.scale || 1;
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
    changeScale(big) {
      let scaleValue = this.scaleValue;
      if (big) {
        scaleValue += 0.1;
        if (scaleValue > this.scaleMax) scaleValue = 5;
      } else {
        scaleValue -= 0.1;
        if (scaleValue < this.scaleMin) scaleValue = 0.5;
      }
      if (hiprintTemplate) {
        // scaleValue: 放大缩小值, false: 不保存(不传也一样), 如果传 true, 打印时也会放大
        hiprintTemplate.zoom(scaleValue, true);
        this.scaleValue = scaleValue;
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
        hiprintTemplate.print2(printData, {printer: '', title: 'hiprint测试打印'});
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
    save() {
      let json = hiprintTemplate.getJson();
      console.log(json);
      this.$ls.set('KEY_TEMPLATES_PANELS', json)
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
