import { io } from 'socket.io-client'
import { HiprintConfigSetOption } from './const/hiprint.config.ts'
export type HiprintConfig =
	import('./const/hiprint.config.ts').HiprintConfigConst
export type PaperTypes = import('./const/hiprint.config.ts').PaperTypes
export interface Hiprint {
	/**
	 * 可拖拽元素分组
	 */
	PrintElementTypeGroup: PrintElementTypeGroupConstructor

	/**可拖拽元素管理，构建可拖拽元素 */
	PrintElementTypeManager: {
		getElementTypeGroups: any
		getElementType: (a: any, b: any) => any
		build: (jqObject: any, key: string) => void
		buildByHtml: (container: JQuery<HTMLElement>) => void
		enableDrag: any
		formatterModule: any
	}
	/**创建模板对象 IMPORTANT */
	PrintTemplate: PrintTemplateConstructor

	getAddress: (
		type: Address | AllAddress,
		cb: <T>(
			data: T extends AllAddress ? { [key in Address]: string } : string
		) => void
	) => void

	getClientInfo: () => any

	getClients: () => void

	/**多模板预览 */
	getHtml: () => any

	hiwebSocket: HiWebSocket

	/**初始化provider */
	init: (param: {
		providers?: Provider[]
		host?: string
		token?: string
		lang?: string
	}) => void

	ippPrint: () => any

	ippRequest: () => any

	/**
	 * 多模板 浏览器打印
	 */
	print: (
		data: { templates: { template: TemplateInstance; data: Object }[] },
		onSuccess?: (data: Object) => void,
		onError?: (error: Error) => void
	) => any

	/** 多模板 直接打印，需要客户端支持 */
	print2: (
		data: { templates: { template: TemplateInstance; data: Object }[] },
		onSuccess?: (data: Object) => void,
		onError?: (error: Error) => void
	) => any

	/**刷新获取打印机列表 */
	refreshPrinterList: () => any

	/**更新配置 */
	setConfig: (options?: HiprintConfigSetOption) => void

	/**
	 * 更新可拖拽元素参数
	 */
	updateElementType: (
		name: string,
		cb: (type: PrintElementType) => PrintElementType
	) => void
	version: string
}
type Address = 'ip' | 'ipv6' | 'mac' | 'dns'
type AllAddress = 'all'
export interface ElementTypesContext {
	allElementTypes: any[]
	removePrintElementTypes: (name: string) => void
	addPrintElementTypes: (
		name: string,
		PrintElementTypeGroup: PrintElementTypeGroupInstance[]
	) => void
	getElementTypeGroups: (prefix: string) => unknown[]

	/**返回第一个匹配的elementType */
	getElementType: (tid: string) => PrintElementType

	/**替换tid的elementType  */
	updateElementType: (
		tid: string,
		cb: (type: PrintElementType) => PrintElementType
	) => PrintElementType

	formatterModule: <T extends String>(prefix: T) => T | '_default'
}

export interface PrintElementTypeGroupConstructor {
	new (
		name: string,
		printElementTypes: PrintElementType[]
	): PrintElementTypeGroupInstance
}
export type ElementType =
	| 'text'
	| 'image'
	| 'longText'
	| 'table'
	| 'html'
	| 'vline'
	| 'hline'
	| 'rect'
	| 'oval'
	| 'barcode'
	| 'qrcode'
//type CreatePrintElement = (t: ElementType, e: PrintElementType) => any
//type CreatePrintElementType = (t: PrintElementType) => PrintElementTypeInstance

interface BasePrintElementTypeInstance {}
type PrintElementTypeTextInstance = BasePrintElementTypeInstance & {}
type PrintElementTypeTableInstance = BasePrintElementTypeInstance & {}
export type PrintElementTypeInstance = PrintElementTypeTextInstance &
	PrintElementTypeTableInstance

interface PrintElementTypeGroupInstance {}
/**可拖拽元素的提供者 */
export type Provider = {
	addElementTypes: (context: ElementTypesContext) => void
}

type AddElementTypes = (context: ElementTypesContext) => void

