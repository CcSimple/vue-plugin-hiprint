const measureHelper = (function () {
	let ratio = 0
	const div = document.createElement('div')
	div.style.width = '1cm'
	div.id = 'measure-helper'
	document.body.appendChild(div)
	const w = getComputedStyle(div, null).width //获取px数值
	ratio = Number(w.substring(0, w.length - 2)) // '1px' -> 1
	div.parentNode?.removeChild(div)
	return {
		px2cm: (px: number) => Math.round((px / ratio) * 10) / 10,
		px2mm: (px: number) => Math.round((px / ratio) * 10),
		cm2px: (cm: number) => Math.round(cm * ratio),
		mm2px: (mm: number) => Math.round((mm * ratio) / 10),
	}
})()
export { measureHelper }
