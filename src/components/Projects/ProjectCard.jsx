export default function ProjectCard({ title, desc, img, links, details }) {
	return (
		<div className="bg-gray-200 dark:bg-gray-800 rounded-lg mx-auto h-[500px] sm:h-[350px] sm:w-[900px] flex flex-col sm:flex-row justify-center items-center shadow-xl">
			<div class="product-image w-full sm:w-[55%] h-1/2 sm:h-full transition-all duration-300 ease-out relative overflow-hidden">
				<img className="w-full h-full" src={img} alt="" />
				<div class="info bg-gray-600 opacity-90 transition-all duration-300 ease-out -translate-x-[100%] absolute leading-loose cursor-no-drop text-medium h-full w-full left-0 top-0">
					<h1 className="text-center text-high text-lg">
						Project Details
					</h1>
					<ul>
						<li className="transition-all duration-300 ease-out hover:translate-x-12 hover:scale-125">
							<strong>Status : </strong>
							{details.status}
						</li>
						<li className="transition-all duration-300 ease-out hover:translate-x-12 hover:scale-125">
							<strong>Live Demo : </strong>
							{details.demo}
						</li>
						<li className="transition-all duration-300 ease-out hover:translate-x-12 hover:scale-125">
							<strong>Source Code : </strong>
							{details.code}
						</li>
						<li className="transition-all duration-300 ease-out hover:translate-x-12 hover:scale-125">
							<strong>Stack: </strong>
							{details.stack}
						</li>
					</ul>
				</div>
			</div>
			<div class="product-details sm:w-[45%] h-1/2 sm:h-full text-left overflow-hidden px-4 sm:px-10 flex flex-col justify-center">
				<h1 className="text-high text-lg mb-2">{title}</h1>
				<p class="text-low">{desc}</p>
				<div className="flex mt-4">
					<a href={links.code} target="_blank">
						<button
							type="button"
							class="text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-cyan-600 dark:hover:bg-cyan-700 focus:outline-none dark:focus:ring-cyan-800"
						>
							View Project
						</button>
					</a>
					<a href={links.demo} target="_blank">
						<button
							type="button"
							class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-cyan-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
						>
							Live Demo
						</button>
					</a>
				</div>
			</div>
		</div>
	)
}
