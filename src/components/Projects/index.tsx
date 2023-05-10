import { motion } from 'framer-motion'
import useSetOnScreen from '../../hooks/useSetOnScreen'
import ProjectSlider from './ProjectSlider'

const Projects = () => {
	const ref = useSetOnScreen('projects')

	return (
		<div ref={ref} id='projects' className='myContainer'>
			<h1 className='mb-10 text-center text-intro sm:text-left flex gap-2'>
				My Latest
				<motion.div
					initial={{ x: 50 }}
					whileInView={{ x: 0 }}
					transition={{ duration: 1 }}
					viewport={{ once: true }}
					className='text-cyan-500'
				>
					Projects
				</motion.div>
			</h1>
			<div className='flex items-center justify-center'>
				<ProjectSlider />
			</div>
		</div>
	)
}

export default Projects
