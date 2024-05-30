import { transferRoute2Menu, filterMenuRoute } from '@/router/utils'
import { AppRouteObject, RouteMeta } from '@/router/type'
import { useCallback, useEffect, useState } from 'react'
import { useMatchedMeta } from '@/router/hook'

export const useKeepAlive = (routesSchema: AppRouteObject[], limit = 20) => {
	const [menu] = useState(() =>
		transferRoute2Menu(filterMenuRoute(routesSchema))
	)
	// 记录当前路由的meta信息，其中包括路由实例
	const currentRouteMeta = useMatchedMeta()

	// 设置缓存路由
	const [cachedRoutes, setCachedRoutes] = useState<
		Array<RouteMeta & { outletCache: any }>
	>([])
	useEffect(() => {
		if (!currentRouteMeta) return
		// 用当前路径匹配缓存
		const exist = cachedRoutes.findIndex(
			(item) => item.key === currentRouteMeta.key
		)
		if (exist < 0) {
			setCachedRoutes((prev) => [
				...prev,
				{
					...currentRouteMeta,
					outletCache: currentRouteMeta.outlet,
					timeStamp: getTimeStamp(),
				},
			])
		} else {
			// 如果已经缓存过

			if (!cachedRoutes[exist].keepAlive) {
				refreshCachedRoute(currentRouteMeta.key)
			}
			if (cachedRoutes.length > limit && exist !== cachedRoutes.length - 1) {
				//lru算法
				const newCachedRoutes = [
					...cachedRoutes.slice(0, exist),
					...cachedRoutes.slice(exist + 1),
					...cachedRoutes.slice(exist, exist + 1),
				]
				setCachedRoutes(newCachedRoutes)
			}
		}
		setActiveRoutePath(currentRouteMeta.key)
	}, [currentRouteMeta])

	// 当前激活的路由,标记位，可以对菜单的右键操作等做拓展
	const [activeRoutePath, setActiveRoutePath] = useState('')

	const refreshCachedRoute = useCallback(
		(key: string = activeRoutePath) => {
			setCachedRoutes((prev) => {
				const index = prev.findIndex((item) => item.key === key)
				if (index >= 0) {
					prev[index].timeStamp = getTimeStamp()
				}
				return [...prev]
			})
		},
		[activeRoutePath]
	)
	const dropCachedRoute = useCallback(
		(key: string = activeRoutePath) => {
			//从cachedRoutes中删除
			setCachedRoutes((prev) => prev.filter((item) => item.key !== key))
		},
		[activeRoutePath]
	)

	return {
		menu,
		refreshCachedRoute,
		dropCachedRoute,
		activeRoutePath,
		cachedRoutes,
	}
}

const getTimeStamp = () => new Date().getTime().toString()
