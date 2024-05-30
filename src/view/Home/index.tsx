import { Card } from 'antd'

export default () => {
	return (
		<Card
			title='此demo是基于vue-plugin-hiprint 0.0.56版本的react示例'
			style={{}}>
			{pages.map((item) => (
				<div key={item.name} className='flex flex-nowrap w-full'>
					<div className='whitespace-nowrap'>{item.name}</div>
					<span>: </span>
					<a
						href={item.addr}
						target='_blank'
						className='font-medium text-blue-600 dark:text-blue-500 hover:underline flex-1 overflow-hidden whitespace-nowrap text-ellipsis'>
						{item.addr}
					</a>
				</div>
			))}
		</Card>
	)
}

const pages = [
	{
		name: 'vue-plugin-hiprint Github地址',
		addr: 'https://github.com/CcSimple/vue-plugin-hiprint',
	},
	{
		name: 'vue-plugin-plugin 在线demo',
		addr: 'https://ccsimple.github.io/vue-plugin-hiprint/',
	},
	{
		name: 'vue-plugin-hiprint 系列教程',
		addr: 'https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzUyMzg5NDU0Mg==&action=getalbum&album_id=2779135389654630403&scene=173&from_msgid=2247484738&from_itemidx=1&count=3&nolastread=1#wechat_redirect',
	},
]
