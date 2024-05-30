import { message } from 'antd'
import { Socket, io } from 'socket.io-client'
type CallBack = (...arg: any) => any

interface ClientInfo {
	version: string //"version": "1.0.0",
	platform: string //"platform": "win32",
	arch: string //"arch": "ia32",
	mac: string //"mac": "b0:7b:xx:xx:xx:99",
	ip: string //"ip": "192.168.6.xxx",
	ipv6: string //"ipv6": "2408:8240:4a1b:9e60:xxxx:xxxx:xxxx:xxxx",
	clientUrl: string //"clientUrl": "http://192.168.6.160:17521",
	machineId: string //"machineId": "xxxxxxxxx-3a83-4ca5-8c7f-efcb2d5ce90b"
}

interface Printer {
	name: string //"name": "TSC TTP",
	displayName: string // "displayName": "TSC TTP",
	description: string // "description": "",
	status: number // "status": 0,
	isDefault: boolean // "isDefault": false,
	options: PrinterOptions
}
interface PrinterOptions {
	'printer-location': string // "printer-location": "",
	'printer-make-and-model': string // "printer-make-and-model": "TSC TTP-244 Pro",
	system_driverinfo: string // "system_driverinfo": "TSC TTP-244 Pro;7.4.3.2;TSPL Driver;7.4.3 M-2"
}

interface PrintHtmlOption {
	html: string
	templateId: string
	printer?: string
	pageSize?:
		| 'A0'
		| 'A1'
		| 'A2'
		| 'A3'
		| 'A4'
		| 'A5'
		| 'A6'
		| 'Legal'
		| 'Letter'
		| 'Tabloid'
		| { height: number; width: number }
	type?: 'pdf' | 'url_pdf'
	url_pdf?: '网络PDF的下载url'
}
interface PagesizeInfo {
	PrinterName: string //"Microsoft Print to PDF"
	TaskNumber: number //0
	Status: number //0
	StatusMsg: string //"准备就绪（Ready）"
	PaperSizes: PaperSize[] //
}

interface PaperSize {
	Height: number //1100
	Kind: number //1
	PaperName: string // "信纸"
	RawKind: number // 1
	Width: number //850
}

class Event {
	_event: { [key: string]: any }
	constructor() {
		this._event = {}
	}

	on(type: string, fn: CallBack) {
		this._event[type] || (this._event[type] = [])
		if (this._event[type].indexOf(fn) < 0) {
			this._event[type].push(fn)
		}
		return this
	}

	off(type: string, fn: CallBack) {
		const fnList = this._event[type]
		if (fnList) {
			let index = fnList.indexOf(fn)
			if (index > -1) {
				fnList.splice(index, 1)
			}
		}
		return this
	}

	trigger(type: string, data: any) {
		const fnList = this._event[type]
		if (fnList && fnList.length) {
			fnList.forEach((fn: CallBack) => {
				fn(data)
			})
		}
		return this
	}

	clear(type: string) {
		this._event[type] = []
		return this
	}
}
//
class LocalClientSocket {
	event: Event
	socket: Socket | null
	constructor(host?: string, token?: string) {
		this.socket = io(host || this.host)
		this.event = new Event()
		this.token = token || ''
	}
	state = ''
	CONNECTED = 'connected'
	RECONNECTING = 'reconnecting'

