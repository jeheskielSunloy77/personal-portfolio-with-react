import { motion } from 'framer-motion'
import { lazy, ReactNode, Suspense, useContext } from 'react'
import { Hero, Navbar } from './components'
import SkillsSlideshow from './components/SkillsSlideshow'
import { AppContext } from './utils/AppContext'
// import background from "./assets/backgrounds/background.svg"
const About = lazy(() => import('./components/About'))
const Timeline = lazy(() => import('./components/Timeline'))
const Projects = lazy(() => import('./components/Projects'))
const Contributions = lazy(() => import('./components/Contributions'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

export default function App() {
	const { loading } = useContext(AppContext)

	// if (loading) return <Loader />

	return (
		<div className='bg-gradient-to-r from-gray-200 to-white dark:from-[#042c41] dark:to-black'>
			{/* <div style={{ backgroundImage: `url(${background})` }}> */}
			<Navbar />
			<div className='from-gray-300 to-white dark:from-[#042c41] dark:to-black bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))]'>
				<Hero />
			</div>
			<Suspense fallback={<span>Loading...</span>}>
				<About />
			</Suspense>
			<Suspense fallback={<span>Loading...</span>}>
				<AnimatedSection>
					<Timeline />
				</AnimatedSection>
			</Suspense>
			<Suspense fallback={<span>Loading...</span>}>
				<AnimatedSection>
					<SkillsSlideshow />
				</AnimatedSection>
			</Suspense>
			<Suspense fallback={<span>Loading...</span>}>
				<AnimatedSection>
					<Projects />
				</AnimatedSection>
			</Suspense>
			<Suspense fallback={<span>Loading...</span>}>
				<AnimatedSection>
					<Contributions />
				</AnimatedSection>
			</Suspense>
			<Suspense fallback={<span>Loading...</span>}>
				<AnimatedSection>
					<Contact />
				</AnimatedSection>
			</Suspense>
			<Suspense fallback={<span>Loading...</span>}>
				<Footer />
			</Suspense>
			{/* </div> */}
		</div>
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
