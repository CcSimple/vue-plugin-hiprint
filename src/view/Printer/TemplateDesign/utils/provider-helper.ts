import { hiprint } from '@/hiprint'
import { ElementTypesContext, PrintElementType } from '@/hiprint/hiprint-types'
// 格式化后的option
interface PrintElementOption {
	title: string
	field: string
	testData?: string
	width?: number
	height?: number
	columns?: []
	textType: string
}
// 后端传的options 可能需要格式化
interface PrintElement {
	id: string
	title: string
	type: string
	field?: string
	testData?: string
	width?: number
	height?: number
	options?: {
		fontSize?: number
		color?: string
		src?: string
		fields?: { field: string; text: string }[]
		formatter?: () => any
	}

	columns?: {
		title: string
		align: string
		field: string
		width: number
	}[][]
}
interface ProviderHelperOption {
	printElements: PrintElement[]
	groupName: string
}
type ProviderHelperOptions = {
	key: string
	options: ProviderHelperOption
}
const createProvider = (data: ProviderHelperOptions) => {
	const { key, options } = data
	const addElementTypes = (context: ElementTypesContext) => {
		// 先清空 避免重复创建
		context.removePrintElementTypes(key)
		let printElements: PrintElementType[] = options.printElements.map(
			(item) => {
				let options: Partial<PrintElementOption> = {
					title: item.title,
					field: item.field,
					testData: item.testData,
					...item.options,
				}
				//有些元素可以不设置宽高 如table
				item.width && (options.width = item.width)
				item.height && (options.height = item.height)

				// 处理二维码 条形码 //现在可以直接用qrcode和barcode元素
				/* if (['qrcode', 'barcode'].includes(item.type)) {
					options.textType = item.type
				} */

				let printElement: any = {
					tid: `${key}.${item.id}`,
					title: item.title,
					type: (PRINT_ELEMENT_TYPE_MAP[item.type] as string) || item.type,
					options: options,
				}

				if (['table', 'tableCustom'].includes(item.type)) {
					// 根据实际情况处理
					if (item.columns) {
						printElement.columns = item.columns
					} else {
						printElement.columns = [
							[
								{ align: 'center', width: 100 },
								{ align: 'center', width: 100 },
							],
						]
					}
				}
				return printElement
			}
		)
		// 创建分组对象
		let printElementGroup = new hiprint.PrintElementTypeGroup(
			options.groupName,
			printElements
		)
		context.addPrintElementTypes(key, [printElementGroup])
	}
	return { addElementTypes }
}

const createProviderList = (optionList: ProviderHelperOptions[]) => {
	const providers = optionList.map((item) => createProvider(item))
	return providers
}
const buildProviders = (
	data: ProviderHelperOptions | ProviderHelperOptions[],
	options: { clear?: boolean; method: 'html' | 'container' } = {
		clear: true,
		method: 'html',
	}
) => {
	// 清空 避免重复构建
	if (options.clear) $('#provider-container').empty()
	if (data instanceof Array) {
		const providers = createProviderList(data)
		hiprint.init({ providers })
		// 循环构建
		data.forEach((item) => {
			options.method === 'html' ? buildByHtml() : buildByContainer(item.key)
		})
	} else {
		const providers = createProvider(data)
		hiprint.init({ providers: [providers] })
		options.method === 'html' ? buildByHtml() : buildByContainer(data.key)
	}
}
export const buildByHtml = () => {
	hiprint.PrintElementTypeManager.buildByHtml($('.ep-draggable-item'))
}
const buildByContainer = (key: string, container = '#provider-container') => {
	hiprint.PrintElementTypeManager.build($(container), key)
}
/**
 * @param String tid (provider中唯一的值)
 * @param {PrintElementType} data 后端数据
 */
const updateElementType = (tid: string, type: Partial<PrintElementType>) => {
	/**
	 * @param String tid (provider中唯一的值)
	 * @param {Function} 回调这个tid的对象
	 * @return {Object} 返回修改后的对象
	 */
	hiprint.updateElementType(tid, (prevType) => {
		const newType = Object.assign(prevType, type)
		return newType
	})
}
export { createProvider, createProviderList, buildProviders, updateElementType }
/**
 * @description 转换后端数据
 */
const PRINT_ELEMENT_TYPE_MAP = {
	txt: 'text',
	img: 'image',
	// 比如后端返回的 "二维码", 但是我们需要的是 "text"， 还需要特殊处理 //现在可以直接用qrcode和barcode元素
	qrcode: 'qrcode',
	// 比如后端返回的 "条形码", 但是我们需要的是 "text"， 也需要特殊处理
	barcode: 'barcode',
	table: 'table',
	tableCustom: 'table',
	hLine: 'hline', // 后端返回的它就是不一样，怼他
	vLine: 'vline',
	rect: 'rect',
	oval: 'oval',
} as { [key: string]: string }
