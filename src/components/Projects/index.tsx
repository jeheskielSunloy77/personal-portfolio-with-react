import useSetOnScreen from '../../hooks/useSetOnScreen'
import ProjectSlider from './ProjectSlider'

const Projects = () => {
	const ref = useSetOnScreen('projects')

	return (
		<div ref={ref} id='projects' className='myContainer'>
			<h1 className='mb-10 text-intro text-center sm:text-left'>
				My Latest <span className='text-cyan-500'>Projects</span>
			</h1>
			<div className='flex items-center justify-center'>
				<ProjectSlider />
			</div>
		</div>
	)
}

export default Projects
