import { memo, useState } from 'react'
import $ from 'jquery'
import { Button, Modal, Spin } from 'antd'
import { measureHelper } from '../utils/measure-helper'
import { usePrinterContext } from '../context/printer-context'
import { mockData } from '~/index.ts'

// 封装成一个组件，传入
const PrintPreview = () => {
	const { getTemplate, currentTemplateName } = usePrinterContext()
	const [visible, setVisible] = useState<boolean>(false)
	const [width, setWidth] = useState<number>(210)
	const [printLoading, setPrintLoading] = useState<boolean>(false)
	const show = (width = 210) => {
		if (getTemplate().editingPanel) {
			setWidth(getTemplate().editingPanel.width)
		} else {
			setWidth(width)
		}
		setVisible(true)
		setTimeout(() => {
			$('#preview_content_design').html(
				//@ts-ignore
				getTemplate().getHtml(mockData[currentTemplateName].data)
			)
		}, 300)
	}
	const hide = () => {
		setVisible(false)
	}
	const print = () => {
		setPrintLoading(true)
		getTemplate().print(
			mockData[currentTemplateName].data,
			{},
			{
				callback: () => {
					setPrintLoading(false)
				},
			}
		)
	}

	return (
		<>
			<Button type='primary' onClick={() => show()} size='small'>
				预览
			</Button>
			<Modal
				open={visible}
				maskClosable={false}
				onCancel={hide}
				width={width + measureHelper.px2mm(48) + 'mm'}
				style={{ padding: 0 }}
				footer={
					<>
						<Button onClick={print} type='primary'>
							浏览器打印
						</Button>
					</>
				}
				title={<div className='text-center'>打印预览</div>}>
				{printLoading ? (
					<div className='min-h-32 flex items-center justify-center'>
						<Spin />
					</div>
				) : (
					<div
						id='preview_content_design'
						style={{
							boxShadow:
								'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
							marginBottom: '2px',
						}}></div>
				)}
			</Modal>
		</>
	)
}
export default memo(PrintPreview)
