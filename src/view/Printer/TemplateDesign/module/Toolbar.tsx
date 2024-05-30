import { Divider } from 'antd'
import ZoomButton from '../component/zoom'
import HistoryOperation from '../component/history-buttons'
import RotateButton from '../component/rotate-button'
import ClearPaperButton from '../component/clear-button'
import ExportButtons from '../component/export-buttons'
import PreviewButton from './Preview'
import SaveButton from '../component/save-button'
import PaperSelect from '../component/paper-select'
import TemplateSelect from '../component/template-select'

const Toolbar = () => {
	//
	return (
		<div className='flex justify-between overflow-hidden'>
			<div className='flex items-center'>
				<HistoryOperation />
				<Divider type='vertical' className='h-3/5' />
				<TemplateSelect />
				<Divider type='vertical' className='h-3/5' />
				<PaperSelect />
				<Divider type='vertical' className='h-3/5' />
				<ZoomButton />
				<Divider type='vertical' className='h-3/5' />
				<RotateButton />
				<Divider type='vertical' className='h-3/5' />
				<ClearPaperButton />
				<Divider type='vertical' className='h-3/5' />
				<ExportButtons />
			</div>
			<div className='flex items-center mr-2'>
				<SaveButton />
				<PreviewButton />
			</div>
		</div>
	)
}
export default Toolbar
