import {
	ArrowLeftOutlined,
	ArrowRightOutlined,
	HistoryOutlined,
} from '@ant-design/icons'
import { Button, Popover } from 'antd'
import { useState } from 'react'
import { usePrinterContext } from '../context/printer-context'

export default function HistoryOperation({
	showActionButton = false,
}) {
	const { historyHandler } = usePrinterContext()
	const { canUndo, canRedo, redo, unDo, getHistory } = historyHandler

	const [menu, setMenu] = useState<{ label: string; key: string }[]>([])
	const formateHistory = () => {
		const history = getHistory()
		const menu = history
			.map((item, index) => ({
				label: item.type,
				key: item.type + index,
			}))
			.slice(-10)
			.reverse()
		return menu
	}
	const popoverContent = () => (
		<div className='px-2 divide-y'>
			{menu.map((item) => (
				<div key={item.key}>{item.label}</div>
			))}
		</div>
	)
	return (
		<div className='flex items-center flex-nowrap '>
			<Button
				onClick={unDo}
				icon={<ArrowLeftOutlined title='撤销' />}
				shape='circle'
				type='text'
				disabled={!canUndo}
				style={{ display: showActionButton ? 'block' : 'none' }}></Button>
			<Popover
				content={popoverContent}
				title={'最近十条历史操作'}
				placement='bottomLeft'
				onOpenChange={(open) => {
					open && setMenu(() => formateHistory())
				}}>
				{/* <span
					onClick={getHistory}
					className='cursor-default select-none hover:font-bold text-nowrap  '>
					历史记录
				</span> */}
				<HistoryOutlined
					onClick={getHistory}
					className='cursor-default select-none hover:font-bold mx-2'
				/>
			</Popover>

			<Button
				onClick={redo}
				icon={<ArrowRightOutlined title='重做' />}
				shape='circle'
				type='text'
				disabled={!canRedo}
				style={{ display: showActionButton ? 'block' : 'none' }}></Button>
		</div>
	)
}
