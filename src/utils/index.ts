// 使用IFF封装一个复制函数
export const copyToClipboard = (function () {
	if (navigator.clipboard && window.isSecureContext) {
		return (data: string) => navigator.clipboard.writeText(data)
	} else {
		return (data: string) => {
			const textArea = document.createElement('textarea')
			textArea.value = data
			textArea.style.position = 'fixed'
			textArea.style.top = '-9999px'
			textArea.style.left = '-9999px'
			textArea.style.opacity = '0'
			document.body.appendChild(textArea)
			textArea.focus()
			textArea.select()
			try {
				document.execCommand('copy')
			} catch (err) {
				throw new Error('Unable to copy to clipboard')
			} finally {
				document.body.removeChild(textArea)
			}
		}
	}
})()

export const downloadJsonFile = (
	data: Object,
	filename?: string
): Promise<true | Error> => {
	return new Promise((resolve, reject) => {
		if (!data) {
			reject(new Error('数据无效'))
			return
		}
		try {
			const blob = new Blob([JSON.stringify(data, null, 2)], {
				type: 'application/json',
			})
			const url = URL.createObjectURL(blob)
			const a = document.createElement('a')
			a.href = url
			a.download = filename || 'download.json'
			a.click()
			a.remove()
			resolve(true)
		} catch (e) {
			console.log('下载失败,错误信息:', e)
			reject(new Error('下载失败'))
		}
	})
}

export const uploadJsonFile = (): Promise<any> => {
	return new Promise((resolve, reject) => {
		const fileInput = document.createElement('input')
		fileInput.type = 'file'
		fileInput.accept = '.json'
		fileInput.click()
		fileInput.onchange = () => {
			if (fileInput.files) {
				const file = fileInput.files[0]
				const reader = new FileReader()
				reader.readAsText(file)
				reader.onloadend = () => {
					const jsonTxt = reader.result as string
					if (jsonTxt) {
						try {
							const json = JSON.parse(jsonTxt)
							resolve(json)
						} catch (e) {
							console.log(e)
							reject(new Error('文件内容不是JSON格式'))
						}
					} else {
						reject(new Error('文件内容为空'))
					}
				}
			}
			fileInput.remove()
		}
	})
}