export type DefaultElementTypeProvider = (hiprint: Hiprint) => (
	options?: PrintElementTypeHtmlOptions
) => {
	addElementTypes: AddElementTypes
}
/**socket.io对象 直接打印、切换 打印客户端主机 */
export interface HiWebSocket {
	opened: boolean
	name: string
	host: string
	token: string | null
	reconnectTimeout: number
	reconnectWindowSetTimeout: number | null
	reconnectDelay: number
	// 云打印才有数据
	clients: HiWebSocketClient | undefined
	printList: {}[]
	supportsKeepAlive: () => boolean
	hasIo: () => () => typeof io
	send: (t: any) => void
	getPrinterList: () => any[]
	refreshPrinterList: () => void
	getPaperSizeInfo: (printer?: any) => void
	getClients: () => void
	getAddress: (type: any, ...arg: any) => void
	ippPrint: (options: any) => void
	ippRequest: (options: any) => void
	setHost: (host: string, token: string, cb: Function) => void
	start: (cb: any) => void
	reconnect: () => void
	stop: () => void
	ensureReconnectingState: () => void
}
export interface HiWebSocketClient {
	[key: string]: {
		arch: string
		clientUrl: string
		ip: string
		ipv6: string
		mac: string
		machineId: string
		platform: string
		printerList: PrinterInfo[]
		version: string
	}
}
interface PrinterInfo {
	description: string
	displayName: string
	isDefault: boolean
	name: string
	options: {
		'printer-location': string
		'printer-make-and-model': string
		system_driverinfo: string
		status: string
	}
}
interface PrintTemplateConstructor {
	new (options?: TemplateOptions): TemplateInstance
}
export interface TemplateJson {
	panels?: TemplatePanelOptions[]
}
/** 模板参数*/
export interface TemplateOptions {
	/**模板Json格式 */
	template?: TemplateJson
	/**
	 *"元素参数设置" 容器 ->  settingContainer: "#PrintElementOptionSetting"
	 */
	settingContainer?: string
	/**
	 * 多面板容器(需要在页面添加对应 div ) paginationContainer:'hiprint-printPagination'
	 */
	paginationContainer?: string
	/**
	 *fields 存在 元素字段则显示为下拉框显示
	 *fields 不存在 元素字段则为输入框显示
	 *此处设置为全局设置元素字段数据源 [{field:'',text:''}]，优先级低于 元素类型设置数据源
	 */
	fields?: Array<any>
	/**图片地址选择回调
	 * target.refresh(url,options,callback)
     callback(el, width, height) // 原元素,宽,高
	 */
	onImageChooseClick?: (target: {
		refresh: (
			url: string,
			options?: {
				auto?: boolean
				width?: boolean
				height?: boolean
				real?: boolean
			},
			callback?: (el: any, width: number, height: number) => any
		) => any
		getValue: () => any
	}) => void
	fontList?: Array<any>
	/**
	 * onDataChanged 返回 json 格式 1:getObject 其他：getObjectTid 默认 1
	 */
	dataMode?: number
	/** 模板发生改变时回调， 有些修改可能没有回调
	 *@param type 新增、移动、删除、修改(参数调整)、大小、旋转等等
	 */
	onDataChanged?: (type: string, json: Object[]) => void
	/**
	 * hiprintTemplate.update(json) 更新失败时回调
	 * 撤销重做使用的就是 update
	 */
	onUpdateError?: (err: Error) => void
}
/**模板核心对象。创建它的实例，以实现浏览器打印，直接打印/绕过浏览器弹窗打印(直接打印机客户端)，
 * “打印设计”，“打印预览”和“导出PDF”的功能  */
export interface TemplateInstance extends TemplateSelf, TemplateProto {}
/**template实例上的方法 */
interface TemplateSelf {
	tempimageBase64: any

	id: any

	printPanels: any

	dataMode: number

	history: boolean

	willOutOfBounds: any

	onDataChanged: (type: string, json: Object[]) => void | undefined

	onUpdateError: (err: Error) => void | undefined

	lastJson: TemplateJson

	historyList: { id: string; panels: Object[]; type: string }[]

	historyPos: number

	defaultPanelName: string

	designOptions: any

	qtDesigner: any

	qtDesignerMap: any

	qtDesignderFunction: any

	printPaginationCreator: any

	container: any

	editingPanel: { width: number }
}
/**template原型上的方法  */
interface TemplateProto {
	/**
	 *  将模板设计到指定容器中
	 * '#hiprint-printTemplate' ==> jQuery('#hiprint-printTemplate') ==> $('#hiprint-printTemplate')
	 */
	design: (eId: string, options?: { grid?: boolean }) => void

