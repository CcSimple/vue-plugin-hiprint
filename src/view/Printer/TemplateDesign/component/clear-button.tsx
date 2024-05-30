import { Button, Popconfirm } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { usePrinterContext } from '../context/printer-context'

export default function ClearPaperButton() {
	const { paperHandler } = usePrinterContext()
	const { clearPaper } = paperHandler
	return (
		<div>
			<Popconfirm title='清空所有内容' onConfirm={() => clearPaper()}>
				<Button
					icon={<DeleteOutlined title='清空所有内容' />}
					type='text'
					shape='circle'></Button>
			</Popconfirm>
		</div>
	)
}
