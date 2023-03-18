export default (function () {
  function t() {
    this.name = "fontSize"; // 重写的参数 key
  }
  // 涉及修改元素样式， 添加一个 css 方法
  return t.prototype.css = function (t, e) {
    if (t && t.length) {
      if (e) return t.css("font-size", e + "pt"), "font-size:" + e + "pt";
      t[0].style.fontSize = "";
    }
    return null;
  },
  // 创建 DOM
  t.prototype.createTarget = function () {
    let list = [8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72];
    let fontSizeList = '\n            <option value="" >默认</option>';
    list.forEach(function (e) {
      fontSizeList += '\n            <option value="' + e + '">' + e + 'pt</option>';
    })
    this.target = $(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        字体大小\n        </div>\n        <div class="hiprint-option-item-field">\n        <select class="auto-submit">        </select>\n        </div>\n    </div>');
    this.target.find(".auto-submit").append($(fontSizeList));
    return this.target;
  },
  // 获取值
  t.prototype.getValue = function () {
    var t = this.target.find("select").val();
    if (t) return parseFloat(t.toString());
  },
  // 设置值
  t.prototype.setValue = function (t) {
    t && (this.target.find('option[value="' + t + '"]').length || this.target.find("select").prepend('<option value="' + t + '" >' + t + "</option>"));
    this.target.find("select").val(t);
  },
  // 销毁 DOM
  t.prototype.destroy = function () {
    this.target.remove();
  }, t;
}())
