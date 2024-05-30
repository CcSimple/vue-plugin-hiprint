import { useState } from 'react'
import { getHiprintPrintTemplate } from '../utils/template-helper'

/** 控制画板的前进后退  */
export function useHistory(key: string) {
	// 只能监听移动操作，缩放操作无法监听
	const tp = () => getHiprintPrintTemplate(key)
	const [canRedo, setCanRedo] = useState(false)
	const [canUndo, setCanUndo] = useState(false)

	function redo() {
		tp().redo()
		checkHistoryPointer()
	}

	function unDo() {
		tp().undo()
		checkHistoryPointer()
	}
	// 监听拖动的更新 onDataChanged
	window.addEventListener('printDataChange', () => {
		setCanUndo(true)
		setCanRedo(false)
	})
	function getHistory() {
		return tp().historyList
	}

	// 比较当前指针historyPos和历史操作堆栈的数量
	function checkHistoryPointer() {
		setCanUndo(() => tp().historyPos !== 0)
		setCanRedo(() => tp().historyPos !== tp().historyList.length - 1)
	}

	return {
		canUndo,
		canRedo,
		getHistory,
		redo,
		unDo,
	}
}
