import {preview} from "./template-files/template1";

const files = require.context('./template-files', false, /\.js$/)

const templates = {}
files.keys().forEach(key => {
  let templateKey = key.replace(/\.\//, '').replace(/(\.js)/, '');
  templates[templateKey] = Object.assign(templates[templateKey] || {}, files(key).default)
})

export default templates
