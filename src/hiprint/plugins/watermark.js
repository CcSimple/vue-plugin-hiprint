/**
 * @Description: canvas 简单的水印工具
 * @Author: CcSimple
 * @Github: https://github.com/CcSimple
 */

/**
 * @Description: 时间格式化
 * @param date
 * @param format
 * @returns {string|null}
 */
function timeFormat(date, format = 'YYYY-MM-DD') {
  if (!date) return null;
  if (typeof date === 'number') {
    date = new Date(date);
  }
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hours24 = date.getHours();
  const hours = hours24 % 12 === 0 ? 12 : hours24 % 12;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const dd = t => `0${t}`.slice(-2);
  const map = {
    YYYY: year,
    MM: dd(month + 1),
    MMMM: `${month + 1}月`,
    M: month + 1,
    DD: dd(day),
    D: day,
    HH: dd(hours24),
    H: hours24,
    hh: dd(hours),
    h: hours,
    mm: dd(minutes),
    m: minutes,
    ss: dd(seconds),
    s: seconds
  };
  return format.replace(/Y+|M+|D+|H+|h+|m+|s+|S+|Q/g, str => String(map[str]));
}

// 水印参数
const defaultOption = {
  id: 'watermark', // 水印id
  watch: false,
  content: 'vue-plugin-hiprint', // 水印内容
  container: '.hiprint-printPaper', // 水印容器
  width: 200, // 水印宽度
  height: 200, // 水印高度
  textAlign: 'center', // 水印文字水平对齐方式
  textBaseline: 'middle', // 水印文字垂直对齐方式
  fontSize: '14px', // 水印文字大小
  fontFamily: 'Microsoft Yahei', // 水印文字字体
  fillStyle: 'rgba(184, 184, 184, 0.3)', // 水印文字颜色
  rotate: 25,// 水印文字旋转角度
  timestamp: false, // 是否显示时间戳
  format: 'YYYY-MM-DD HH:mm', // 时间戳格式
  zIndex: 0
};

// 监听器
let observerMap = {};

/**
 * @Description: 创建水印
 * @param param
 * @private
 */
function _createWatermark(param) {
  const {
    id,
    watch,
    content,
    container,
    width,
    height,
    textAlign,
    textBaseline,
    fontSize,
    fontFamily,
    fillStyle,
    rotate,
    timestamp,
    format,
    zIndex
  } = param;

  observerMap[id] = {
    wmMo: null, // MutationObserver
    wmTimer: null // timestamp
  }

  const canvas = document.createElement('canvas');
  canvas.setAttribute('width', `${width}px`);
  canvas.setAttribute('height', `${height}px`);

  let containerDom = typeof container === 'string' ? document.querySelector(container) : container;

  const ctx = canvas.getContext('2d');
  ctx.textAlign = textAlign;
  ctx.textBaseline = textBaseline;
  ctx.font = `${fontSize} ${fontFamily}`;
  ctx.fillStyle = fillStyle;
  ctx.translate(width / 2, height / 2);
  ctx.rotate(-(Math.PI / 180) * rotate);
  ctx.fillText(`${content}`, 0, 0);
  timestamp && ctx.fillText(`${timeFormat(new Date(), format)}`, 0, parseInt(fontSize) + 5);

  let __vm = containerDom.querySelector('.__vm__' + id);
  const watermarkDiv = __vm || document.createElement('div');
  const withHeightStr = containerDom.getAttribute('style');
  const styleStr = `position:absolute;user-select:none;top:0;left:0;${withHeightStr};z-index:${zIndex};pointer-events:none !important;background-repeat:repeat;background-image:url('${canvas.toDataURL()}');-webkit-print-color-adjust: exact;`;

  watermarkDiv.setAttribute('style', styleStr);
  watermarkDiv.classList.add('__vm__' + id);

  if (!__vm) {
    containerDom.insertBefore(watermarkDiv, containerDom.firstChild);
  }

  if (watch) {
    const MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
    if (MutationObserver) {
      observerMap[id]["wmMo"] = new MutationObserver((e) => {
        let change = e.some(item => item.target.className == containerDom.className && item.type == 'attributes');
        __vm = containerDom.querySelector('.__vm__' + id);
        if ((__vm && __vm.getAttribute('style') !== styleStr) || !__vm || change) {
          // 避免一直触发
          observerMap[id]["wmMo"].disconnect();
          observerMap[id]["wmMo"] = null;
          delete observerMap[id]["wmMo"];
          _createWatermark(param);
        }
      });
      observerMap[id]["wmMo"].observe(containerDom, {
        attributes: true, subtree: true, childList: true
      });
    }
  }

  if (format) {
    let timeout = 1000 * 60 * 60 * 24;
    if (format.includes('s')) {
      timeout = 1000;
    } else if (format.includes('m')) {
      timeout = 1000 * 60;
    } else if (format.includes('h') || format.includes('H')) {
      timeout = 1000 * 60 * 60;
    }

    observerMap[id]["wmTimer"] = window.setTimeout(() => {
      // 触发 MutationObserver
      watermarkDiv.style.bottom = '0';
    }, timeout);
  }
}

/**
 * @Description: 销毁水印
 */
const destroyWatermark = function (options) {
  const {
    id,
    watch,
    container,
  } = options;
  if (watch) {
    let containerDom = typeof container === 'string' ? document.querySelector(container) : container;
    // 监听器关闭
    if (observerMap[id]) {
      observerMap[id]["wmMo"] && observerMap[id]["wmMo"].disconnect();
      observerMap[id]["wmMo"] = null;
      observerMap[id]["wmTimer"] && window.clearTimeout(observerMap[id]["wmTimer"]);
      observerMap[id]["wmTimer"] = null;
      delete observerMap[id];
    }
    // 删除水印元素
    const __vm = containerDom.querySelector('.__vm__' + id);
    __vm && __vm.parentNode.removeChild(__vm);
  }
}

/**
 * @Description: 创建水印
 * @param option
 */
const createWatermark = function (option) {
  let options = Object.assign({}, defaultOption, option);
  destroyWatermark(options);
  _createWatermark(options);
}

// 暴露接口
export default {
  createWatermark, destroyWatermark
}
