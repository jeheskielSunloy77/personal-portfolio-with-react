import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import "swiper/css/bundle"

ReactDOM.render(
	<React.StrictMode>
		<div
			className={`bg-gradient-to-r from-gray-200 to-white dark:from-[#042c41] dark:to-gray-900`}
		>
			<div className={` bg-[url("src/images/background.svg")]`}>
				<App />
			</div>
		</div>
	</React.StrictMode>,
	document.getElementById("root")
)
