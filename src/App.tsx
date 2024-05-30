import { hiprint } from './hiprint'
import Router from './router'

const App = () => {
	hiprint.init({
		host: 'http://192.168.6.202:12345', // 此处输入服务启动后的地址
		token: 'hiprint-cloud', // 用于鉴权的token
	})
	return <Router />
}
export default App
