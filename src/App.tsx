import { motion } from 'framer-motion'
import { lazy, ReactNode, Suspense, useContext } from 'react'
import { Hero, Loader, Navbar } from './components'
import SkillsSlideshow from './components/SkillsSlideshow'
import { AppContext } from './utils/AppContext'
const About = lazy(() => import('./components/About'))
const Timeline = lazy(() => import('./components/Timeline'))
const Projects = lazy(() => import('./components/Projects'))
const Contributions = lazy(() => import('./components/Contributions'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

export default function App() {
	const { loading } = useContext(AppContext)

	if (loading) return <Loader />

	return (
		<>
			<div className='bg-gradient-to-r from-gray-200 to-white dark:from-[#042638] dark:to-black'>
				<Hero />
				<Suspense fallback={<span>Loading...</span>}>
					<About />
					<AnimatedSection>
						<Timeline />
					</AnimatedSection>
					<AnimatedSection>
						<SkillsSlideshow />
					</AnimatedSection>
					<AnimatedSection>
						<Projects />
					</AnimatedSection>
					<AnimatedSection>
						<Contributions />
					</AnimatedSection>
					<AnimatedSection>
						<Contact />
					</AnimatedSection>
					<Footer />
				</Suspense>
			</div>
			<Navbar />
		</>
	)
}

const AnimatedSection = ({ children }: { children: ReactNode }) => (
	<motion.div
		initial={{ y: 50, opacity: 0 }}
		transition={{ duration: 1, type: 'spring' }}
		whileInView={{ y: 0, opacity: 1 }}
		viewport={{ once: true }}
	>
		{children}
	</motion.div>
)
