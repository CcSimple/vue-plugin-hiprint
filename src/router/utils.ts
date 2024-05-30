import { AppRouteObject, RouteMeta } from './type'
import { MenuProps } from 'antd'

type MenuItem = Required<MenuProps>['items'][number]
/**过滤带有isMenu的route */
const filterMenuRoute = (routes: AppRouteObject[]) => {
	// 过滤有isMenu标记的route
	const menuRoutes = [...routes].filter((route) => {
		if (route.meta?.isMenu) {
			route.children &&= filterMenuRoute(route.children)
			return true
		}
	})
	return menuRoutes
}
/** 将route转化为menu格式 */
const transferRoute2Menu = (routes: AppRouteObject[]) => {
	const menuItems = routes.map((route) => {
		const { meta, children } = route
		const menuItem: MenuItem = {
			key: '',
			label: null,
			icon: null,
		}
		menuItem.key = meta?.key || ''
		menuItem.label = meta?.label
		if (children && children.length > 0) {
			Object.defineProperty(menuItem, 'children', {
				value: transferRoute2Menu(children),
				configurable: true,
				enumerable: true,
				writable: true,
			})
		}
		if (meta?.menuTheme) {
			Object.defineProperty(menuItem, 'theme', {
				value: meta.menuTheme,
				configurable: true,
				enumerable: true,
				writable: true,
			})
		}
		if (meta?.icon) {
			menuItem.icon = meta?.icon
		}
		return menuItem
	})

	return menuItems
}
const flatten = (routes: AppRouteObject[]) => {
	const flattenedMeta = routes.reduce<RouteMeta[]>((prev, route) => {
		const { meta, children } = route
		if (meta) {
			prev.push(meta)
		}
		if (children) {
			prev.push(...flatten(children))
		}
		return prev
	}, [])
	return flattenedMeta
}
const flattenRoutesMeta = (routes: AppRouteObject[]) => {
	const menuRoutes = filterMenuRoute(routes)
	const flattenedMeta = flatten(menuRoutes)
	return flattenedMeta
}

export { filterMenuRoute, transferRoute2Menu, flattenRoutesMeta }