	getSimpleHtml: any
	/**
	 * @获取打印html
	 *getHtml({})
	 * @批量获取打印html
	 *getHtml([{},{}])
	 * @定义打印左上偏移量
	 *getHtml(data,{leftOffset:-1,topOffset:-1 })将覆盖面板偏移设置
	 * @return jq对象
	 */
	getHtml: (
		data: any,
		options?: PanelOptions,
		cb?: Function
	) => JQuery<HTMLElement>

	getJointHtml: any
	/**设置模板纸张大小
	 *setPaper(210,297)
	 *内置纸张大小 只有 A1-A8 和 B1-B8
	 *setPaper('A4') */
	setPaper: setPaper1 & setPaper2

	/** 旋转纸张 -> 宽 => 高;高 => 宽*/
	rotatePaper: () => void

	/**缩放设计纸张
	 *zoom(1.2)
	 *缩放并保存(打印时也会缩放)
	 *zoom(1.2,true) */
	zoom: (scaleValue: number, save?: boolean) => void

	/**新增面板addPrintPanel({ width: 100, height: 130, paperFooter: 340, paperHeader: 10 }) */
	addPrintPanel: (options: Partial<PanelOptions>) => PanelInstance

	selectPanel: any

	deletePanel: any

	/**返回panel数量  */
	getPaneltotal: () => number

	createDefaultPanel: any

	createContainer: any
	/**返回 非配置版 模板 json  参数较完整*/
	getJson: () => Object

	/**返回 配置版 (把一些参数存在 provider 中,所以需要先 init 对应 provider) 模板 json  参数较少*/
	getJsonTid: () => Object

	/** */
	undo: () => void

	/** */
	redo: () => void

	getPrintElementSelectEventKey: any

	getBuildCustomOptionSettingEventKey: any

	/** 清空模板*/
	clear: () => void
	/**获取打印纸张类型panels对应下标, 默认 0 */
	getPaperType: (index?: number) => string
	/** 获取纸张方向
	 *  1--纵向
	 *2--横向 */
	getOrient: () => 1 | 2

	/**获取打印打印样式panels对应下标, 默认 0
	 * 查看打印样式是否正常纸张大小,纸张方向
	 */
	getPrintStyle: (index?: number) => string
	/**
	 * @浏览器打印
	 *print({})
	 *@批量打印
	 *print([{},{},{},{}])
	 *@定义打印左上偏移量
	 *print({},{leftOffset:-1,topOffset:-1 })将覆盖面板偏移设置
	 *@浏览器打印回调
	 *print({},{},{callback:()=>{console.log('浏览器打印窗口已打开')}}) */

	print: (
		data: Object | Object[],
		option?: Partial<PanelOptions>,
		ext?: { callback?: () => void; styleHandler?: () => string }
	) => void

	/**
	 * @直接打印
	 *print2({})
	 *@批量打印
	 *print2([{},{},{},{}])
	 *@定义打印左上偏移量
	 *print2({},{leftOffset:-1,topOffset:-1 })将覆盖面板偏移设置
	 */
	print2: (
		data: Object | Object[],
		option?: Partial<PanelOptions> & {
			title?: string
			client?: string
			printer?: string
			styleHandler?: any
		}
	) => void

	imageToBase64: any

	xhrLoadImage: any

	sentToClient: any

	/**打印 html printByHtml($('#Id').html()) */
	printByHtml: (html: any) => void

	/**直接打印 html printByHtml($('#Id').html()) */
	printByHtml2: (html: any) => void

	deletePrintElement: any

	transformImg: any
	/**
	 * @导出pdf
	 * toPdf({},"测试导出")
	 * @导出参数scale越大pdf越清晰文件越大性能越差默认2
	 * toPdf({},"测试导出",{scale:4})
	 * @定义打印左上偏移量
	 * toPdf({},"",{leftOffset:-1,topOffset:-1 })将覆盖面板偏移设置
	 * @return 返回一个$.Deferred()对象
	 */
	toPdf: (
		data: any,
		fileName: string,
		options?: PanelOptions
	) => JQuery.Promise<any, any, any>

	createTempContainer: any

	removeTempContainer: any

	getTempContainer: any

	svg2canvas: any

	parentWidthHeight: any

	/**
	 * 直接打印回调
	 * @打印成功
	 * on('printSuccess', Function (data) { })
	 * @打印失败
	 * on('printError', Function (data) { })
	 */
	on: (
		event: 'printSuccess' | 'printError',
		cb: (data: { msg: string; templateId: string }) => void
	) => void

