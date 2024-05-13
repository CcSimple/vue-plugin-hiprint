/*
 * @Author: 54xavier
 * @LastEditors: 54xavier
 * @Date: 2023-02-28 14:00:03
 * @LastEditTime: 2023-02-28 14:18:14
 */
export const name = '一行多组';
export const desc = '条码、标签A4纸铺满打印demo'
export const author = '54xavier'
export const link = "https://ccsimple.gitee.io/vue-plugin-hiprint/";
// url 或者 base64 或者 require('../../../assets/logo.png')
export const preview = '/static/template2.png';
export const printData = {
	table: [
		{
			name: "Apple iPhone 13 Pro Max",
			type: "Mobile Phone",
			barcode: "190199829853",
		},
		{
			name: "Samsung Galaxy S21 Ultra",
			type: "Mobile Phone",
			barcode: "8801643871977",
		},
		{
			name: "Sony WH-1000XM4 Wireless Headphones",
			type: "Headphones",
			barcode: "027242919905",
		},
		{
			name: "Lenovo ThinkPad X1 Carbon Gen 9",
			type: "Laptop",
			barcode: "195235458521",
		},
		{
			name: "Apple iPad Air",
			type: "Tablet",
			barcode: "190199855659",
		},
		{
			name: "Dell XPS 13",
			type: "Laptop",
			barcode: "884116382030",
		},
		{
			name: "Amazon Echo Dot (3rd Gen)",
			type: "Smart Speaker",
			barcode: "841667155635",
		},
		{
			name: "Google Nest Hub",
			type: "Smart Display",
			barcode: "193575001505",
		},
		{
			name: "Samsung QN90A Neo QLED TV",
			type: "Television",
			barcode: "887276496535",
		},
		{
			name: "LG CX OLED TV",
			type: "Television",
			barcode: "719192633020",
		},
		{
			name: "PlayStation 5",
			type: "Gaming Console",
			barcode: "711719541042",
		},
		{
			name: "Xbox Series X",
			type: "Gaming Console",
			barcode: "889842687482",
		},
		{
			name: "Apple Watch Series 7",
			type: "Smartwatch",
			barcode: "190199874322",
		},
		{
			name: "Fitbit Charge 5",
			type: "Fitness Tracker",
			barcode: "811138039822",
		},
		{
			name: "Bose QuietComfort 35 II",
			type: "Headphones",
			barcode: "017817770613",
		},
		{
			name: "Logitech MX Master 3",
			type: "Computer Mouse",
			barcode: "097855149969",
		},
		{
			name: "Nintendo Switch",
			type: "Gaming Console",
			barcode: "04549688180",
		},
		{
			name: "HP OfficeJet Pro 9015e All-in-One Printer",
			type: "Printer",
			barcode: "194721013844",
		},
		{
			name: "Canon EOS R5",
			type: "Mirrorless Camera",
			barcode: "013803338279",
		},
		{
			name: "Sony WH-1000XM3 Wireless Headphones",
			type: "Headphones",
			barcode: "027242908676",
		},
		{
			name: "Bose SoundLink Revolve+",
			type: "Bluetooth Speaker",
			barcode: "017817744171",
		},
		{
			name: "Nest Learning Thermostat",
			type: "Smart Thermostat",
			barcode: "813917021952",
		},
		{
			name: "LG C1 OLED TV",
			type: "Television",
			barcode: "719192641615",
		},
		{
			name: "Samsung Galaxy Tab S7",
			type: "Tablet",
			barcode: "887276447402",
		},
		{
			name: "Dyson V11 Absolute Cordless Vacuum",
			type: "Vacuum Cleaner",
			barcode: "885609020334",
		},
		{
			name: "GoPro HERO10 Black",
			type: "Action Camera",
			barcode: "818279029168",
		},
		{
			name: "Microsoft Surface Laptop 4",
			type: "Laptop",
			barcode: "889842724245",
		},
		{
			name: "Apple AirPods Pro",
			type: "Wireless Earbuds",
			barcode: "190199246850",
		},
		{
			name: "Sony A7S III",
			type: "Mirrorless Camera",
			barcode: "027242919925",
		},
		{
			name: "Samsung Galaxy Watch 4",
			type: "Smartwatch",
			barcode: "887276531088",
		},
		{
			name: "Bose SoundSport Wireless Earbuds",
			type: "Wireless Earbuds",
			barcode: "017817731355",
		},
		{
			name: "NVIDIA GeForce RTX 3080",
			type: "Graphics Card",
			barcode: "812674023590",
		},
		{
			name: "Sony WH-CH710N Wireless Headphones",
			type: "Headphones",
			barcode: "027242917711",
		},
		{
			name: "Bose QuietComfort Earbuds",
			type: "Wireless Earbuds",
			barcode: "017817788293",
		},
		{
			name: "Apple MacBook Pro 16-inch",
			type: "Laptop",
			barcode: "190199397010",
		},
		{
			name: "Samsung Galaxy Note 20 Ultra",
			type: "Mobile Phone",
			barcode: "887276395219",
		},
		{
			name: "Google Pixel 6",
			type: "Mobile Phone",
			barcode: "842776101253",
		},
		{
			name: "Microsoft Xbox Wireless Controller",
			type: "Gaming Controller",
			barcode: "889842493038",
		},
		{
			name: "Logitech G502 HERO Gaming Mouse",
			type: "Gaming Mouse",
			barcode: "097855135391",
		},
		{
			name: "Sony WF-1000XM4 Wireless Earbuds",
			type: "Wireless Earbuds",
			barcode: "027242920023",
		},
	],
};
export const json = {
	panels: [
		{
			index: 0,
			height: 297,
			width: 210,
			paperHeader: 0,
			paperFooter: 842,
			printElements: [
				{
					options: {
						left: 20,
						top: 20,
						height: 56,
						width: 555,
						field: "table",
						tableHeaderRepeat: "none",
						tableBorder: "noBorder",
						tableBodyRowBorder: "noBorder",
						tableBodyCellBorder: "noBorder",
						gridColumns: 2,
						gridColumnsGutter: 3,
						fields: [
							{
								text: "商品名称",
								field: "name",
							},
							{
								text: "商品编码",
								field: "code",
							},
						],
						columns: [
							[
								{
									title: "商品名称",
									field: "name",
									checked: true,
									renderFormatter:
										"function(value,row,index,options){return `商品名：${row.name || '测试商品名'}<br>条码：${row.barcode || '123456'}`}",
								},
								{
									title: "商品条码",
									field: "barcode",
									checked: true,
									tableTextType: "barcode",
								},
							],
						],
					},
					printElementType: {
						title: "表格",
						type: "table",
					},
				},
			],
			paperNumberLeft: 565.5,
			paperNumberTop: 819,
		},
	],
};
export default {
  preview: preview,
  name: name,
  desc: desc,
  author: author,
  link: link,
  printData: printData,
  json: json
}
