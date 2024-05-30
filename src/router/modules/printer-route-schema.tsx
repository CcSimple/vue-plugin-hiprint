import { Outlet } from 'react-router-dom'
import { AppRouteObject, PagePath } from '../type'
import { createRef } from 'react'
import { PrinterOutlined } from '@ant-design/icons'
import TestTable from '@/view/Printer/TestTable'
import TemplateDesign from '@/view/Printer/TemplateDesign'

const printerRouteSchema: AppRouteObject[] = [
	{
		path: PagePath.PRINT,
		element: <Outlet />,
		meta: {
			key: PagePath.PRINT,
			label: '打印',
			isMenu: true,
			menuTheme: 'light',
			keepAlive: true,
			icon: <PrinterOutlined />,
		},

		children: [
			{
				path: PagePath.PRINT_TABLE,
				element: <TestTable />,
				meta: {
					key: PagePath.PRINT_TABLE,
					label: '打印列表',
					isMenu: true,
					nodeRef: createRef(),
					keepAlive: true,
				},
			},
			{
				path: PagePath.PRINT_TEMPLATE,
				element: <TemplateDesign />,
				meta: {
					key: PagePath.PRINT_TEMPLATE,
					label: '设计模板',
					nodeRef: createRef(),
					keepAlive: true,
					isMenu: true,
				},
			},
		],
	},
]
export default printerRouteSchema
