import { Button } from 'antd'
import { ZoomInOutlined, ZoomOutOutlined } from '@ant-design/icons'
import { usePrinterContext } from '../context/printer-context'

const ZoomButton = () => {
	const { zoomHandler } = usePrinterContext()
	const { zoomIn, zoomOut, scaleSize, setScaleTo, canZoomIn, canZoomOut } =
		zoomHandler
	const scalePercentage = () => Math.round(scaleSize * 100) + '%'

	return (
		<div className='flex items-center gap-1'>
			<Button
				onClick={() => zoomOut()}
				icon={<ZoomOutOutlined title='缩小' />}
				shape='circle'
				disabled={canZoomIn}
				type='text'></Button>
			<div
				className='cursor-default select-none hover:cursor-pointer hover:text-blue-600'
				onClick={() => {
					setScaleTo(1)
				}}
				title='点击重置'>
				{scalePercentage()}
			</div>
			<Button
				onClick={() => zoomIn()}
				icon={<ZoomInOutlined title='放大' />}
				shape='circle'
				disabled={canZoomOut}
				type='text'></Button>
		</div>
	)
}
export default ZoomButton
