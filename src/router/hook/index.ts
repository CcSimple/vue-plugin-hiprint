import { useEffect, useMemo, useState } from 'react'
import {
	NavigateOptions,
	useMatches,
	useNavigate,
	useOutlet,
} from 'react-router-dom'
import { PagePath, RouteMeta } from '../type'
import { moduleRoutes } from '..'
import { flattenRoutesMeta } from '../utils'

export function useNav() {
	const navigate = useNavigate()
	const router = useMemo(
		() => ({
			back: () => navigate(-1),
			forward: () => navigate(1),
			reload: () => window.location.reload(),
			push: (href: string, options?: NavigateOptions) =>
				navigate(href, options),
			replace: (href: string) => navigate(href, { replace: true }),
		}),
		[navigate]
	)
	return router
}

export function useMatchedMeta() {
	const HOMEPAGE = PagePath.HOME
	const [matchMeta, setMatchMeta] = useState<RouteMeta>()

	const outlet = useOutlet()
	const matchesRoute = useMatches()
	const { push } = useNav()

	const lastMatchRoute = matchesRoute.at(-1)
	const flattenedMeta = flattenRoutesMeta(moduleRoutes)
	useEffect(() => {
		const currentRouteMeta = flattenedMeta.find(
			(item) =>
				item.key === lastMatchRoute?.pathname ||
				item.key === lastMatchRoute?.pathname.replace('/:id', '')
		)
		if (currentRouteMeta) {
			currentRouteMeta.outlet = outlet
			setMatchMeta(currentRouteMeta)
		} else {
			console.warn('该路由非目录路由')
			push(HOMEPAGE)
		}
	}, [matchesRoute])
	return matchMeta
}
