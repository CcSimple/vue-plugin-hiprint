import { Button, message } from 'antd'
import { copyToClipboard, downloadJsonFile, uploadJsonFile } from '@/utils'
import {
	CopyOutlined,
	DownloadOutlined,
	UploadOutlined,
} from '@ant-design/icons'
import { usePrinterContext } from '../context/printer-context'

export default function ExportButtons() {
	const { getTemplate } = usePrinterContext()
	function downloadJson() {
		const jsonData = getTemplate().getJson()
		downloadJsonFile(jsonData, '测试保存模板').then(
			() => message.success('模板保存成功'),
			(e) => message.error(e.message)
		)
	}
	function uploadJson() {
		uploadJsonFile().then(
			(res) => {
				getTemplate().update(res)
				message.success('模板读取成功')
			},
			(e) => message.error(e.message)
		)
	}
	function copyJson() {
		const json = getTemplate().getJson()
		copyToClipboard(JSON.stringify(json, null, 2))
		message.success('已复制到剪切板')
	}
	return (
		<div className='flex flex-nowrap'>
			<Button
				onClick={downloadJson}
				icon={<DownloadOutlined title='保存模板到本地' />}
				shape='circle'
				type='text'
			/>
			<Button
				onClick={uploadJson}
				icon={<UploadOutlined title='从本地读取模板' />}
				shape='circle'
				type='text'
			/>
			<Button
				onClick={copyJson}
				icon={<CopyOutlined title='复制模板到剪切板' />}
				shape='circle'
				type='text'
			/>
		</div>
	)
}
