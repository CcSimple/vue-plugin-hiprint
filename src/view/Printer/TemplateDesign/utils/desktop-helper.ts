export const validateClientConnection = () => {
	return new Promise((resolve, reject) => {
		// todo
		// 检查ws是否连接
		if (WebSocket.OPEN) {
			resolve(true)
		} else {
			reject(false)
		}
	})
}

export const URLScheme = 'hiprint://'
export const ClientDownloadURL =
	'https://gitee.com/CcSimple/electron-hiprint/releases'
