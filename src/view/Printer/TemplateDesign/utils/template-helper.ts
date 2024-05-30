import { hiprint } from '@/hiprint'
import { TemplateInstance, TemplateOptions } from '@/hiprint/hiprint-types'

const templateMap: { [key: string]: TemplateInstance } = {}

export function newHiprintPrintTemplate(
	key: string,
	options?: TemplateOptions
) {
	let template = new hiprint.PrintTemplate(options)
	templateMap[key] = template
	return template
}

export function getHiprintPrintTemplate(key: string) {
	if (!templateMap[key]) {
		throw new Error('模板不存在,请先创建')
	}
	return templateMap[key]
}
