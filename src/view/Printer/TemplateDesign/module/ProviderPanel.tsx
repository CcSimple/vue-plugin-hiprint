import { Col } from 'antd'
import provider1 from '../provider/provider'

const TemplatePanel = () => {
	const provider1Item = provider1.map((item) => {
		const {
			options: { groupName, printElements },
			key,
		} = item
		return {
			label: groupName,
			key,
			children: printElements.map((ele) => {
				return (
					<div key={ele.id} className='drag_item_box border text-center mb-1'>
						{/* @ts-ignore */}
						<a className='ep-draggable-item' tid={key + '.' + ele.id}>
							<p className='text-nowrap overflow-hidden text-ellipsis'>
								{ele.title}
							</p>
						</a>
					</div>
				)
			}),
		}
	})
	return (
		<Col span='24'>
			<div id='provider-container'></div>
			{provider1Item.map((item) => (
				<div key={item.key} className='p-2'>
					<div>{item.label}</div>
					<div>{item.children}</div>
				</div>
			))}
		</Col>
	)
}
export default TemplatePanel
