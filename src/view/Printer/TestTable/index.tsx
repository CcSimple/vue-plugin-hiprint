import React, { useRef, useState } from 'react'
import { Button, Table, message } from 'antd'
import type { TableProps } from 'antd'
import { hiprint } from '@/hiprint'
import PrinterList, {
	PrinterListRef,
} from '@/view/Printer/TemplateDesign/component/printer-list'
import { HiWebSocketClient } from '@/hiprint/hiprint-types'
import ActionButton from './action-button'
import { mockData } from '~/index'
import PrintPreview, { IPrintPreviewRef } from './preview'
import { localClientSocket } from '@/hiprint/plugins/local-client-socket'
import { useRequest } from 'ahooks'
import { fetchTableData } from '~/index'

const PrintTable: React.FC = () => {
	const tableTemplate = new hiprint.PrintTemplate({
		template: mockData.demo2.template,
	})
	const dtp = new hiprint.PrintTemplate({ template: mockData.demo3.template })
	const [printerList, setPrinterList] = useState<HiWebSocketClient | {}>({})
	// 打印机列表modal
	const printerListRef = useRef<PrinterListRef>(null)
	// 预览莫大了
	const previewRef = useRef<IPrintPreviewRef>(null)
	const [tableData, setTableData] = useState([])
	const [currentRecord, setCurrentRecord] = useState<any>()
	const onChoosePrinter = (
		clientId: string,
		printer: HiWebSocketClient[string]['printerList'][number]
	) => {
		console.log(clientId, printer)
		dtp.print2(currentRecord, {
			client: clientId,
			printer: printer.name,
		})
		printerListRef.current?.closeModal()
	}
	const onPrintFullTable = () => {
		tableTemplate.print({ table: tableData })
	}

	const { loading } = useRequest(() => fetchTableData(), {
		onSuccess: (res) => {
			setTableData(res)
		},
	})
	const columnSchema: TableProps['columns'] = [
		{
			title: 'id',
			dataIndex: 'id',
			key: 'id',
		},
		{
			title: 'name',
			dataIndex: 'name',
			key: 'name',
			className: 'text-nowrap text-ellipsis',
		},
		{
			title: 'gender',
			dataIndex: 'gender',
			key: 'gender',
			className: 'text-nowrap text-ellipsis',
		},
		{
			title: 'count',
			dataIndex: 'count',
			className: 'text-nowrap text-ellipsis',
			key: 'count',
		},
		{
			title: 'amount',
			dataIndex: 'amount',
			key: 'amount',
			className: 'text-nowrap text-ellipsis',
		},
		{
			title: 'Action',
			key: 'action',
			render: (_, record) => {
				return (
					<>
						<ActionButton
							onPreview={() => {
								setCurrentRecord(record)
								previewRef.current?.openModal()
							}}
							onPrint={() => {
								dtp.print(record)
							}}
							onDirectPrint={() => {
								const client = localClientSocket.clientInfo
								if (!client) {
									message.error('客户端未连接')
								}
								localClientSocket.send({
									html: dtp.getHtml(record)[0].outerHTML,
									templateId: '1',
								})
							}}
							showPrinterList={() => {
								window.hiwebSocket.refreshPrinterList()
								const clients = window.hiwebSocket.clients || {}
								console.log(clients)
								if (Object.keys(clients).length === 0) {
									message.error(
										'未检测到云打印机,请确认启动客户端的中转服务,并刷新页面'
									)
								} else {
									setPrinterList(clients)
									setCurrentRecord(record)
									printerListRef.current?.openModal()
								}
							}}
						/>
					</>
				)
			},
		},
	]

	return (
		<div className='overflow-auto bg-white'>
			<Button onClick={onPrintFullTable} loading={loading}>
				打印总表
			</Button>
			<Table
				columns={columnSchema}
				dataSource={tableData}
				rowKey={(r) => r.id}
				size='small'
				scroll={{ x: true, y: 700 }}
			/>
			<PrintPreview
				ref={previewRef}
				templateSchema={mockData.demo2.template}
				templateInstance={dtp}
				data={currentRecord}
			/>
			<PrinterList
				onChoose={onChoosePrinter}
				printerList={printerList}
				ref={printerListRef}
			/>
		</div>
	)
}

export default PrintTable