	clientIsOpened: any
	/**返回 连接 打印客户端 时获取到的打印机列表
	 * 刷新获取打印机列表
	 *这是异步的,需要已连接打印客户端
	 *hiprint.refreshPrinterList((list) => {})
	 */
	getPrinterList: () => any[]

	getElementByTid: any
	/**获取元素 options.name == 'testName' 的打印组件getElementByName(testName)
	 * panelIndex多面板的下标 默认 0
	 */
	getElementByName: (elementIndex: number, panelIndex: number) => any[]

	getPanel: any
	loadAllImages: any

	/**设置可选字体列表
	 *setFontList([{value:'SourceHanSansCN-Normal',title:'思源黑体'}]) */
	setFontList: (arr: any[]) => void

	getFontList: any
	/** 设置字段列表
	 * setFields([{field:'name',text:'名称'}])
	 * 此处设置为全局设置元素字段数据源，优先级低于 元素类型设置数据源
	 * */
	setFields: (arr: any[]) => void
	getFields: any
	setOnImageChooseClick: any
	getOnImageChooseClick: any
	getFieldsInPanel: any
	getTestData: any
	/**根据 json 模板更新 update(json) */
	update: (json: Object) => void

	getSelectEls: any
	selectAllElements: any

	/** 设置多选元素的 字体大小 12
	 *updateOption('fontSize',12)
	 *字体加粗
	 *updateOption('fontWeight', 'bolder');
	 * 可以更新的选项详见 HIPRINT_CONFIG
	 */
	updateOption: (key: string, value: PanelOptions) => void
	/** 设置多选元素 左对齐 setElsAlign('left') */
	setElsAlign: (align: AlignOptions) => void
	/**设置多选元素 垂直间距 10
	 *setElsSpace(10)
	 *水平间距 10
	 *setElsSpace(10,true) */
	setElsSpace: (space: number, isHorizontal?: boolean) => void
	initAutoSave: any
}
type AlignOptions =
	| 'left'
	| 'vertical'
	| 'right'
	| 'top'
	| 'horizontal'
	| 'bottom'
	| 'distributeHor'
	| 'distributeVer'
/**
 *面板是模板对象的核心。所有打印元素实际存储的位置都在面板中。可以理解成 “模板” 是画框，“面板” 才是真正的画布
 // panel=new Template() panel.addXXXX() 函数式修改，感觉比较少用，多用可视化编辑
 */
export interface PanelInstance
	extends PanelOptions,
		PanelProto,
		TemplatePanelOptions {}
/** 初始化后的options会在实例上*/
export interface PanelOptions {
	/** 分页规则 默认 ''	设置 none 不分页 小票打印 */
	panelPageRule: string

	/**打印左偏移量 mm
	 *当打印遇到部分显示不全很有用	将覆盖面板的左偏移
	 *template.print(data,{leftOffset:-1})
	 *template.getHtml(data,{leftOffset:-1}) */
	leftOffset: number
	/** */
	topOffset: number

	/**此高度之下的元素, 可设置每页显示分页内容结束位置
	 * pt磅 1in = 2.54cm = 25.4 mm = 72pt = 6pc 页眉线（缺省值=0）
	 */

	/** 不显示页码 默认 false  设计时显示灰色, 双击页码则切换状态*/
	paperNumberDisabled: boolean
	/**页码格式 默认 paperNo-paperCount */
	paperNumberFormat: string
	/** */
	fontFamily: string
	/**纸张方向(仅自定义纸张有效)
	 *1:纵向 2:横向	默认自带有 A1-A8 B1-B8 */
	orient: string
	/**面板打印纸张规则
	 *@odd:打印纸张保持奇数
	 *@even:打印纸张保持偶数 */
	panelPaperRule: string
	/** */
	firstPaperFooter: number
	/** */
	lastPaperFooter: number
	/** */
	evenPaperFooter: number
	/** */
	oddPaperFooter: number

	/** 自动生成*/
	templateId: any

	paperType: PaperTypes

	/** jq对象 */
	target: Object
	rotate?: boolean
	scale: any
}

