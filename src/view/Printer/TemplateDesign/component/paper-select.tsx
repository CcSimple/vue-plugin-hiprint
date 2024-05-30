import { Input, Select } from 'antd'
import { PaperTypes } from '@/hiprint/hiprint-types'
import { ColumnHeightOutlined, ColumnWidthOutlined } from '@ant-design/icons'
import { usePrinterContext } from '../context/printer-context'

const paperTypes = {
	A3: {
		width: 420,
		height: 296.6,
	},
	A4: {
		width: 210,
		height: 296.6,
	},
	A5: {
		width: 210,
		height: 147.6,
	},
	B3: {
		width: 500,
		height: 352.6,
	},
	B4: {
		width: 250,
		height: 352.6,
	},
	B5: {
		width: 250,
		height: 175.6,
	},
	自定义纸张: {
		width: 0,
		height: 0,
	},
} as const
const PaperSelect = () => {
	const { paperHandler } = usePrinterContext()
	const { choosePaper, currentPaper, setPaperOther } = paperHandler

	const selectOptions = Object.keys(paperTypes).map((item) => {
		return { value: item, label: item }
	})
	return (
		<div className='flex items-center gap-3'>
			<div className='flex items-center gap-2'>
				<span className='text-sm text-gray-700 text-nowrap'> 纸张</span>
				<Select
					options={selectOptions}
					defaultValue={currentPaper.type}
					className='min-w-28'
					size='small'
					onSelect={(value) => {
						choosePaper(value as PaperTypes)
					}}
				/>
			</div>
			<div className='flex items-center gap-2'>
				<ColumnWidthOutlined title='纸张宽度' />
				<Input
					size='small'
					placeholder='宽(mm)'
					className='max-w-32'
					value={currentPaper.width}
					disabled={currentPaper.type !== 'others'}
					onChange={(e) => {
						const width = Number(e.target.value)
						if (!isNaN(width)) {
							setPaperOther({ width })
						}
					}}
					addonAfter={'mm'}
					type='number'
				/>
			</div>
			<div className='flex items-center gap-2'>
				<ColumnHeightOutlined title='纸张高度' />
				<Input
					size='small'
					placeholder='高(mm)'
					className='max-w-32'
					disabled={currentPaper.type !== 'others'}
					value={currentPaper.height}
					onChange={(e) => {
						const height = Number(e.target.value)
						if (!isNaN(height)) {
							setPaperOther({ height })
						}
					}}
					type='number'
					addonAfter={'mm'}
				/>
			</div>
		</div>
	)
}
export default PaperSelect
