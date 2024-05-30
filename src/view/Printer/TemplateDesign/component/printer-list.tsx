import { Card, Modal } from 'antd'
import { useBoolean } from 'ahooks'
import { HiWebSocketClient } from '@/hiprint/hiprint-types'
import { forwardRef, useImperativeHandle } from 'react'
interface PrinterListProps {
	onChoose: (
		client: string,
		printer: HiWebSocketClient[string]['printerList'][0]
	) => void
	printerList: HiWebSocketClient
}
export interface PrinterListRef {
	openModal: () => void
	closeModal: () => void
}
const PrinterList = forwardRef<PrinterListRef, PrinterListProps>(
	({ onChoose, printerList }, ref) => {
		const [state, { setTrue, setFalse }] = useBoolean()
		useImperativeHandle(ref, () => {
			return {
				openModal: setTrue, // 暴露给父组件的方法
				closeModal: setFalse, // 暴露给父组件的方法
			}
		})
		return (
			<Modal open={state} onCancel={setFalse} title='打印机列表' footer={null}>
				<div className='space-y-2'>
					{Object.entries(printerList).map(([id, client], index) => (
						<div key={id}>
							<Card
								title={
									<div className='flex space-x-4'>
										<div className='mr-auto'>打印机{index + 1}</div>
										<div>{client.mac}</div>
										<div>{client.ip}</div>
									</div>
								}
								styles={{ body: { padding: 0 } }}>
								<div className='divide-y'>
									{client.printerList.map((printer) => (
										<div
											key={printer.name}
											className=' px-2 hover:bg-gray-100 hover:underline cursor-pointer text-blue-500'
											onClick={() => onChoose(id, printer)}>
											{printer.displayName}
											{printer.isDefault ? ' (默认打印机)' : ''}
										</div>
									))}
								</div>
							</Card>
						</div>
					))}
				</div>
			</Modal>
		)
	}
)

export default PrinterList