export interface TemplatePanelOptions {
	panelLayoutOptions?: {
		layoutType?: string
		layoutRowGap?: number
		layoutColumnGap?: number
	}
	printElements: {
		options: PrintElementTypeOptions
		printElementType: { title?: string; type: ElementType | string }
	}[]
	paperNumberContinue?: boolean
	paperNumberLeft?: number
	paperNumberTop?: number
	index?: number
	/**面板名称 默认面板名称	多面板时显示 */
	name?: string | number
	/**打印纸张宽度 mm */
	width?: number
	/** 打印纸张高度 mm*/
	height?: number
	/**此高度之上的元素, 可设置每页显示分页内容开始位置 */
	paperHeader?: number
	paperFooter?: number
	/**水印参数 */
	watermarkOptions?: {
		content?: string
		rotate?: number
		timestamp?: boolean
		format?: string
		fillStyle?: string
		fontSize?: string
		width?: number
		height?: number
	}
}
/**实例化之后的panel的原型方法 */
export interface PanelProto {
	/** */
	design: () => any
	/** */
	update: () => any
	/** */
	bindShortcutKeyEvent: () => any
	/** */
	bingPasteEvent: () => any
	/** */
	pasteJson: () => any
	/** */
	css: () => any
	/** */
	getConfig: () => any
	/** */
	getHtml: () => any
	/** */
	resize: () => any
	/** */
	rotatePaper: () => any
	/** */
	zoom: () => any
	/** */
	getTarget: () => any
	/** */
	enable: () => any
	/** */
	disable: () => any
	/** */
	getPanelEntity: () => any
	/** */
	createTarget: () => any
	/** */
	droppablePaper: () => any
	/** */
	initPrintElements: () => any
	/** */
	mathroundToporleft: () => any
	/** */
	appendDesignPrintElement: () => any
	/** */
	createNewPage: () => any
	/** */
	orderPrintElements: () => any
	/** */
	fillPaperHeaderAndFooter: () => any
	/** */
	clear: () => any
	/** */
	insertPrintElementToPanel: () => any
	/** 虽然这是 文本 元素，但是可通过 textType 配置显示 条形码 或 二维码。 */
	addPrintText: (options: PrintElementTypeTextOptions) => any
	/** */
	addPrintHtml: (options: PrintElementTypeHtmlOptions) => any
	/** */
	addPrintTable: (options: PrintElementTypeTableOptions) => any
	/** */
	addPrintImage: (options: PrintElementTypeImageOptions) => any
	/** */
	addPrintLongText: (options: PrintElementTypeLongTextOptions) => any
	/** */
	addPrintVline: (options: PrintElementTypeVlineOptions) => any
	/** */
	addPrintHline: (options: PrintElementTypeHlineOptions) => any
	/***/
	addPrintRect: (options: PrintElementTypeRectOptions) => any
	/** */
	addPrintOval: (options: PrintElementTypeOvalOptions) => any
	/** */
	getPrintElementTypeByEntity: () => any
	/** */
	getPrintStyle: () => any
	/** */
	getPrintSizeStyle: () => any
	/** */
	deletePrintElement: () => any
	/** */
	getElementByTid: () => any
	/** */
	getElementByName: () => any
	/** */
	getElementById: () => any
	/** */
	getFieldsInPanel: () => any
	/** */
	getTestData: () => any
	/** */
	bindBatchMoveElement: () => any
	/** */
	getElementInRect: () => any
	/** */
	updateRectPanel: () => any
	/** */
	bingKeyboardMoveEvent: () => any
}

