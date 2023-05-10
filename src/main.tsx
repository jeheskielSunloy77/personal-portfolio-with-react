import React from 'react'
import ReactDOM from 'react-dom'
import 'swiper/css/bundle'
import App from './App'
import './index.css'
import { AppProvider } from './utils/AppContext'

ReactDOM.render(
	<React.StrictMode>
		<AppProvider>
			{/* <TestPage /> */}
			<App />
		</AppProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
