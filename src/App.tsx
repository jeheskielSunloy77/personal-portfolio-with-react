import { lazy, Suspense, useContext } from 'react'
import { Hero, Loader, Navbar } from './components'
import { AppContext } from './utils/AppContext'
// import background from "../assets/backgrounds/background.svg"
// const Intro = lazy(() => import('./components/Intro'))
const About = lazy(() => import('./components/About'))
const Timeline = lazy(() => import('./components/Timeline'))
const SkillsnTools = lazy(() => import('./components/SkillsnTools'))
const Projects = lazy(() => import('./components/Projects'))
const Contributions = lazy(() => import('./components/Contributions'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

export default function App() {
	const { loading } = useContext(AppContext)

	if (loading) return <Loader />

	return (
		<div className='bg-gradient-to-r from-gray-200 to-white dark:from-[#042c41] dark:to-black'>
			{/* <div style={{ backgroundImage: `url(${background})` }}> */}
			<Navbar />

			<div className='from-gray-300 to-white dark:from-[#042c41] dark:to-black bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))]'>
				<Hero />
			</div>
			{/* <Suspense fallback={<span>Loading...</span>}>
				<Intro />
			</Suspense> */}
			<Suspense fallback={<span>Loading...</span>}>
				<About />
			</Suspense>
			<Suspense fallback={<span>Loading...</span>}>
				<Timeline />
			</Suspense>
			<Suspense fallback={<span>Loading...</span>}>
				<SkillsnTools />
			</Suspense>
			<Suspense fallback={<span>Loading...</span>}>
				<Projects />
			</Suspense>
			<Suspense fallback={<span>Loading...</span>}>
				<Contributions />
			</Suspense>
			<Suspense fallback={<span>Loading...</span>}>
				<Contact />
			</Suspense>
			<Suspense fallback={<span>Loading...</span>}>
				<Footer />
			</Suspense>
			{/* </div> */}
		</div>
	)
}
