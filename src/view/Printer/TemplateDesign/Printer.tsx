import TemplatePanel from './module/ProviderPanel.tsx'
import Designer from './module/DesignerPanel.tsx'
import ConfigPanel from './module/ConfigPanel.tsx'
import { usePrinterContext } from './context/printer-context.tsx'
import { useEffect } from 'react'
import { Card, Col, Row } from 'antd'
import Toolbar from './module/Toolbar.tsx'
import provider1 from './provider/provider.ts'
import { mockData } from '~/index.ts'
export const printKey = 'PRINT_KEY'
const Printer = () => {
	const { buildProviders, buildDesigner } = usePrinterContext()
	// 初始化template
	useEffect(() => {
		buildProviders(provider1)
		buildDesigner({
			template: mockData.demo1.template,
			settingContainer: '#PrintElementOptionSetting',
			paginationContainer: '.hiprint-printPagination',
			onDataChanged: (type: string, json: any) => {
				const printDataChange = new CustomEvent('printDataChange', {
					detail: { type, json },
				})
				window.dispatchEvent(printDataChange)
			},
			onImageChooseClick(target) {
				const fileInput = document.createElement('input')
				fileInput.type = 'file'
				fileInput.accept = 'image/*'
				fileInput.click()
				fileInput.onchange = () => {
					if (fileInput.files) {
						const file = fileInput.files[0]
						const reader = new FileReader()
						reader.readAsDataURL(file)
						reader.onloadend = () => {
							const url = reader.result as string
							if (url) {
								target.refresh(url, { real: true })
							}
						}
					}
					fileInput.remove()
				}
			},
		})
	}, [])

	return (
		<div className='react-hi-printer-container bg-white h-full flex flex-col '>
			<Card
				className='h-8 rounded-none'
				styles={{ body: { padding: 0, height: '100%' } }}>
				<Toolbar />
			</Card>
			<Row className='flex-1 overflow-hidden '>
				<Col span={3}>
					<TemplatePanel />
				</Col>
				<Col span={15} className='h-full'>
					<Card
						className='rounded-none h-full overflow-hidden'
						styles={{ body: { height: '100%' } }}>
						<Designer />
					</Card>
				</Col>
				<Col span={6} className='h-full min-w-[200px]'>
					<Card className='rounded-none h-full overflow-auto'>
						<ConfigPanel />
					</Card>
				</Col>
			</Row>
		</div>
	)
}

export default Printer
