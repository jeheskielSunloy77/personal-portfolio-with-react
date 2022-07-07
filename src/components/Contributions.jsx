import React from "react"
import GitHubCalendar from "react-github-calendar"
import ReactTooltip from "react-tooltip"

export default function Contributions() {
	return (
		<div className="centerAll text-white">
			<GitHubCalendar
				username="jeheskielSunloy77"
				blockMargin={6}
				blockSize={18}
				theme={{
					level0: "#113b4b",
					level1: "#0e7490",
					level2: "#06b6d4",
					level3: "#67e8f9",
					level4: "#cffafe",
				}}
			>
				<ReactTooltip html />
			</GitHubCalendar>
		</div>
	)
}