export interface BasePrintElementType {
	tid: string //	元素类型唯一标识
	title: string //	标题或内容 //同 options 的 title	拖拽时就显示 无法彻底删除
	field: string //	字段名称 //同 options 的 field	优先级高于 options 无法彻底删除
	type: ElementType //
	data: string //	同测试数据但参数列表不会显示 //同 options 的 testData 需要先设置 field	优先级高于 options 无法彻底删除
	testData?: string
	width?: number
	height: number
	formatter?: Function //	格式化函数 //同 options 的 formatter	优先级高于 options 无法彻底删除
	styler?: Function //	样式函数 //同 options 的 styler	优先级高于 options 无法彻底删除
	onRendered?: Function //	渲染完成回调//只能放在 printElementType 中	设计时不会触发
}
/** 设计provider时的重要参数 */
type PrintElementTypeText = BasePrintElementType
type PrintElementTypeLongText = BasePrintElementType
interface PrintElementTypeTable extends BasePrintElementType {
	/**
	 * 表格列 二维数组 -> [[{},{}],[{},{}]]
	 * 多行表头最下方的设置列 field
	 * 同 options 的 columns*/
	columns: Array<Array<any>>
	/**表格脚格式化函数，定义分组尾部显示信息，可以放置写统计信息。
	 *options
	 *rows
	 *data
	 *currentPageGridRowsData
	 *同 options 的 footerFormatter	优先级高于 footerFormatter
	 *无法彻底删除 */
	footerFormatter: Function
	/**  多组表格脚格式化函数，定义分组尾部显示信息，可以放置写统计信息。
	 * options
	 * rows
	 * data
	 * currentPageGridRowsData
	 *
	 * 同 options 的 gridColumnsFooterFormatter	优先级高于 options
	 * 无法彻底删除 */
	gridColumnsFooterFormatter: Function
	/**数据的分组字段，该字段为数组，可以根据多列进行分组。
	 *如:['name']	参数列表中没有编辑项
	 *
	 *无法彻底删除  */
	groupFields: Array<any>
	/** 分组头格式化函数，定义分组显示信息，当 groupFields 数组长度为 1 是默认显示为字段值。
	 *groupData：分组信息。
	 *options：打印元素的选项值。
	 *如:Function(group,option) {return "这里自定义统计脚信息";}	参数列表中没有编辑项
	 *无法彻底删除 */
	groupFormatter: Function
	/**分组脚格式化函数，定义分组尾部显示信息，可以放置写统计信息。
	 *groupData：分组信息。
	 *options：打印元素的选项值。
	 *参数列表中没有编辑项
	 *无法彻底删除 */
	groupFooterFormatter: Function
}
type PrintElementTypeHtml = Pick<
	BasePrintElementType,
	'tid' | 'formatter' | 'onRendered'
>
type PrintElementTypeHLine = Pick<BasePrintElementType, 'tid' | 'onRendered'>
type PrintElementTypeImage = BasePrintElementType
type PrintElementTypeVLine = PrintElementTypeHLine
type PrintElementTypeOval = PrintElementTypeHLine
export type PrintElementType =
	| PrintElementTypeText
	| PrintElementTypeLongText
	| PrintElementTypeTable
	| PrintElementTypeHtml
	| PrintElementTypeImage
	| PrintElementTypeHLine
	| PrintElementTypeOval
	| PrintElementTypeVLine

/** 所有元素的基础参数 */
interface BasePrintElementTypeOptions {
	width: number
	height: number
	top: number
	left: number
	draggable?: boolean
}
/** 图形元素的参数 */
interface BasePrintElementGraphicOptions extends BasePrintElementTypeOptions {}
/** 需要绑定数据的元素参数 */
interface BasePrintDataElementType extends BasePrintElementTypeOptions {}

/**参考HIPRINT_CONFIG中对应的option */
type PrintElementTypeTextOptions = BasePrintDataElementType & {
	textType: 'barcode' | 'qrcode' | 'center'
} & Partial<{ title: string; text: string }>
/**参考HIPRINT_CONFIG中对应的option */
type PrintElementTypeHtmlOptions = BasePrintDataElementType & Partial<{}>
/**参考HIPRINT_CONFIG中对应的option */
type PrintElementTypeTableOptions = BasePrintDataElementType & Partial<{}>
/**参考HIPRINT_CONFIG中对应的option */
type PrintElementTypeImageOptions = BasePrintDataElementType & Partial<{}>
/**参考HIPRINT_CONFIG中对应的option */
type PrintElementTypeLongTextOptions = BasePrintDataElementType & Partial<{}>

/**参考HIPRINT_CONFIG中对应的option */
type PrintElementTypeVlineOptions = BasePrintElementGraphicOptions & Partial<{}>
/**参考HIPRINT_CONFIG中对应的option */
type PrintElementTypeHlineOptions = BasePrintElementGraphicOptions & Partial<{}>
/**参考HIPRINT_CONFIG中对应的option */
type PrintElementTypeRectOptions = BasePrintElementGraphicOptions & Partial<{}>
/**参考HIPRINT_CONFIG中对应的option */
type PrintElementTypeOvalOptions = BasePrintElementGraphicOptions & Partial<{}>
export type PrintElementTypeOptions =
	| PrintElementTypeTextOptions
	| PrintElementTypeHtmlOptions
	| PrintElementTypeTableOptions
	| PrintElementTypeImageOptions
	| PrintElementTypeLongTextOptions
	| PrintElementTypeVlineOptions
	| PrintElementTypeHlineOptions
	| PrintElementTypeRectOptions
	| PrintElementTypeOvalOptions
//
type setPaper1 = (width: number, height: number) => void
type setPaper2 = (type: PaperTypes) => void
