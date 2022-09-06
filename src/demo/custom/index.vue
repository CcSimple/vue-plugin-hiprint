<template>
  <el-card>
    <el-row style="margin-bottom: 10px">
      <el-col :span="4">
        <!-- 模板选择 -->

        <el-select v-model='mode' filterable @change="changeMode" :defaultValue="0" option-label-prop="label"
                  style="width: 100%;">
          <el-option v-for='(opt,idx) in modeList' :key='idx' :label="opt.name" :value='idx'>
            {{ opt.name }}
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="20">
          <!-- 纸张设置 -->
          <el-button-group style="margin:0 10px">
            <el-button   v-for="(value,type) in paperTypes" :type="curPaperType === type ? 'primary' : ' '" @click="setPaper(type,value)" :key="type">
              {{ type }}
            </el-button>
          </el-button-group>
          <el-input-number style="margin:0 10px" :value="scaleValue " :precision="2" :step="0.1" :min="scaleMin" :max="scaleMax" @change="changeScale"></el-input-number>
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

<!--          <el-button-group>-->
<!--            <template v-for="(value,type) in paperTypes">-->
<!--              <el-button :type="curPaperType === type ? 'primary' : 'info'" @click="setPaper(type,value)" :key="type">-->
<!--                {{ type }}-->
<!--              </el-button>-->
<!--            </template>-->
<!--            <el-popover v-model="paperPopVisible" title="设置纸张宽高(mm)" trigger="click">-->
<!--              <div slot="content">-->
<!--                <el-input-group compact style="margin: 10px 10px">-->
<!--                  <el-input type="number" v-model="paperWidth" style=" width: 100px; text-align: center"-->
<!--                           placeholder="宽(mm)"/>-->
<!--                  <el-input style=" width: 30px; border-left: 0; pointer-events: none; backgroundColor: #fff"-->
<!--                           placeholder="~" disabled-->
<!--                  />-->
<!--                  <el-input type="number" v-model="paperHeight" style="width: 100px; text-align: center; border-left: 0"-->
<!--                           placeholder="高(mm)"/>-->
<!--                </el-input-group>-->
<!--                <el-button type="primary" style="width: 100%" @click="otherPaper">确定</el-button>-->
<!--              </div>-->
<!--              <el-button :type="'other'==curPaperType?'primary':''">自定义纸张</el-button>-->
<!--            </el-popover>-->
<!--          </el-button-group>-->

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
          <!-- 保存/清空 -->

      </el-col>
    </el-row>
    <el-row :gutter="[8,0]">
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
import providers from './providers'
import printData from './print-data'

let hiprintTemplate;
export default {
  name: "printCustom",
  components: {printPreview},
  data() {
    return {
      paperPopVisible: false,
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
      this.modeList = providers.map((e) => {
        return {type: e.type, name: e.name, value: e.value}
      })
      this.changeMode()
    },
    changeMode() {
      let {mode} = this
      let provider = providers[mode]
      hiprint.init({
        providers: [provider.f]
      });
      $('.hiprintEpContainer').empty()
      hiprint.PrintElementTypeManager.build('.hiprintEpContainer', provider.value);
      $('#hiprint-printTemplate').empty()
      let templates = this.$ls.get('KEY_TEMPLATES', {})
      let template = templates[provider.value] ? templates[provider.value] : {}
      hiprintTemplate = new hiprint.PrintTemplate({
        template: template,
        settingContainer: '#PrintElementOptionSetting',
        paginationContainer: '.hiprint-printPagination'
      });
      hiprintTemplate.design('#hiprint-printTemplate');
      console.log(hiprintTemplate);
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
    changeScale(currentValue,oldValue) {
      let big = false
      currentValue <= oldValue ? big = false :big = true
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
        hiprintTemplate.zoom(scaleValue);
        this.scaleValue = scaleValue;
      }
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
      this.$message.error('客户端未连接,无法直接打印')
    },
    save() {
      let {mode} = this
      let provider = providers[mode]
      this.setTemplate({
        name: provider.value,
        json: hiprintTemplate.getJson()
      })
    },
    setTemplate(payload) {
      let templates = this.$ls.get('KEY_TEMPLATES', {})
      console.log(payload.json)
      templates[payload.name] = payload.json
      this.$ls.set('KEY_TEMPLATES', templates)
      this.$message.info('保存成功')
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
