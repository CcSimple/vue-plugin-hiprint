import { useReducer } from 'react'
import { getHiprintPrintTemplate } from '../utils/template-helper'
import { paperTypes, PaperTypes } from '@/hiprint/const/hiprint.config'
type PaperActions =
	| 'choosePaper'
	| 'showPaperPop'
	| 'hidePaperPop'
	| 'setPaperOther'

function paperReducer(
	state: typeof initPaperState,
	action: { type: PaperActions; payload?: Partial<typeof initPaperState> }
) {
	switch (action.type) {
		case 'choosePaper':
			return { ...state, ...action.payload }
		case 'showPaperPop':
			return { ...state, paperPopVisible: true }
		case 'hidePaperPop':
			return { ...state, paperPopVisible: false }
		case 'setPaperOther':
			return { ...state, ...action.payload }
		default: {
			return { ...state }
		}
	}
}

export default function usePaper(key: string) {
	const [paperState, dispatchPaperState] = useReducer(
		paperReducer,
		initPaperState
	)
	const tp = () => getHiprintPrintTemplate(key)

	const choosePaper = (type: PaperTypes) => {
		if (Object.keys(paperTypes).includes(type)) {
			dispatchPaperState({
				type: 'choosePaper',
				payload: { currentPaper: { type: type, ...paperTypes[type] } },
			})
			tp().setPaper(type)
		} else {
			setPaperOther({
				height: paperState.currentPaper.height,
				width: paperState.currentPaper.width,
			})
		}
	}
	const setPaperOther = (param: { height?: number; width?: number }) => {
		const paperSize = {
			height: param.height || paperState.currentPaper.height,
			width: param.width || paperState.currentPaper.width,
		}

		const action = {
			type: 'setPaperOther' as const,
			payload: { currentPaper: { type: 'others', ...paperSize } },
		}
		dispatchPaperState(action)
		tp().setPaper(paperSize.width, paperSize.height)
	}
	const showPaperPop = () => {
		dispatchPaperState({ type: 'showPaperPop' })
	}
	const hidePaperPop = () => {
		dispatchPaperState({ type: 'hidePaperPop' })
	}
	const rotatePaper = () => {
		tp().rotatePaper()
	}
	const clearPaper = () => {
		tp().clear()
	}

	return {
		...paperState,
		templateKey: key,
		showPaperPop,
		hidePaperPop,
		choosePaper,
		setPaperOther,
		rotatePaper,
		clearPaper,
	}
}
export declare type PaperHandler = ReturnType<typeof usePaper>
const initPaperState = {
	currentPaper: { type: 'A4', width: 210, height: 297 },
	// 自定义纸张
	paperPopVisible: false,
	paperWidth: '220',
	paperHeight: '80',
}
