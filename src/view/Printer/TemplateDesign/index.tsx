import { PrinterProvider } from './context/printer-context'
import Printer from './Printer'

const TemplateDesign = () => {
	return (
		<PrinterProvider>
			<Printer />
		</PrinterProvider>
	)
}

export default TemplateDesign
