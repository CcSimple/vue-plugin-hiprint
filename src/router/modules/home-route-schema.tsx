import { createRef } from 'react'
import { PagePath } from '../type'
import { AppRouteObject } from '../type'
import HomePage from '@/view/Home'
import { AppstoreOutlined } from '@ant-design/icons'
const homeRouteSchema: AppRouteObject[] = [
	{
		path: PagePath.HOME,
		element: <HomePage />,
		meta: {
			label: '首页',
			key: PagePath.HOME,
			isMenu: true,
			nodeRef: createRef(),
			keepAlive: true,
			icon: <AppstoreOutlined />,
		},
	},
]
export default homeRouteSchema