	opened = false
	name = 'webSockets'
	host = 'http://localhost:17521'
	token = ''
	reconnectTimeout = 6e4
	reconnectWindowSetTimeout = null
	reconnectDelay = 2e3
	supportsKeepAlive = () => true
	clients = {}
	clientInfo: ClientInfo | {} = {}
	printerList: Printer[] | [] = []
	paperSize: PagesizeInfo[] | [] = []
	start(cb?: CallBack) {
		if (window.WebSocket) {
			if (!this.socket) {
				this.socket = io(this.host, {
					transports: ['websocket'],
					reconnectionAttempts: 5,
					auth: { toke: this.token },
				})
			}
			this.socket.on('connect', () => {
				console.log('%c本地打印服务启动!', 'color:green;font-weight:bold')
				this.opened = true
				this.socket?.on(
					'success',
					(template: { templateId: string; msg: string }) => {
						this.event.trigger('printSuccess_' + template.templateId, template)
						message.success('打印成功')
					}
				)
				this.socket?.on(
					'error',
					(template: { templateId: string; msg: string }) => {
						this.event.trigger('printError_' + template.templateId, template)
					}
				)
				this.socket?.on('clients', (clients) => {
					this.clients = clients
					this.event.trigger('clients', clients)
				})
				this.socket?.on('clientInfo', (clientInfo) => {
					this.clientInfo = clientInfo
				})
				this.socket?.on('printerList', (printerList) => {
					this.printerList = printerList
					this.event.trigger('printerList', printerList)
				})
				this.socket?.on(
					'paperSizeInfo',
					(paperSizeInfo: PagesizeInfo | PagesizeInfo[]) => {
						this.paperSize = Array.isArray(paperSizeInfo)
							? paperSizeInfo
							: [paperSizeInfo]
						this.event.trigger('paperSizeInfo', this.paperSize)
					}
				)
				this.socket?.on(
					'address',
					(type: 'all' | 'ipv6' | 'dns' | 'mac', addr, e) => {
						this.event.trigger('address_' + type, { addr, e })
					}
				)
				this.socket?.on('ippPrinterConnected', (printer) => {
					this.event.trigger('ippPrinterConnected', printer)
				})
				this.socket?.on('ippPrinterCallback', (err, res) => {
					this.event.trigger('ippPrinterCallback', { err, res })
				})
				this.socket?.on('ippRequestCallback', (err, res) => {
					this.event.trigger('ippRequestCallback', { err, res })
				})
				this.state = this.CONNECTED
				cb && cb(true)
			})
			this.socket.on('connect_error', (e) => {
				this.event.trigger('connect_error', e)
			})
			this.socket.on('disconnect', () => {
				console.log('%c本地打印服务断开!', 'color:red;font-weight:bold')
				this.opened = false
				cb && cb(false)
			})
		} else {
			console.log('浏览器不支持websocket')
		}
		cb && cb(false)
	}
	stop() {
		if (this.socket) {
			this.socket.close()
			this.socket = null
			this.printerList = []
		}
	}
	reconnect() {
		if (this.state !== this.CONNECTED && this.state !== this.RECONNECTING) {
			this.stop()
			this.ensureReconnectingState()
			console.log('ws reconnecting')
			this.start()
		}
	}
	ensureReconnectingState() {
		this.state = this.RECONNECTING
		return this.state === this.RECONNECTING
	}

	// 如果打印html socket.emit("news", { html, templateId, printer, pageSize });
	// 如果打印pdf socket.emit("news", { html, templateId, printer, pageSize ,type:'pdf'});
	// 如果打印网络pdf socket.emit("news", { client, printer, type: 'url_pdf', pdf_path: '网络PDF的下载url' })
	send(options: PrintHtmlOption) {
		try {
			if (this.socket?.connected) {
				this.socket?.emit('news', options)
			} else {
				window.open('hiprint://')
			}
		} catch (e) {
			console.log('send data error:' + (options || '') + JSON.stringify(e))
		}
	}

	getPrinterList = () => this.printerList

	refreshPrinterList = () => {
		try {
			this.socket?.emit('refreshPrinterList')
		} catch (e) {
			console.log('refreshPrinterList error:' + JSON.stringify(e))
		}
	}
	// 连接node-transit的时候无法调用，需要客户端1.0.10以上版本
	getPaperSizeInfo: (printer?: string) => void | undefined = (
		printer?: string
	) => {
		try {
			console.warn('getPaperSizeInfo 是一个测试功能，仅win客户端支持该api！')
			this.socket?.emit('getPaperSizeInfo', printer)
		} catch (e) {
			console.log('getPaperSizeInfo error:' + JSON.stringify(e))
		}
	}

	getClients() {
		try {
			this.socket?.emit('getClients')
		} catch (e) {
			console.log('getClients error:' + JSON.stringify(e))
		}
	}

	getClientInfo() {
		try {
			this.socket?.emit('getClientInfo')
		} catch (e) {
			console.log('getClientInfo error:' + JSON.stringify(e))
		}
	}

	getAddress(type: string, ...args: any) {
		try {
			this.socket?.emit('address', type, ...args)
		} catch (e) {
			console.log('getAddress error:' + JSON.stringify(e))
		}
	}
	ippPrint(options: any) {
		try {
			this.socket?.emit('ippPrint', options)
		} catch (e) {
			console.log('ippPrint error:' + JSON.stringify(e))
		}
	}
	ippRequest(options: any) {
		try {
			this.socket?.emit('ippRequest', options)
		} catch (e) {
			console.log('ippRequest error:' + JSON.stringify(e))
		}
	}
}

export { LocalClientSocket }

const localClientSocket = new LocalClientSocket(
	'http://localhost:17521',
	'hiprint-react'
)
localClientSocket.start()

export { localClientSocket }
