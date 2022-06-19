import React from "react"
export default function ProjectCard({}) {
	return (
		<div className="mx-auto w-[366px] h-[500px] sm:h-[350px] sm:w-[700px] flex flex-col sm:flex-row justify-center items-center shadow-xl">
			<div class="product-image w-full sm:w-[45%] h-1/2 sm:h-full transition-all duration-300 ease-out relative overflow-hidden rounded">
				<img
					className="w-full h-full"
					src="https://images.unsplash.com/photo-1606830733744-0ad778449672?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fGNocmlzdG1hcyUyMHRyZWV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
					alt=""
				/>

				<div class="info bg-gray-600 opacity-90 transition-all duration-300 ease-out -translate-x-[100%] absolute leading-loose cursor-no-drop text-medium h-full w-full left-0 top-0">
					<h1 className="text-center text-high text-lg">Description</h1>
					<ul>
						<li className="transition-all duration-300 ease-out hover:translate-x-12 hover:scale-125">
							<strong>Status : </strong>Final
						</li>
						<li className="transition-all duration-300 ease-out hover:translate-x-12 hover:scale-125">
							<strong>Live Demo : </strong>Available
						</li>
						<li className="transition-all duration-300 ease-out hover:translate-x-12 hover:scale-125">
							<strong>Source Code : </strong>Open
						</li>
						<li className="transition-all duration-300 ease-out hover:translate-x-12 hover:scale-125">
							<strong>Stack: </strong>MERN
						</li>
					</ul>
				</div>
			</div>
			<div class="product-details w-full sm:w-[55%] h-1/2 sm:h-full bg-gray-200 dark:bg-gray-800 text-left overflow-hidden px-4 flex flex-col justify-center rounded">
				<h1 className="text-high text-lg mb-2">CHRISTMAS TREE</h1>
				<p class="text-low">
					" Let's spread the joy , here is Christmas , the most awaited day
					of the year.Christmas Tree is what one need the most. Here is the
					correct tree which will enhance your Christmas.
				</p>
				<div className="flex mx-auto mt-4">
					<button
						type="button"
						class="text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-cyan-600 dark:hover:bg-cyan-700 focus:outline-none dark:focus:ring-cyan-800"
					>
						View Project
					</button>
					<button
						type="button"
						class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-cyan-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
					>
						Live Demo
					</button>
				</div>
			</div>
		</div>
	)
}
