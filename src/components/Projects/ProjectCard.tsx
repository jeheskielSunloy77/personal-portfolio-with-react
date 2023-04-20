import { ComponentColors, Project } from 'src/utils/types'
import Badge from '../Badge'

const ProjectCard = ({ project }: { project: Project }) => (
	<div className='bg-gray-200 dark:bg-gray-800 rounded-lg mx-auto h-[500px] sm:h-[350px] sm:w-[900px] flex flex-col sm:flex-row justify-center items-center shadow-2xl'>
		<ProjectImage img={project.img} details={project.details} />
		<ProjectDescriptions
			title={project.title}
			desc={project.desc}
			links={project.links}
			badge={project.badge}
		/>
	</div>
)

const ProjectDescriptions = ({
	title,
	desc,
	links,
	badge,
}: Pick<Project, 'title' | 'desc' | 'links' | 'badge'>) => (
	<div className='product-details sm:w-[45%] h-1/2 sm:h-full text-left overflow-hidden px-4 sm:px-10 flex flex-col justify-center'>
		<h1 className='flex items-center gap-2 mb-2 text-lg text-high'>
			{title}
			{badge && (
				<Badge color={badge.color} className='animate-pulse'>
					{badge.text}
				</Badge>
			)}
		</h1>
		<p className='text-light'>{desc}</p>
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
			{links.demo ? (
				<a href={links.demo} target='_blank' rel='noreferrer'>
					<button
						type='button'
						className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-cyan-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
					>
						Live Demo
					</button>
				</a>
			) : (
				<button
					type='button'
					disabled
					className='py-2.5 px-5 mr-2 mb-2 text-sm cursor-not-allowed  font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-cyan-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
				>
					Unavailable
				</button>
			)}
		</div>
	</div>
)

const statusColor: Record<Project['details']['status'], ComponentColors> = {
	'Work on Progress': 'warning',
	Final: 'accent',
	Stable: 'primary',
	Discontinued: 'error',
}
const demoColor: Record<Project['details']['demo'], ComponentColors> = {
	Available: 'primary',
	Prototype: 'warning',
	Unavailable: 'error',
}
const codeColor: Record<Project['details']['code'], ComponentColors> = {
	Private: 'error',
	Public: 'accent',
}

const ProjectImage = ({ img, details }: Pick<Project, 'img' | 'details'>) => (
	<div className='group w-full sm:w-[55%] h-1/2 sm:h-full transition-all duration-300 ease-out relative overflow-hidden'>
		<img
			className='w-full h-full transition-transform duration-300 ease-out group-hover:scale-125'
			src={img}
			loading='lazy'
			alt='project-image'
			width='495'
			height='350'
		/>
		<div className='group-hover:translate-x-0 bg-gray-900 bg-opacity-95 transition-all duration-300 ease-out -translate-x-[100%] absolute leading-loose cursor-no-drop text-white h-full w-full left-0 top-0'>
			<ul className='h-full text-center centerAll'>
				<li>
					<strong>Status : </strong>
					<Badge color={statusColor[details.status]}>{details.status}</Badge>
				</li>
				<li>
					<strong>Live Demo : </strong>
					<Badge color={demoColor[details.demo]}>{details.demo}</Badge>
				</li>
				<li>
					<strong>Source Code : </strong>
					<Badge color={codeColor[details.code]}>{details.code}</Badge>
				</li>
				<li>
					<strong>Stack: </strong>
					<div className='flex gap-1'>
						{details.stack.map((stack, i) => (
							<Badge key={i} color={stack.badgeColor}>
								{stack.name}
							</Badge>
						))}
					</div>
				</li>
			</ul>
		</div>
	</div>
)

export default ProjectCard
