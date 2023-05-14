import { useState } from 'react'
import { Project } from '../../utils/types'
import Badge from '../Badge'
import Modal from '../Modal'
import Button from '../buttons/Button'

export default function ProjectDetailModal({
	isClosing,
	toggleModal,
	projects,
	projectIndex: initialProjectIndex,
}: {
	isClosing: boolean
	toggleModal: () => void
	projects: Project[]
	projectIndex: number
}) {
	const [projectIndex, setProjectIndex] = useState(initialProjectIndex)
	const project = projects[projectIndex]
	const isOpenSource = project.links.code ? true : false
	const isLiveDemo = project.links.demo ? true : false

	const navigateProject = (direction: 'prev' | 'next') => {
		setProjectIndex((prev) => {
			if (direction === 'prev') {
				if (prev === 0) return projects.length - 1

				return prev - 1
			} else {
				if (prev === projects.length - 1) return 0

				return prev + 1
			}
		})
	}

	return (
		<Modal
			className='sm:w-[90vw]'
			isClosing={isClosing}
			toggleModal={toggleModal}
			title={
				<ModalHeader title={project.title} navigateProject={navigateProject} />
			}
		>
			<div className='flex flex-col-reverse xl:grid xl:grid-cols-2 place-items-center max-h-[70vh] overflow-y-auto'>
				<div className='px-4 py-2 space-y-4'>
					<p>{project.desc.description}</p>
					<ul className='list-disc pl-6 text-medium'>
						{project.desc.list?.map((listItem, i) => (
							<li key={i}>{listItem}</li>
						))}
					</ul>
					<p>{project.desc.aditional}</p>
					<div className='flex gap-2'>
						{project.details.stack.map((stack, i) => (
							<Badge key={i} color={stack.badgeColor} size='large'>
								{stack.name}
							</Badge>
						))}
					</div>
				</div>
				<video
					src={project.video.src}
					autoPlay
					loop
					width={project.video.isPortrait ? '40%' : undefined}
					height={project.video.isPortrait ? undefined : '50%'}
				></video>
			</div>
			<div className='flex items-center p-6 space-x-2 rounded-b'>
				<a href={project.links.code} target='_blank' rel='noreferrer'>
					<Button
						color={isOpenSource ? 'primary' : 'danger'}
						className={`${
							isOpenSource ? '' : 'cursor-not-allowed'
						} flex items-center gap-2`}
					>
						{isOpenSource ? 'Source Code' : 'Private Repository'}
						<svg
							className='w-5 h-5 fill-current'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path d='M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z'></path>
						</svg>
					</Button>
				</a>
				<a href={project.links.demo} target='_blank' rel='noreferrer'>
					<Button
						color='secondary'
						className={isLiveDemo ? '' : 'cursor-not-allowed'}
					>
						{isLiveDemo ? 'Live Demo' : 'Demo Unavailable'}
					</Button>
				</a>
			</div>
		</Modal>
	)
}

const ModalHeader = ({
	title,
	navigateProject,
}: {
	title: string
	navigateProject: (direction: 'next' | 'prev') => void
}) => (
	<>
		<h3 className='text-xl font-bold text-high mr-4'>{title}</h3>
		<nav
			className='inline-flex items-center -space-x-px cursor-pointer'
			aria-label='Page navigation example'
		>
			<div
				className='block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
				onClick={() => navigateProject('prev')}
			>
				<svg
					aria-hidden='true'
					className='w-5 h-5'
					fill='currentColor'
					viewBox='0 0 20 20'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						fillRule='evenodd'
						d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
						clipRule='evenodd'
					></path>
				</svg>
			</div>
			<div
				className='block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
				onClick={() => navigateProject('next')}
			>
				<svg
					aria-hidden='true'
					className='w-5 h-5'
					fill='currentColor'
					viewBox='0 0 20 20'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						fillRule='evenodd'
						d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
						clipRule='evenodd'
					></path>
				</svg>
			</div>
		</nav>
	</>
)
