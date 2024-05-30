declare interface Window {
	hiprint: import('./hiprint-types.ts').Hiprint
	HIPRINT_CONFIG: import('./hiprint-types.ts').HiprintConfig
	autoConnect: boolean
	hiwebSocket: import('./hiprint-types.ts').HiWebSocket
}
