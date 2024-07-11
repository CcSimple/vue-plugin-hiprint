<template>
  <a-card>
    <div class="templates">
      <template v-for="(template, key) in templates">
        <div class="item-box" :key="key" @click="show(template)">
          <a-popover v-if="template.preview">
            <template #content>
              <img style="cursor: pointer" :src="template.preview" @click="show(template)"/>
            </template>
            <img class="preview" :src="template.preview"/>
          </a-popover>
          <div v-else class="preview">暂无预览图</div>
          <div class="name pd">{{ template.name }}</div>
          <div class="desc pd">{{ template.desc }}</div>
          <div class="author pd" @click.stop="">
            <a :href="template.link" target="_blank">{{ template.author }}</a>
          </div>
        </div>
      </template>
    </div>
    <template-preview ref="preview"/>
  </a-card>
</template>

<script>
import templates from './files'
import templatePreview from './preview'

export default {
  name: "templates",
  components: {templatePreview},
  data() {
    return {
      // templates
    }
  },
  computed: {
    templates() {
      const data = JSON.parse(JSON.stringify(templates));
      for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
          data[key].preview = process.env.NODE_ENV === 'development' ? templates[key].preview : `/vue-plugin-hiprint${templates[key].preview}`
        }
      }
      return data;
    }
  },
  mounted() {
  },
  methods: {
    show(template) {
      this.$refs.preview.show(template)
    }
  }
}
</script>

<style scoped lang="less">
.templates {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
}

.item-box {
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 10px #ccc;
  border-radius: 10px;
  margin: 0 10px 10px 0;

  img {
    object-fit: cover;
  }

  .preview {
    height: 200px;
    width: 200px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .pd {
    padding: 4px 6px;
  }

  .name {
    text-align: center;
    font-size: 16px;
    font-weight: bold;
  }

  .desc {
    font-size: 12px;
    color: #999;
  }

  .author {
    text-align: right;
  }
}

.item-box:hover {
  box-shadow: 0 0 10px #999;
  cursor: pointer;
}
</style>
