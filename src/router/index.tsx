import {
	RouteObject,
	createHashRouter,
	RouterProvider,
	Navigate,
} from 'react-router-dom'
import { AppRouteObject, PagePath } from './type'
import ErrorBoundary from '@/component/error-boundary'
import HomeLayout from '@/layout/home-layout'

/**从模块文件获取routes */
const getModuleRoutes = () => {
	const routeModules: AppRouteObject[] = []
	const modules = import.meta.glob<{
		default: AppRouteObject | AppRouteObject[]
	}>('./modules/**/*.tsx', {
		eager: true,
	})
	Object.keys(modules).forEach((key) => {
		const module = modules[key].default || {}
		const moduleList = Array.isArray(module) ? module : [module]
		routeModules.push(...moduleList)
	})
	return routeModules
}

const PAGE_NOT_FOUND_ROUTE: AppRouteObject = {
	path: PagePath.ANY,
	element: <div>404</div>,
}
const LOGIN_ROUTE: AppRouteObject = {
	path: PagePath.LOGIN,
	element: <div>login page</div>,
}
const moduleRoutes = getModuleRoutes()

const Router = () => {
	// 业务模块路由
	const syncRoutes: AppRouteObject = {
		path: PagePath.ROOT,
		element: (
			<ErrorBoundary FallbackComponent={(e) => <div>{e.error.message}</div>}>
				<HomeLayout />
			</ErrorBoundary>
		),
		children: [
			{
				index: true,
				element: <Navigate to={PagePath.HOME} />,
			},
			...moduleRoutes,
		],
	}
	const routerSchema = [
		syncRoutes,
		PAGE_NOT_FOUND_ROUTE,
		LOGIN_ROUTE,
	] as RouteObject[]
	const router = createHashRouter(routerSchema)
	return <RouterProvider router={router} />
}

export { moduleRoutes }
export default Router
