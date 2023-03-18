export default (function () {
  function t() {
    // json模板 options 对应键值 key
    this.name = "scale";
  }
  // 涉及修改元素样式， 添加一个 css 方法
  // t: 元素对象， e 参数值
  return t.prototype.css = function (t, e) {
    if (t && t.length) {
      if (e) return t.css('transform', 'scale(' + e + ')');
    }
    return null;
  },
  // 创建 DOM
  t.prototype.createTarget = function (t, i, e) { //  t: 元素对象，i: 元素options, e: 元素printElementType
    return this.target = $('<div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        缩放\n        </div>\n        <div class="hiprint-option-item-field">\n        <input type="number" value="1" step="0.1" min="0.1" max="3" class="auto-submit"/>\n        </div>\n    </div>'), this.target;
  },
  // 获取值
  t.prototype.getValue = function () {
    var t = this.target.find("input").val();
    if (t) return parseFloat(t.toString());
  },
  // 设置值
  t.prototype.setValue = function (t) { //  t: options 对应键的值
    this.target.find("input").val(t);
  },
  // 销毁 DOM
  t.prototype.destroy = function () {
    this.target.remove();
  }, t;
}())
