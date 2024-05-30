import { DeepPartial } from '@/types/util'

// 可配置项
export const HIPRINT_CONFIG = {
	//optionItems: [hiprintCustomOptionItem],//自定义选项
	movingDistance: 0.5, //鼠标拖动一次移动的距离,默认1.5pt
	paperHeightTrim: 1, //纸张html 的高度等于真实高度-1
	showPosition: true, //显示坐标位置
	positionLineMode: false, //坐标显示在线上的
	positionUnit: true, //显示坐标单位
	showSizeBox: true, //显示宽高box
	adsorbMin: 3, //吸附最小距离pt
	showAdsorbLine: true, //显示吸附线
	adsorbLineMin: 6, //吸附线显示最小距离pt
	paperNumberContinue: true, //连续打印页码
	panel: {
		supportOptions: [
			{
				name: 'panelPaperRule',
				hidden: false,
			},
			{
				name: 'panelPageRule',
				hidden: false,
			},
			{
				name: 'firstPaperFooter',
				hidden: false,
			},
			{
				name: 'evenPaperFooter',
				hidden: false,
			},
			{
				name: 'oddPaperFooter',
				hidden: false,
			},
			{
				name: 'lastPaperFooter',
				hidden: false,
			},
			{
				name: 'leftOffset',
				hidden: false,
			},
			{
				name: 'topOffset',
				hidden: false,
			},
			{
				name: 'fontFamily',
				hidden: false,
			},
			{
				name: 'orient',
				hidden: false,
			},
			{
				name: 'paperNumberDisabled',
				hidden: false,
			},
			{
				name: 'paperNumberContinue',
				hidden: false,
			},
			{
				name: 'paperNumberFormat',
				hidden: false,
			},
			{
				name: 'watermarkOptions',
				hidden: false,
			},
			{
				name: 'panelLayoutOptions',
				hidden: false,
			},
		],
		default: {},
	},
	text: {
		tabs: [
			{
				name: '基础',
				options: [
					{
						name: 'title',
						hidden: false,
					},
					{
						name: 'field',
						hidden: false,
					},
					{
						name: 'testData',
						hidden: false,
					},
					{
						name: 'coordinate',
						hidden: false,
					},
					{
						name: 'widthHeight',
						hidden: false,
					},
					{
						name: 'hideTitle',
						hidden: false,
					},
					{
						name: 'fixed',
						hidden: false,
					},
				],
			},
			{
				name: '样式',
				options: [
					{
						name: 'dataType',
						hidden: false,
					},
					{
						name: 'fontFamily',
						hidden: false,
					},
					{
						name: 'fontSize',
						hidden: false,
					},
					{
						name: 'fontWeight',
						hidden: false,
					},
					{
						name: 'letterSpacing',
						hidden: false,
					},
					{
						name: 'color',
						hidden: false,
					},
					{
						name: 'backgroundColor',
						hidden: false,
					},
					{
						name: 'textDecoration',
						hidden: false,
					},
					{
						name: 'textAlign',
						hidden: false,
					},
					{
						name: 'textContentVerticalAlign',
						hidden: false,
					},
					{
						name: 'textContentWrap',
						hidden: false,
					},
					{
						name: 'lineHeight',
						hidden: false,
					},
					{
						name: 'transform',
						hidden: false,
					},
					{
						name: 'zIndex',
						hidden: false,
					},
				],
			},
			{
				name: '边框',
				options: [
					{
						name: 'optionsGroup',
						hidden: false,
					},
					{
						name: 'borderLeft',
						hidden: false,
					},
					{
						name: 'borderTop',
						hidden: false,
					},
					{
						name: 'borderRight',
						hidden: false,
					},
					{
						name: 'borderBottom',
						hidden: false,
					},
					{
						name: 'borderWidth',
						hidden: false,
					},
					{
						name: 'borderColor',
						hidden: false,
					},
					{
						name: 'contentPaddingLeft',
						hidden: false,
					},
					{
						name: 'contentPaddingTop',
						hidden: false,
					},
					{
						name: 'contentPaddingRight',
						hidden: false,
					},
					{
						name: 'contentPaddingBottom',
						hidden: false,
					},
				],
			},
			{
				name: '高级',
				options: [
					{
						name: 'textType',
						hidden: false,
					},
					{
						name: 'barcodeMode',
						hidden: false,
					},
					{
						name: 'barWidth',
						hidden: false,
					},
					{
						name: 'barAutoWidth',
						hidden: false,
					},
					{
						name: 'qrCodeLevel',
						hidden: false,
					},
					{
						name: 'pageBreak',
						hidden: false,
					},
					{
						name: 'showInPage',
						hidden: false,
					},
					{
						name: 'unShowInPage',
						hidden: false,
					},
					{
						name: 'axis',
						hidden: false,
					},
					{
						name: 'upperCase',
						hidden: false,
					},
					{
						name: 'formatter',
						hidden: false,
					},
					{
						name: 'styler',
						hidden: false,
					},
				],
			},
		],
		supportOptions: [
			{
				name: 'title',
				hidden: false,
			},
			{
				name: 'field',
				hidden: false,
			},
			{
				name: 'testData',
				hidden: false,
			},
			{
				name: 'coordinate',
				hidden: false,
			},
			{
				name: 'widthHeight',
				hidden: false,
			},
			{
				name: 'dataType',
				hidden: false,
			},
			{
				name: 'fontFamily',
				hidden: false,
			},
			{
				name: 'fontSize',
				hidden: false,
			},
			{
				name: 'fontWeight',
				hidden: false,
			},
			{
				name: 'letterSpacing',
				hidden: false,
			},
			{
				name: 'color',
				hidden: false,
			},
			{
				name: 'textDecoration',
				hidden: false,
			},
			{
				name: 'textAlign',
				hidden: false,
			},
			{
				name: 'textContentVerticalAlign',
				hidden: false,
			},
			{
				name: 'textContentWrap',
				hidden: false,
			},
			{
				name: 'lineHeight',
				hidden: false,
			},
			{
				name: 'textType',
				hidden: false,
			},
			{
				name: 'barcodeMode',
				hidden: false,
			},
			{
				name: 'barWidth',
				hidden: false,
			},
			{
				name: 'barAutoWidth',
				hidden: false,
			},
			{
				name: 'qrCodeLevel',
				hidden: false,
			},
			{
				name: 'hideTitle',
				hidden: false,
			},
			{
				name: 'pageBreak',
				hidden: false,
			},
			{
				name: 'showInPage',
				hidden: false,
			},
			{
				name: 'unShowInPage',
				hidden: false,
			},
			{
				name: 'fixed',
				hidden: false,
			},
			{
				name: 'axis',
				hidden: false,
			},
			{
				name: 'transform',
				hidden: false,
			},
			{
				name: 'zIndex',
				hidden: false,
			},
			{
				name: 'optionsGroup',
				hidden: false,
			},
			{
				name: 'borderLeft',
				hidden: false,
			},
			{
				name: 'borderTop',
				hidden: false,
			},
			{
				name: 'borderRight',
				hidden: false,
			},
			{
				name: 'borderBottom',
				hidden: false,
			},
			{
				name: 'borderWidth',
				hidden: false,
			},
			{
				name: 'borderColor',
				hidden: false,
			},
			{
				name: 'contentPaddingLeft',
				hidden: false,
			},
			{
				name: 'contentPaddingTop',
				hidden: false,
			},
			{
				name: 'contentPaddingRight',
				hidden: false,
			},
			{
				name: 'contentPaddingBottom',
				hidden: false,
			},
			{
				name: 'backgroundColor',
				hidden: false,
			},
			{
				name: 'formatter',
				hidden: false,
			},
			{
				name: 'styler',
				hidden: false,
			},
		],
		default: {
			width: 120,
			height: 9.75,
		},
	},
	image: {
		tabs: [
			{
				name: '基础',
				options: [
					{
						name: 'field',
						hidden: false,
					},
					{
						name: 'src',
						hidden: false,
					},
					{
						name: 'fit',
						hidden: false,
					},
					{
						name: 'coordinate',
						hidden: false,
					},
					{
						name: 'widthHeight',
						hidden: false,
					},
					{
						name: 'showInPage',
						hidden: false,
					},
					{
						name: 'unShowInPage',
						hidden: false,
					},
					{
						name: 'fixed',
						hidden: false,
					},
				],
			},
			{
				name: '样式',
				options: [
					{
						name: 'transform',
						hidden: false,
					},
					{
						name: 'zIndex',
						hidden: false,
					},
					{
						name: 'borderRadius',
						hidden: false,
					},
				],
			},
			{
				name: '高级',
				options: [
					{
						name: 'pageBreak',
						hidden: false,
					},
					{
						name: 'axis',
						hidden: false,
					},
					{
						name: 'formatter',
						hidden: false,
					},
					{
						name: 'styler',
						hidden: false,
					},
				],
			},
		],
		supportOptions: [
			{
				name: 'field',
				hidden: false,
			},
			{
				name: 'src',
				hidden: false,
			},
			{
				name: 'fit',
				hidden: false,
			},
			{
				name: 'borderRadius',
				hidden: false,
			},
			{
				name: 'coordinate',
				hidden: false,
			},
			{
				name: 'widthHeight',
				hidden: false,
			},
			{
				name: 'showInPage',
				hidden: false,
			},
			{
				name: 'unShowInPage',
				hidden: false,
			},
			{
				name: 'fixed',
				hidden: false,
			},
			{
				name: 'pageBreak',
				hidden: false,
			},
			{
				name: 'axis',
				hidden: false,
			},
			{
				name: 'transform',
				hidden: false,
			},
			{
				name: 'zIndex',
				hidden: false,
			},
			{
				name: 'formatter',
				hidden: false,
			},
			{
				name: 'styler',
				hidden: false,
			},
		],
		default: {},
	},
	longText: {
		tabs: [
			{
				name: '基础',
				options: [
					{
						name: 'title',
						hidden: false,
					},
					{
						name: 'field',
						hidden: false,
					},
					{
						name: 'testData',
						hidden: false,
					},
					{
						name: 'coordinate',
						hidden: false,
					},
					{
						name: 'widthHeight',
						hidden: false,
					},
					{
						name: 'hideTitle',
						hidden: false,
					},
					{
						name: 'fixed',
						hidden: false,
					},
				],
			},
			{
				name: '样式',
				options: [
					{
						name: 'fontFamily',
						hidden: false,
					},
					{
						name: 'fontSize',
						hidden: false,
					},
					{
						name: 'fontWeight',
						hidden: false,
					},
					{
						name: 'letterSpacing',
						hidden: false,
					},
					{
						name: 'textAlign',
						hidden: false,
					},
					{
						name: 'lineHeight',
						hidden: false,
					},
					{
						name: 'color',
						hidden: false,
					},
					{
						name: 'longTextIndent',
						hidden: false,
					},
					{
						name: 'leftSpaceRemoved',
						hidden: false,
					},
					{
						name: 'lHeight',
						hidden: false,
					},
					{
						name: 'transform',
						hidden: false,
					},
					{
						name: 'zIndex',
						hidden: false,
					},
				],
			},
			{
				name: '高级',
				options: [
					{
						name: 'pageBreak',
						hidden: false,
					},
					{
						name: 'showInPage',
						hidden: false,
					},
					{
						name: 'unShowInPage',
						hidden: false,
					},
					{
						name: 'axis',
						hidden: false,
					},
					{
						name: 'formatter',
						hidden: false,
					},
					{
						name: 'styler',
						hidden: false,
					},
				],
			},
		],
		supportOptions: [
			{
				name: 'title',
				hidden: false,
			},
			{
				name: 'field',
				hidden: false,
			},
			{
				name: 'testData',
				hidden: false,
			},
			{
				name: 'coordinate',
				hidden: false,
			},
			{
				name: 'widthHeight',
				hidden: false,
			},
			{
				name: 'fontFamily',
				hidden: false,
			},
			{
				name: 'fontSize',
				hidden: false,
			},
			{
				name: 'fontWeight',
				hidden: false,
			},
			{
				name: 'letterSpacing',
				hidden: false,
			},
			{
				name: 'textAlign',
				hidden: false,
			},
			{
				name: 'lineHeight',
				hidden: false,
			},
			{
				name: 'color',
				hidden: false,
			},
			{
				name: 'hideTitle',
				hidden: false,
			},
			{
				name: 'longTextIndent',
				hidden: false,
			},
			{
				name: 'leftSpaceRemoved',
				hidden: false,
			},
			{
				name: 'pageBreak',
				hidden: false,
			},
			{
				name: 'showInPage',
				hidden: false,
			},
			{
				name: 'unShowInPage',
				hidden: false,
			},
			{
				name: 'fixed',
				hidden: false,
			},
			{
				name: 'axis',
				hidden: false,
			},
			{
				name: 'lHeight',
				hidden: false,
			},
			{
				name: 'transform',
				hidden: false,
			},
			{
				name: 'zIndex',
				hidden: false,
			},
			{
				name: 'optionsGroup',
				hidden: false,
			},
			{
				name: 'borderLeft',
				hidden: false,
			},
			{
				name: 'borderTop',
				hidden: false,
			},
			{
				name: 'borderRight',
				hidden: false,
			},
			{
				name: 'borderBottom',
				hidden: false,
			},
			{
				name: 'borderWidth',
				hidden: false,
			},
			{
				name: 'borderColor',
				hidden: false,
			},
			{
				name: 'contentPaddingLeft',
				hidden: false,
			},
			{
				name: 'contentPaddingTop',
				hidden: false,
			},
			{
				name: 'contentPaddingRight',
				hidden: false,
			},
			{
				name: 'contentPaddingBottom',
				hidden: false,
			},
			{
				name: 'backgroundColor',
				hidden: false,
			},
			{
				name: 'formatter',
				hidden: false,
			},
			{
				name: 'styler',
				hidden: false,
			},
		],
		default: {
			height: 42,
			width: 550,
		},
	},
	table: {
		tabs: [
			{
				name: '基础',
				options: [
					{
						name: 'field',
						hidden: false,
					},
					{
						name: 'testData',
						hidden: false,
					},
					{
						name: 'coordinate',
						hidden: false,
					},
					{
						name: 'widthHeight',
						hidden: false,
					},
					{
						name: 'tableHeaderRepeat',
						hidden: false,
					},
					{
						name: 'tableFooterRepeat',
						hidden: false,
					},
					{
						name: 'autoCompletion',
						hidden: false,
					},
					{
						name: 'maxRows',
						hidden: false,
					},
					{
						name: 'columns',
						hidden: false,
					},
				],
			},
			{
				name: '样式',
				options: [
					{
						name: 'fontFamily',
						hidden: false,
					},
					{
						name: 'fontSize',
						hidden: false,
					},
					{
						name: 'lineHeight',
						hidden: false,
					},
					{
						name: 'textAlign',
						hidden: false,
					},
					{
						name: 'gridColumns',
						hidden: false,
					},
					{
						name: 'gridColumnsGutter',
						hidden: false,
					},
					{
						name: 'tableBorder',
						hidden: false,
					},
					{
						name: 'tableHeaderBorder',
						hidden: false,
					},
					{
						name: 'tableHeaderCellBorder',
						hidden: false,
					},
					{
						name: 'tableHeaderRowHeight',
						hidden: false,
					},
					{
						name: 'tableHeaderBackground',
						hidden: false,
					},
					{
						name: 'tableHeaderFontSize',
						hidden: false,
					},
					{
						name: 'tableHeaderFontWeight',
						hidden: false,
					},
					{
						name: 'tableBodyRowHeight',
						hidden: false,
					},
					{
						name: 'tableBodyRowBorder',
						hidden: false,
					},
					{
						name: 'tableBodyCellBorder',
						hidden: false,
					},
					{
						name: 'tableFooterBorder',
						hidden: false,
					},
					{
						name: 'tableFooterCellBorder',
						hidden: false,
					},
					{
						name: 'lHeight',
						hidden: false,
					},
				],
			},
			// 留空即显示 表格 列 属性
			{
				name: '列',
				options: [],
			},
			{
				name: '高级',
				options: [
					{
						name: 'axis',
						hidden: false,
					},
					{
						name: 'styler',
						hidden: false,
					},
					{
						name: 'rowStyler',
						hidden: false,
					},
					{
						name: 'footerFormatter',
						hidden: false,
					},
					{
						name: 'rowsColumnsMerge',
						hidden: false,
					},
					{
						name: 'rowsColumnsMergeClean',
						hidden: false,
					},
					{
						name: 'groupFieldsFormatter',
						hidden: false,
					},
					{
						name: 'groupFormatter',
						hidden: false,
					},
					{
						name: 'groupFooterFormatter',
						hidden: false,
					},
					{
						name: 'gridColumnsFooterFormatter',
						hidden: false,
					},
				],
			},
		],
		supportOptions: [
			{
				name: 'field',
				hidden: false,
			},
			{
				name: 'coordinate',
				hidden: false,
			},
			{
				name: 'widthHeight',
				hidden: false,
			},
			{
				name: 'fontFamily',
				hidden: false,
			},
			{
				name: 'fontSize',
				hidden: false,
			},
			{
				name: 'lineHeight',
				hidden: false,
			},
			{
				name: 'textAlign',
				hidden: false,
			},
			{
				name: 'gridColumns',
				hidden: false,
			},
			{
				name: 'gridColumnsGutter',
				hidden: false,
			},
			{
				name: 'tableHeaderRepeat',
				hidden: false,
			},
			{
				name: 'tableBorder',
				hidden: false,
			},
			{
				name: 'tableHeaderBorder',
				hidden: false,
			},
			{
				name: 'tableHeaderCellBorder',
				hidden: false,
			},
			{
				name: 'tableHeaderRowHeight',
				hidden: false,
			},
			{
				name: 'tableHeaderBackground',
				hidden: false,
			},
			{
				name: 'tableHeaderFontSize',
				hidden: false,
			},
			{
				name: 'tableHeaderFontWeight',
				hidden: false,
			},
			{
				name: 'tableBodyRowHeight',
				hidden: false,
			},
			{
				name: 'tableBodyRowBorder',
				hidden: false,
			},
			{
				name: 'tableBodyCellBorder',
				hidden: false,
			},
			{
				name: 'tableFooterBorder',
				hidden: false,
			},
			{
				name: 'tableFooterCellBorder',
				hidden: false,
			},
			{
				name: 'axis',
				hidden: false,
			},
			{
				name: 'lHeight',
				hidden: false,
			},
			{
				name: 'autoCompletion',
				hidden: false,
			},
			{
				name: 'maxRows',
				hidden: false,
			},
			{
				name: 'columns',
				hidden: false,
			},
			{
				name: 'styler',
				hidden: false,
			},
			{
				name: 'rowStyler',
				hidden: false,
			},
			{
				name: 'tableFooterRepeat',
				hidden: false,
			},
			{
				name: 'footerFormatter',
				hidden: false,
			},
			{
				name: 'rowsColumnsMerge',
				hidden: false,
			},
			{
				name: 'groupFieldsFormatter',
				hidden: false,
			},
			{
				name: 'groupFormatter',
				hidden: false,
			},
			{
				name: 'groupFooterFormatter',
				hidden: false,
			},
			{
				name: 'gridColumnsFooterFormatter',
				hidden: false,
			},
		],
		default: {
			width: 550,
		},
	},
	hline: {
		tabs: [
			{
				name: '基础',
				options: [
					{
						name: 'coordinate',
						hidden: false,
					},
					{
						name: 'widthHeight',
						hidden: false,
					},
					{
						name: 'showInPage',
						hidden: false,
					},
					{
						name: 'fixed',
						hidden: false,
					},
				],
			},
			{
				name: '样式',
				options: [
					{
						name: 'borderWidth',
						hidden: false,
					},
					{
						name: 'borderStyle',
						hidden: false,
					},
					{
						name: 'borderColor',
						hidden: false,
					},
					{
						name: 'transform',
						hidden: false,
					},
					{
						name: 'zIndex',
						hidden: false,
					},
				],
			},
			{
				name: '高级',
				options: [
					{
						name: 'pageBreak',
						hidden: false,
					},
					{
						name: 'axis',
						hidden: false,
					},
				],
			},
		],
		supportOptions: [
			{
				name: 'coordinate',
				hidden: false,
			},
			{
				name: 'widthHeight',
				hidden: false,
			},
			{
				name: 'borderWidth',
				hidden: false,
			},
			{
				name: 'borderStyle',
				hidden: false,
			},
			{
				name: 'borderColor',
				hidden: false,
			},
			{
				name: 'pageBreak',
				hidden: false,
			},
			{
				name: 'showInPage',
				hidden: false,
			},
			{
				name: 'fixed',
				hidden: false,
			},
			{
				name: 'axis',
				hidden: false,
			},
			{
				name: 'transform',
				hidden: false,
			},
			{
				name: 'zIndex',
				hidden: false,
			},
		],
		default: {
			borderWidth: 0.75,
			height: 9,
			width: 90,
		},
	},
	vline: {
		tabs: [
			{
				name: '基础',
				options: [
					{
						name: 'coordinate',
						hidden: false,
					},
					{
						name: 'widthHeight',
						hidden: false,
					},
					{
						name: 'showInPage',
						hidden: false,
					},
					{
						name: 'fixed',
						hidden: false,
					},
				],
			},
			{
				name: '样式',
				options: [
					{
						name: 'borderWidth',
						hidden: false,
					},
					{
						name: 'borderStyle',
						hidden: false,
					},
					{
						name: 'borderColor',
						hidden: false,
					},
					{
						name: 'transform',
						hidden: false,
					},
					{
						name: 'zIndex',
						hidden: false,
					},
				],
			},
			{
				name: '高级',
				options: [
					{
						name: 'pageBreak',
						hidden: false,
					},
					{
						name: 'axis',
						hidden: false,
					},
				],
			},
		],
		supportOptions: [
			{
				name: 'coordinate',
				hidden: false,
			},
			{
				name: 'widthHeight',
				hidden: false,
			},
			{
				name: 'borderWidth',
				hidden: false,
			},
			{
				name: 'borderStyle',
				hidden: false,
			},
			{
				name: 'borderColor',
				hidden: false,
			},
			{
				name: 'pageBreak',
				hidden: false,
			},
			{
				name: 'showInPage',
				hidden: false,
			},
			{
				name: 'fixed',
				hidden: false,
			},
			{
				name: 'axis',
				hidden: false,
			},
			{
				name: 'transform',
				hidden: false,
			},
			{
				name: 'zIndex',
				hidden: false,
			},
		],
		default: {
			borderWidth: undefined,
			height: 90,
			width: 9,
		},
	},
	rect: {
		tabs: [
			{
				name: '基础',
				options: [
					{
						name: 'coordinate',
						hidden: false,
					},
					{
						name: 'widthHeight',
						hidden: false,
					},
					{
						name: 'showInPage',
						hidden: false,
					},
					{
						name: 'fixed',
						hidden: false,
					},
				],
			},
			{
				name: '样式',
				options: [
					{
						name: 'borderWidth',
						hidden: false,
					},
					{
						name: 'borderStyle',
						hidden: false,
					},
					{
						name: 'borderColor',
						hidden: false,
					},
					{
						name: 'backgroundColor',
						hidden: false,
					},
					{
						name: 'transform',
						hidden: false,
					},
					{
						name: 'zIndex',
						hidden: false,
					},
				],
			},
			{
				name: '高级',
				options: [
					{
						name: 'pageBreak',
						hidden: false,
					},
					{
						name: 'axis',
						hidden: false,
					},
				],
			},
		],
		supportOptions: [
			{
				name: 'coordinate',
				hidden: false,
			},
			{
				name: 'widthHeight',
				hidden: false,
			},
			{
				name: 'borderWidth',
				hidden: false,
			},
			{
				name: 'borderStyle',
				hidden: false,
			},
			{
				name: 'borderColor',
				hidden: false,
			},
			{
				name: 'backgroundColor',
				hidden: false,
			},
			{
				name: 'pageBreak',
				hidden: false,
			},
			{
				name: 'showInPage',
				hidden: false,
			},
			{
				name: 'fixed',
				hidden: false,
			},
			{
				name: 'axis',
				hidden: false,
			},
			{
				name: 'transform',
				hidden: false,
			},
			{
				name: 'zIndex',
				hidden: false,
			},
		],
		default: {
			borderWidth: undefined,
			height: 90,
			width: 90,
		},
	},
	oval: {
		tabs: [
			{
				name: '基础',
				options: [
					{
						name: 'coordinate',
						hidden: false,
					},
					{
						name: 'widthHeight',
						hidden: false,
					},
					{
						name: 'showInPage',
						hidden: false,
					},
					{
						name: 'fixed',
						hidden: false,
					},
				],
			},
			{
				name: '样式',
				options: [
					{
						name: 'borderWidth',
						hidden: false,
					},
					{
						name: 'borderStyle',
						hidden: false,
					},
					{
						name: 'borderColor',
						hidden: false,
					},
					{
						name: 'backgroundColor',
						hidden: false,
					},
					{
						name: 'transform',
						hidden: false,
					},
					{
						name: 'zIndex',
						hidden: false,
					},
				],
			},
			{
				name: '高级',
				options: [
					{
						name: 'pageBreak',
						hidden: false,
					},
					{
						name: 'axis',
						hidden: false,
					},
				],
			},
		],
		supportOptions: [
			{
				name: 'coordinate',
				hidden: false,
			},
			{
				name: 'widthHeight',
				hidden: false,
			},
			{
				name: 'borderWidth',
				hidden: false,
			},
			{
				name: 'borderStyle',
				hidden: false,
			},
			{
				name: 'borderColor',
				hidden: false,
			},
			{
				name: 'backgroundColor',
				hidden: false,
			},
			{
				name: 'pageBreak',
				hidden: false,
			},
			{
				name: 'showInPage',
				hidden: false,
			},
			{
				name: 'fixed',
				hidden: false,
			},
			{
				name: 'axis',
				hidden: false,
			},
			{
				name: 'transform',
				hidden: false,
			},
			{
				name: 'zIndex',
				hidden: false,
			},
		],
		default: {
			borderWidth: undefined,
			height: 90,
			width: 90,
		},
	},
	html: {
		tabs: [
			{
				name: '基础',
				options: [
					{
						name: 'coordinate',
						hidden: false,
					},
					{
						name: 'widthHeight',
						hidden: false,
					},
					{
						name: 'showInPage',
						hidden: false,
					},
					{
						name: 'unShowInPage',
						hidden: false,
					},
					{
						name: 'fixed',
						hidden: false,
					},
				],
			},
			{
				name: '样式',
				options: [
					{
						name: 'transform',
						hidden: false,
					},
					{
						name: 'zIndex',
						hidden: false,
					},
				],
			},
			{
				name: '高级',
				options: [
					{
						name: 'pageBreak',
						hidden: false,
					},
					{
						name: 'axis',
						hidden: false,
					},
					{
						name: 'formatter',
						hidden: false,
					},
				],
			},
		],
		supportOptions: [
			{
				name: 'coordinate',
				hidden: false,
			},
			{
				name: 'widthHeight',
				hidden: false,
			},
			{
				name: 'pageBreak',
				hidden: false,
			},
			{
				name: 'showInPage',
				hidden: false,
			},
			{
				name: 'unShowInPage',
				hidden: false,
			},
			{
				name: 'fixed',
				hidden: false,
			},
			{
				name: 'zIndex',
				hidden: false,
			},
			{
				name: 'axis',
				hidden: false,
			},
			{
				name: 'formatter',
				hidden: false,
			},
		],
		default: {
			height: 90,
			width: 90,
		},
	},
	tableColumn: {
		supportOptions: [
			{
				name: 'title',
				hidden: false,
			},
			{
				name: 'align',
				hidden: false,
			},
			{
				name: 'halign',
				hidden: false,
			},
			{
				name: 'vAlign',
				hidden: false,
			},
			{
				name: 'tableTextType',
				hidden: false,
			},
			{
				name: 'tableBarcodeMode',
				hidden: false,
			},
			{
				name: 'tableQRCodeLevel',
				hidden: false,
			},
			{
				name: 'tableColumnHeight',
				hidden: false,
			},
			{
				// 表格条码底部是否显示内容
				name: 'showCodeTitle',
				hidden: false,
			},
			{
				name: 'paddingLeft',
				hidden: false,
			},
			{
				name: 'paddingRight',
				hidden: false,
			},
			{
				name: 'tableSummaryTitle',
				hidden: false,
			},
			{
				name: 'tableSummaryText',
				hidden: false,
			},
			{
				name: 'tableSummaryColspan',
				hidden: false,
			},
			{
				name: 'tableSummary',
				hidden: false,
			},
			{
				name: 'tableSummaryAlign',
				hidden: false,
			},
			{
				name: 'tableSummaryNumFormat',
				hidden: false,
			},

			{
				name: 'tableSummaryFormatter',
				hidden: false,
			},
			{
				name: 'upperCase',
				hidden: false,
			},

			{
				name: 'renderFormatter',
				hidden: false,
			},
			{
				name: 'formatter2',
				hidden: false,
			},
			{
				name: 'styler2',
				hidden: false,
			},
			{
				name: 'stylerHeader',
				hidden: false,
			},
		],
		default: {
			height: 90,
			width: 90,
		},
	},
	barcode: {
		tabs: [
			{
				name: '基础',
				options: [
					{
						name: 'title',
						hidden: false,
					},
					{
						name: 'field',
						hidden: false,
					},
					{
						name: 'testData',
						hidden: false,
					},
					{
						name: 'barcodeType',
						hidden: false,
					},
					{
						name: 'barWidth',
						hidden: false,
					},
					{
						name: 'coordinate',
						hidden: false,
					},
					{
						name: 'widthHeight',
						hidden: false,
					},
					{
						name: 'hideTitle',
						hidden: false,
					},
					{
						name: 'fixed',
						hidden: false,
					},
				],
			},
			{
				name: '样式',
				options: [
					{
						name: 'fontFamily',
						hidden: false,
					},
					{
						name: 'fontSize',
						hidden: false,
					},
					{
						name: 'fontWeight',
						hidden: false,
					},
					{
						name: 'letterSpacing',
						hidden: false,
					},
					{
						name: 'color',
						hidden: false,
					},
					{
						name: 'backgroundColor',
						hidden: false,
					},
					{
						name: 'barColor',
						hidden: false,
					},
					{
						name: 'textAlign',
						hidden: false,
					},
					{
						name: 'textContentVerticalAlign',
						hidden: false,
					},
					{
						name: 'lineHeight',
						hidden: false,
					},
					{
						name: 'transform',
						hidden: false,
					},
					{
						name: 'zIndex',
						hidden: false,
					},
				],
			},
			{
				name: '高级',
				options: [
					{
						name: 'pageBreak',
						hidden: false,
					},
					{
						name: 'showInPage',
						hidden: false,
					},
					{
						name: 'unShowInPage',
						hidden: false,
					},
					{
						name: 'axis',
						hidden: false,
					},
					{
						name: 'formatter',
						hidden: false,
					},
					{
						name: 'styler',
						hidden: false,
					},
				],
			},
		],
		supportOptions: [
			{
				name: 'title',
				hidden: false,
			},
			{
				name: 'field',
				hidden: false,
			},
			{
				name: 'testData',
				hidden: false,
			},
			{
				name: 'barcodeType',
				hidden: false,
			},
			{
				name: 'barWidth',
				hidden: false,
			},
			{
				name: 'coordinate',
				hidden: false,
			},
			{
				name: 'widthHeight',
				hidden: false,
			},
			{
				name: 'hideTitle',
				hidden: false,
			},
			{
				name: 'fixed',
				hidden: false,
			},
			{
				name: 'fontFamily',
				hidden: false,
			},
			{
				name: 'fontSize',
				hidden: false,
			},
			{
				name: 'fontWeight',
				hidden: false,
			},
			{
				name: 'letterSpacing',
				hidden: false,
			},
			{
				name: 'color',
				hidden: false,
			},
			{
				name: 'backgroundColor',
				hidden: false,
			},
			{
				name: 'barColor',
				hidden: false,
			},
			{
				name: 'textAlign',
				hidden: false,
			},
			{
				name: 'textContentVerticalAlign',
				hidden: false,
			},
			{
				name: 'lineHeight',
				hidden: false,
			},
			{
				name: 'transform',
				hidden: false,
			},
			{
				name: 'zIndex',
				hidden: false,
			},
			{
				name: 'pageBreak',
				hidden: false,
			},
			{
				name: 'showInPage',
				hidden: false,
			},
			{
				name: 'unShowInPage',
				hidden: false,
			},
			{
				name: 'axis',
				hidden: false,
			},
			{
				name: 'formatter',
				hidden: false,
			},
			{
				name: 'styler',
				hidden: false,
			},
		],
		default: {
			width: 160,
			height: 40,
			title: '条形码',
			barcodeType: 'code128',
			testData: 'barcode',
		},
	},
	qrcode: {
		tabs: [
			{
				name: '基础',
				options: [
					{
						name: 'title',
						hidden: false,
					},
					{
						name: 'field',
						hidden: false,
					},
					{
						name: 'testData',
						hidden: false,
					},
					{
						name: 'qrcodeType',
						hidden: false,
					},
					{
						name: 'qrCodeLevel',
						hidden: false,
					},
					{
						name: 'coordinate',
						hidden: false,
					},
					{
						name: 'widthHeight',
						hidden: false,
					},
					{
						name: 'hideTitle',
						hidden: false,
					},
					{
						name: 'fixed',
						hidden: false,
					},
				],
			},
			{
				name: '样式',
				options: [
					{
						name: 'fontFamily',
						hidden: false,
					},
					{
						name: 'fontSize',
						hidden: false,
					},
					{
						name: 'fontWeight',
						hidden: false,
					},
					{
						name: 'letterSpacing',
						hidden: false,
					},
					{
						name: 'color',
						hidden: false,
					},
					{
						name: 'backgroundColor',
						hidden: false,
					},
					{
						name: 'barColor',
						hidden: false,
					},
					{
						name: 'textAlign',
						hidden: false,
					},
					{
						name: 'textContentVerticalAlign',
						hidden: false,
					},
					{
						name: 'lineHeight',
						hidden: false,
					},
					{
						name: 'transform',
						hidden: false,
					},
					{
						name: 'zIndex',
						hidden: false,
					},
				],
			},
			{
				name: '高级',
				options: [
					{
						name: 'pageBreak',
						hidden: false,
					},
					{
						name: 'showInPage',
						hidden: false,
					},
					{
						name: 'unShowInPage',
						hidden: false,
					},
					{
						name: 'axis',
						hidden: false,
					},
					{
						name: 'formatter',
						hidden: false,
					},
					{
						name: 'styler',
						hidden: false,
					},
				],
			},
		],
		supportOptions: [
			{
				name: 'title',
				hidden: false,
			},
			{
				name: 'field',
				hidden: false,
			},
			{
				name: 'testData',
				hidden: false,
			},
			{
				name: 'qrcodeType',
				hidden: false,
			},
			{
				name: 'qrCodeLevel',
				hidden: false,
			},
			{
				name: 'coordinate',
				hidden: false,
			},
			{
				name: 'widthHeight',
				hidden: false,
			},
			{
				name: 'hideTitle',
				hidden: false,
			},
			{
				name: 'fixed',
				hidden: false,
			},
			{
				name: 'fontFamily',
				hidden: false,
			},
			{
				name: 'fontSize',
				hidden: false,
			},
			{
				name: 'fontWeight',
				hidden: false,
			},
			{
				name: 'letterSpacing',
				hidden: false,
			},
			{
				name: 'color',
				hidden: false,
			},
			{
				name: 'backgroundColor',
				hidden: false,
			},
			{
				name: 'barColor',
				hidden: false,
			},
			{
				name: 'textAlign',
				hidden: false,
			},
			{
				name: 'textContentVerticalAlign',
				hidden: false,
			},
			{
				name: 'lineHeight',
				hidden: false,
			},
			{
				name: 'transform',
				hidden: false,
			},
			{
				name: 'zIndex',
				hidden: false,
			},
			{
				name: 'pageBreak',
				hidden: false,
			},
			{
				name: 'showInPage',
				hidden: false,
			},
			{
				name: 'unShowInPage',
				hidden: false,
			},
			{
				name: 'axis',
				hidden: false,
			},
			{
				name: 'formatter',
				hidden: false,
			},
			{
				name: 'styler',
				hidden: false,
			},
		],
		default: {
			width: 80,
			height: 80,
			title: '二维码',
			qrcodeType: 'qrcode',
			testData: 'qrcode',
		},
	},
} as const
// 默认的纸张类型
export const paperTypes = {
	A3: {
		width: 420,
		height: 297,
	},
	A4: {
		width: 210,
		height: 297,
	},
	A5: {
		width: 210,
		height: 148,
	},
	B3: {
		width: 500,
		height: 353,
	},
	B4: {
		width: 250,
		height: 353,
	},
	B5: {
		width: 250,
		height: 176,
	},
} as const
export const elementTypes = [
	{ label: '文本', value: 'text' },
	{ label: '图片', value: 'image' },
	{ label: '长文', value: 'longText' },
	{ label: '表格', value: 'table' },
	{ label: '竖线', value: 'hline' },
	{ label: '横线', value: 'vline' },
	{ label: '矩形', value: 'rect' },
	{ label: '圆形', value: 'oval' },
	{ label: '自定义HTML', value: 'html' },
	{ label: '条形码', value: 'barcode' },
	{ label: '二维码', value: 'qrcode' },
]
export type PaperTypes = keyof typeof paperTypes
// 挂载到window
;(function () {
	window.HIPRINT_CONFIG = HIPRINT_CONFIG
})()
export type HiprintConfigConst = typeof HIPRINT_CONFIG
export type HiprintConfigSetOption = DeepPartial<HiprintConfig>
interface HiprintConfig {
	movingDistance: number
	paperHeightTrim: number
	showPosition: boolean
	positionLineMode: boolean
	positionUnit: boolean
	showSizeBox: boolean
	adsorbMin: number
	showAdsorbLine: boolean
	adsorbLineMin: number
	paperNumberContinue: boolean
	optionItems: any[]
	panel: Panel
	text: Text
	image: Image
	longText: Text
	table: Table
	hline: Hline
	vline: Vline
	rect: Vline
	oval: Vline
	html: Text
	tableColumn: TableColumn
	barcode: Barcode
	qrcode: QRcode
}

