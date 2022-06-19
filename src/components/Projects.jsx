import ProjectCard from "./ProjectCard"
import React from "react"
import "./ProjectCard.scss"
export default function Projects() {
	return (
		<div id="projects" className="myContainer">
			<h1 className="mb-10 text-intro">
				My Latest <span className="text-cyan-500">Projects</span>
			</h1>
			<div className="largeGrid items-center justify-center">
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
			</div>
		</div>
	)
}
