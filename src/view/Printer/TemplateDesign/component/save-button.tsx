import { Dropdown, Input, Modal, message } from 'antd'
import { useState } from 'react'
import { usePrinterContext } from '../context/printer-context'

export default function SaveButton() {
	const { getTemplate } = usePrinterContext()
	const [visible, setVisible] = useState(false)
	const close = () => setVisible(false)
	const open = () => setVisible(true)
	return (
		<>
			<Dropdown.Button
				type='primary'
				menu={{
					items: [{ label: '保存为新模板', key: 'saveAs' }],
					onClick: () => {
						open()
					},
				}}
				size='small'
				className='mr-2'
				onClick={() => {
					console.log(getTemplate().getJsonTid())
					message.success('点击了保存按钮')
				}}>
				保存模板
			</Dropdown.Button>
			<Modal
				open={visible}
				onCancel={close}
				maskClosable={false}
				title={'模板另存为'}
				cancelText='取消保存'
				okText='确定'
				onOk={() => {
					message.success('保存成功')
					console.log(JSON.stringify(getTemplate().getJson(), null, 2))

					close()
				}}>
				<Input placeholder='请输入模板名称' required />
			</Modal>
		</>
	)
}
