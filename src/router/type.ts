import { ReactElement, ReactNode } from 'react'
import { RouteObject } from 'react-router-dom'

export interface RouteMeta {
	/**
	 * antd menu selectedKeys
	 */
	key: string
	/**
	 * menu label, i18n
	 */
	label: string
	/**
	 * menu prefix icon
	 */
	icon?: ReactElement
	/**
	 * menu suffix icon
	 */
	suffix?: ReactNode
	/**
	 * disable in menu
	 */
	disabled?: boolean
	/**
	 * 菜单是否缓存
	 */
	keepAlive?: boolean
	/**
	 * react router outlet
	 */
	outlet?: ReactElement | null
	/**
	 * use to refresh tab
	 */
	timeStamp?: string
	/**
	 * external link and iframe need
	 */
	frameSrc?: string

	/** 给每个节点添加一个nodeRef */
	nodeRef?: React.MutableRefObject<HTMLDivElement | null>
	/** 是否显示在首页 */
	isMenu?: boolean
	menuTheme?: 'dark' | 'light'
	/** 是否是导航栏 */
	isTab?: boolean
}
export type AppRouteObject = {
	path?: PagePath
	order?: number
	meta?: RouteMeta
	children?: AppRouteObject[]
} & Omit<RouteObject, 'children' | 'path'>

export enum PagePath {
	ANY = '*',
	ROOT = '/',
	HOME = '/home',
	LOGIN = '/login',
	REGISTER = '/register',
	NOT_FOUND = '/404',
	DASHBOARD = '/dashboard',
	PRINT = '/print',
	PRINT_PROVIDER = '/print/detail',
	PRINT_TABLE = '/print/list',
	PRINT_TEMPLATE = '/print/template',
}
