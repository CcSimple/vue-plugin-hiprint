import { Button, Dropdown, Space } from 'antd'
interface IActionButtonProps {
	onPrint: () => void
	showPrinterList: () => void
	onDirectPrint: () => void
	onPreview: () => void
}
export default function ActionButton(props: IActionButtonProps) {
	const { onPrint, showPrinterList, onDirectPrint, onPreview } = props
	return (
		<Space size='middle'>
			<Button type='link' size='small' onClick={onPrint}>
				浏览器打印
			</Button>

			<Dropdown.Button
				type='link'
				size='small'
				menu={{
					items: [{ label: '云打印', key: 'default-printer' }],
					onClick: showPrinterList,
				}}
				onClick={onDirectPrint}>
				直接打印
			</Dropdown.Button>

			<Button type='link' size='small' onClick={onPreview}>
				预览
			</Button>
		</Space>
	)
}