interface QRcode {
	tabs: Tab[]
	supportOptions: SupportOption[]
	default: Default7
}

interface Default7 {
	width: number
	height: number
	title: string
	qrcodeType: string
	testData: string
}

interface Barcode {
	tabs: Tab[]
	supportOptions: SupportOption[]
	default: Default6
}

interface Default6 {
	width: number
	height: number
	title: string
	barcodeType: string
	testData: string
}

interface TableColumn {
	supportOptions: SupportOption[]
	default: Default2
}

interface Vline {
	tabs: Tab[]
	supportOptions: SupportOption[]
	default: Default5
}

interface Default5 {
	borderWidth?: any
	height: number
	width: number
}

interface Hline {
	tabs: Tab[]
	supportOptions: SupportOption[]
	default: Default4
}

interface Default4 {
	borderWidth: number
	height: number
	width: number
}

interface Table {
	tabs: Tab2[]
	supportOptions: SupportOption[]
	default: Default3
}

interface Default3 {
	width: number
}

interface Tab2 {
	name: string
	options: SupportOption[]
}

interface Image {
	tabs: Tab[]
	supportOptions: SupportOption[]
	default: Default
}

interface Text {
	tabs: Tab[]
	supportOptions: SupportOption[]
	default: Default2
}

interface Default2 {
	width: number
	height: number
}

interface Tab {
	name: string
	options: SupportOption[]
}

interface Panel {
	supportOptions: SupportOption[]
	default: Default
}

interface Default {}

interface SupportOption {
	name: string
	hidden: boolean
}
