const options = [
	{ field: 'name', text: '姓名' },
	{ field: 'gender', text: '性别' },
	{ field: 'count', text: '数量' },
	{ field: 'amount', text: '总价' },
]

export const provider1 = [
	{
		key: 'NetProvider1',
		options: {
			groupName: '基础数据',
			printElements: [
				{
					id: 'selectField',
					type: 'text', // 这里的 type 是后端返回的, 需要转换成 hiprint 的 type
					width: 100,
					height: 20,
					title: '下拉选择字段名',
					field: 'name',
					testData: '下拉选择字段名',
					// 协商的可选参数, 没有可选参数就返回 {}
					options: { fields: options },
				},
				{
					id: 'inputField',
					type: 'text',
					width: 100,
					height: 20,
					title: '手动输入字段名',
					testData: '手动输入字段名',
					field: 'telephone',
					options: {},
				},
				{
					id: 'table',
					title: '表格',
					type: 'table',
					options: {
						field: 'table',
						fields: options,
					},
				},
			],
		},
	},
	{
		key: 'NetProvider2',
		options: {
			groupName: '基础数据2',
			printElements: [
				{
					id: 'longText',
					type: 'longText',
					width: 100,
					height: 100,
					title: '长文',
				},
				{
					id: 'img',
					type: 'img',
					width: 100,
					height: 100,
					title: '图片',
				},
				{
					id: 'qrcode',
					type: 'qrcode',
					width: 100,
					height: 100,
					title: '二维码',
					testData: 'xr9999999',
				},
				{
					id: 'barcode',
					type: 'barcode',
					title: '条形码',
				},
				{
					id: 'hline',
					type: 'hline',
					title: '横线',
				},
				{
					id: 'vline',
					type: 'vline',
					title: '竖线',
				},
				{
					id: 'html',
					type: 'html',
					title: 'HTML',
					options: {
						formatter: function () {
							return '<div style="height:50pt;width:50pt;background:red;border-radius: 50%;"></div>'
						},
					},
				},
				{
					id: 'oval',
					type: 'oval',
					title: '椭圆',
				},
				{
					id: 'rect',
					type: 'rect',
					title: '矩形',
				},
			],
		},
	},
]

export default provider1
