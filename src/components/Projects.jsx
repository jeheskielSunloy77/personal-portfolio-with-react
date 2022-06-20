import React from "react"
import ProjectSlider from "./ProjectSlider"
export default function Projects() {
	return (
		<div id="projects" className="myContainer">
			<h1 className="mb-10 text-intro text-center sm:text-left">
				My Latest <span className="text-cyan-500">Projects</span>
			</h1>
			<div className="flex items-center justify-center">
				<ProjectSlider />
			</div>
		</div>
	)
}
