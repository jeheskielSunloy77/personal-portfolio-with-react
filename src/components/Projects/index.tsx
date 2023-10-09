import { motion } from 'framer-motion'
import useSetOnScreen from '../../hooks/useSetOnScreen'
import AnimatedSection from '../AnimatedSection'
import ProjectSlider from './ProjectSlider'

const Projects = () => {
	const ref = useSetOnScreen('projects')

	return (
		<AnimatedSection>
			<div ref={ref} id='projects' className='container px-6 mx-auto py-14'>
				<h1 className='mb-10 text-center text-2xl font-semibold text-gray-900 dark:text-gray-100 sm:text-4xl sm:text-left flex gap-2'>
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
				<div className='flex items-center justify-center p-20'>
					<ProjectSlider />
				</div>
			</div>
		</AnimatedSection>
	)
}

export default Projects
