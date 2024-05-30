import { Button } from 'antd'
import { RotateRightOutlined } from '@ant-design/icons'
import { usePrinterContext } from '../context/printer-context'

export default function RotateButton() {
	const { paperHandler } = usePrinterContext()
	const { rotatePaper } = paperHandler
	return (
		<div>
			<Button
				onClick={() => rotatePaper()}
				icon={<RotateRightOutlined title='旋转纸张' />}
				shape='circle'
				type='text'
			/>
		</div>
	)
}
