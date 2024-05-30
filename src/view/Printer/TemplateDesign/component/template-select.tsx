import { Select } from 'antd'
import { mockData } from '~/index.ts'
import { usePrinterContext } from '../context/printer-context'
import { useEffect } from 'react'
import { useMount } from 'ahooks'
const templateSelectOptions = Object.entries(mockData).map((item) => ({
	key: item[0],
	label: item[1].name,
	value: item[1].name,
	template: item[1].template,
}))
export default function TemplateSelect() {
	useEffect(() => {
		console.log('select useEffect')
	}, [])
	useMount(() => {
		console.log('select useMount')
	})
	console.log('select render')

	const { updateTemplate } = usePrinterContext()
	return (
		<div className='flex items-center gap-2'>
			{/* <FolderOpenOutlined title='选择模板' /> */}
			<span className='text-sm text-gray-700 text-nowrap'>模板</span>
			<Select
				className='min-w-28'
				size='small'
				options={templateSelectOptions}
				defaultValue={templateSelectOptions[0].value}
				onSelect={(e) => {
					const temp = templateSelectOptions.find((item) => item.value === e)
					updateTemplate(temp!.key, temp!.template)
				}}
			/>
		</div>
	)
}
