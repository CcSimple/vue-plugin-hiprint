import { useEffect, useRef } from 'react'
import { usePrinterContext } from '../context/printer-context'
let isDraggable = false
// note:在useEffect中，事件监听里的state值不会被更新
const Designer = () => {
	const { zoomHandler } = usePrinterContext()
	const { zoomIn, zoomOut, scaleSize } = zoomHandler
	const designerRef = useRef<HTMLDivElement>(null)

	const onMouseDown = (e: MouseEvent) => {
		if (e.button === 1) {
			isDraggable = true
			e.preventDefault()
			e.currentTarget &&
				((e.currentTarget as HTMLDivElement).style.cursor = 'grabbing')
		}
	}
	const onMouseUp = (e: MouseEvent) => {
		isDraggable = false
		if (e.button === 1) {
			e.preventDefault()
			e.currentTarget &&
				((e.currentTarget as HTMLDivElement).style.cursor = 'default')
		}
	}
	const onMouseMove = (e: MouseEvent) => {
		if (isDraggable && designerRef.current) {
			// 鼠标移动距离
			const moveX = e.movementX
			const moveY = e.movementY
			designerRef.current.scrollLeft -= moveX
			designerRef.current.scrollTop -= moveY
		}
	}
	const onMouseLeave = onMouseUp
	const onWheel = (e: WheelEvent) => {
		if (e.ctrlKey) {
			e.preventDefault()
			if (e.deltaY > 0) {
				// 向下滚动 缩小
				zoomOut()
			} else {
				// 向上滚动 放大
				zoomIn()
			}
		}
	}

	useEffect(() => {
		// 监听中键
		designerRef.current?.addEventListener('mousedown', onMouseDown)
		designerRef.current?.addEventListener('mousemove', onMouseMove)
		designerRef.current?.addEventListener('mouseleave', onMouseLeave)
		designerRef.current?.addEventListener('mouseup', onMouseUp)
		return () => {
			designerRef.current?.removeEventListener('mousedown', onMouseDown)
			designerRef.current?.removeEventListener('mousemove', onMouseMove)
			designerRef.current?.removeEventListener('mouseleave', onMouseLeave)
			designerRef.current?.removeEventListener('mouseup', onMouseUp)
		}
	}, [])

	//note：在effect中，因为useEffect闭包，导致事件监听里的state不会更新
	// 解决方法1 添加依赖项，每次重新绑定监听 缺点：性能消耗大
	useEffect(() => {
		// 监听ctrl+mousewheel
		designerRef.current?.addEventListener('wheel', onWheel)
		return () => designerRef.current?.removeEventListener('wheel', onWheel)
	}, [scaleSize])

	/* 	// 解决方法2 在effect中执行具体业务
	useEffect(() => {
		//在这里zoomIn和zoomOut
	}, [scaleSize]) */
	return (
		<div className='overflow-auto h-full p-4' ref={designerRef}>
			<div id='hiprint-printTemplate' className='hiprint-printTemplate'></div>
		</div>
	)
}
export default Designer
