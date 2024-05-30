import { useBoolean } from 'ahooks'
import { Modal } from 'antd'
import { forwardRef, useImperativeHandle, useRef } from 'react'
import { measureHelper } from '../TemplateDesign/utils/measure-helper'
interface IPrintPreviewProp {
	templateSchema: any
	templateInstance: any
	data: any
}
export interface IPrintPreviewRef {
	openModal: () => void
	closeModal: () => void
}
const PrintPreview = forwardRef<IPrintPreviewRef, IPrintPreviewProp>(
	(props, ref) => {
		const { templateSchema, data, templateInstance } = props
		const [state, { setFalse, setTrue }] = useBoolean()
		const pRef = useRef<HTMLDivElement>(null)
		useImperativeHandle(ref, () => {
			return {
				openModal: setTrue,
				closeModal: setFalse,
			}
		})
		const html = templateInstance.getHtml(data)[0]
		// modal x-padding 24px
		const modalWidth =
			templateSchema.panels[0].width + measureHelper.px2mm(48) + 'mm'
		return (
			<Modal
				open={state}
				onCancel={() => {
					setFalse()
				}}
				width={modalWidth}
				afterOpenChange={(v) => {
					if (v) {
						pRef.current!.appendChild(html)
					}
				}}
				afterClose={() => {
					pRef.current!.innerHTML = ''
				}}
				title={<div className='text-center'>打印预览</div>}
				onOk={() => {
					templateInstance.print(data)
					setFalse()
				}}
				okText='打印'
				cancelText='关闭'>
				<div ref={pRef} style={{}}></div>
			</Modal>
		)
	}
)
export default PrintPreview
