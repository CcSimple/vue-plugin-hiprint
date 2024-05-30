import React, { ErrorInfo } from 'react'

interface ErrorBoundaryProps {
	fallback?: React.ReactElement
	FallbackComponent?: React.ComponentType<{ error: Error }> | null
	onError?: (error: Error, errorInfo: ErrorInfo) => void
	children: React.ReactNode
}

interface ErrorBoundaryState {
	error: Error | null
}

class ErrorBoundary extends React.Component<
	ErrorBoundaryProps,
	ErrorBoundaryState
> {
	state = { error: null }

	static getDerivedStateFromError(error: any) {
		return { error }
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		if (this.props.onError) {
			//上报日志通过父组件注入的函数进行执行
			this.props.onError(error, errorInfo)
		}
	}
	render() {
		const { fallback, FallbackComponent } = this.props
		const { error } = this.state as ErrorBoundaryState
		if (error) {
			const fallbackProps = { error }
			//判断是否为React Element
			if (React.isValidElement(fallback)) {
				return fallback
			}
			//组件方式传入
			if (FallbackComponent) {
				return <FallbackComponent {...fallbackProps} />
			}
			throw new Error('ErrorBoundary 组件需要传入兜底UI')
		}
		return this.props.children
	}
}
export default ErrorBoundary
