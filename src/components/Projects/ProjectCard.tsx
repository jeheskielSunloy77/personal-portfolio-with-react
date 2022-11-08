const ProjectCard = ({ title, desc, img, links, details }: MainProps) => (
	<div className='bg-gray-200 dark:bg-gray-800 rounded-lg mx-auto h-[500px] sm:h-[350px] sm:w-[900px] flex flex-col sm:flex-row justify-center items-center shadow-2xl'>
		<ProjectImage img={img} details={details} />
		<ProjectDescriptions title={title} desc={desc} links={links} />
	</div>
)

const ProjectDescriptions = ({ title, desc, links }: ProjectDescriptions) => (
	<div className='product-details sm:w-[45%] h-1/2 sm:h-full text-left overflow-hidden px-4 sm:px-10 flex flex-col justify-center'>
		<h1 className='text-high text-lg mb-2'>{title}</h1>
		<p className='text-low'>{desc}</p>
		<div className='flex mt-4'>
			{links.code ? (
				<a href={links.code} target='_blank' rel='noreferrer'>
					<button
						type='button'
						className='text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-cyan-600 dark:hover:bg-cyan-700 focus:outline-none dark:focus:ring-cyan-800'
					>
						View Project
					</button>
				</a>
			) : (
				<button
					type='button'
					disabled
					className='cursor-not-allowed text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800'
				>
					Private Project
				</button>
			)}
			<a href={links.demo} target='_blank' rel='noreferrer'>
				<button
					type='button'
					className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-cyan-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
				>
					Live Demo
				</button>
			</a>
		</div>
	</div>
)

const ProjectImage = ({ img, details }: ProjectImage) => (
	<div className='group w-full sm:w-[55%] h-1/2 sm:h-full transition-all duration-300 ease-out relative overflow-hidden'>
		<img
			className='group-hover:scale-125 transition-transform duration-300 ease-out w-full h-full'
			src={img}
			loading='lazy'
			alt='project-image'
			width='495'
			height='350'
		/>
		<div className='group-hover:translate-x-0 bg-gray-600 opacity-80 transition-all duration-300 ease-out -translate-x-[100%] absolute leading-loose cursor-no-drop text-white h-full w-full left-0 top-0'>
			<ul className='text-center h-full centerAll'>
				<li>
					<strong>Status : </strong>
					{details.status}
				</li>
				<li>
					<strong>Live Demo : </strong>
					{details.demo}
				</li>
				<li>
					<strong>Source Code : </strong>
					{details.code}
				</li>
				<li>
					<strong>Stack: </strong>
					{details.stack}
				</li>
			</ul>
		</div>
	</div>
)
type ProjectLinks = {
	code?: string
	demo?: string
}
type ProjectDetails = {
	status: string
	demo: string
	code: string
	stack: string
}
interface ProjectDescriptions {
	title: string
	desc: string
	links: ProjectLinks
}

interface ProjectImage {
	img: string
	details: ProjectDetails
}
interface MainProps {
	title: string
	desc: string
	img: string
	links: ProjectLinks
	details: ProjectDetails
}

export default ProjectCard
