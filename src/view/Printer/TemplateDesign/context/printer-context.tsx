import { createContext, useContext, useId, useState } from 'react'
import { hiprint, defaultElementTypeProvider } from '@/hiprint'
import useZoom from '../hooks/useZoom'
import {
	Hiprint,
	Provider,
	TemplateInstance,
	TemplateJson,
	TemplateOptions,
} from '@/hiprint/hiprint-types'
import {
	getHiprintPrintTemplate,
	newHiprintPrintTemplate,
} from '../utils/template-helper'
import {
	buildProviders,
	updateElementType,
	buildByHtml,
} from '../utils/provider-helper'
import { useHistory } from '../hooks/useHistory'
import usePaper from '../hooks/usePaper'
const PrinterContext = createContext<{
	getTemplate: () => TemplateInstance
	zoomHandler: ReturnType<typeof useZoom>
	historyHandler: ReturnType<typeof useHistory>
	paperHandler: ReturnType<typeof usePaper>
	buildDesigner: (options: TemplateOptions) => void
	buildProviders: typeof buildProviders
	buildByHtml: typeof buildByHtml
	updateElementType: typeof updateElementType
	currentTemplateName: string
	updateTemplate: (templateName: string, template: TemplateJson) => void
	hiprint: Hiprint
} | null>(null)
interface PrinterContextProvider {
	providers?: Provider[]
	templateOptions?: TemplateOptions
}

const PrinterProvider = (
	props: PrinterContextProvider & { children: React.ReactNode }
) => {
	const { providers = [defaultElementTypeProvider()], children } = props
	const id = useId()
	hiprint.init({ providers: providers })

	const zoomHandler = useZoom(id)
	const historyHandler = useHistory(id)
	const paperHandler = usePaper(id)

	const buildDesigner = (options: TemplateOptions) => {
		const hiprintTemplate = newHiprintPrintTemplate(id, options)
		hiprintTemplate.design('#hiprint-printTemplate', { grid: true })
	}
	const getTemplate = () => getHiprintPrintTemplate(id)
	const [currentTemplateName, setCurrentTemplateName] = useState('demo1')
	const updateTemplate = (templateName: string, template: TemplateJson) => {
		getTemplate().update(template)
		setCurrentTemplateName(templateName)
	}
	return (
		<PrinterContext.Provider
			value={{
				getTemplate,
				updateTemplate,
				currentTemplateName,
				zoomHandler,
				historyHandler,
				paperHandler,
				buildProviders,
				buildDesigner,
				updateElementType,
				buildByHtml,
				hiprint,
			}}>
			{children}
		</PrinterContext.Provider>
	)
}
const usePrinterContext = () => {
	const context = useContext(PrinterContext)
	if (!context) {
		throw Error('usePrinterContext must be used within a Printer')
	}
	return context
}

export { PrinterProvider, usePrinterContext }
