import { useKeepAlive } from '@/hooks/useKeepAlive'
import { moduleRoutes } from '@/router'
import { useNav } from '@/router/hook'
import { ConfigProvider, Layout, Menu } from 'antd'
import { useLocation } from 'react-router-dom'

const AppLayout = () => {
	const { Header, Content, Sider } = Layout
	const { pathname } = useLocation()
	const { push } = useNav()
	const { menu, activeRoutePath, cachedRoutes } = useKeepAlive(moduleRoutes)

	const onSelect = ({ key }: { key: string }) => {
		push(key)
	}

	return (
		<ConfigProvider
			theme={{ token: { paddingLG: 16, colorSplit: 'rgba(5,5,5,0.2)' } }}>
			<Layout className='h-screen'>
				<Sider collapsible breakpoint='xl'>
					<div className='h-8 m-4 bg-white/20 rounded' />
					<Menu
						items={menu}
						theme='dark'
						mode='inline'
						defaultSelectedKeys={['/printer/list']}
						selectedKeys={[pathname]}
						defaultOpenKeys={['/printer']}
						onSelect={onSelect}
					/>
				</Sider>
				<Layout>
					<Header className='bg-white border-b px-6 h-10'></Header>
					<Content className='overflow-auto'>
						{cachedRoutes.map((cr) => (
							<div
								key={cr.key}
								style={{
									display: activeRoutePath === cr.key ? 'block' : 'none',
									height: '100%',
								}}>
								{cr.outletCache}
							</div>
						))}
					</Content>
				</Layout>
			</Layout>
		</ConfigProvider>
	)
}
export default AppLayout
