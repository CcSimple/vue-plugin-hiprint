import { useState } from 'react'
import { getHiprintPrintTemplate } from '../utils/template-helper'

const scaleMax = 2
const scaleMin = 0.5
export default function useZoom(key: string) {
	const tp = () => getHiprintPrintTemplate(key)
	// 放大倍数
	const [scale, setScale] = useState(1)

	/** 放大 */
	const zoomIn = () => {
		if (scale >= scaleMax) return
		const newScale = scale + 0.1
		setScale(newScale)
		tp().zoom(scale + 0.1)
		// tp().zoom(1.2,true) 第二个参数传true则打印时也会放大
	}

	/** 缩小 */
	const zoomOut = () => {
		if (scale <= scaleMin) return
		const newScale = scale - 0.1
		setScale(newScale)
		tp().zoom(scale - 0.1)
	}
	const setScaleTo = (scale: number) => {
		tp().zoom(scale)
		setScale(scale)
	}

	return {
		zoomIn,
		zoomOut,
		setScaleTo,
		scaleSize: scale,
		// 可以放大
		canZoomIn: scale <= 0.5,
		canZoomOut: scale >= 2,
	}
}
