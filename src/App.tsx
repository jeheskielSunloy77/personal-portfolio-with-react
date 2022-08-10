import { useContext } from 'react'
import {
	About,
	Contact,
	Contributions,
	Footer,
	Hero,
	Intro,
	Loader,
	Navbar,
	Projects,
	SkillsnTools,
	Timeline,
} from './components'
import { AppContext } from './utils/AppContext'

export default function App() {
	const { loader } = useContext(AppContext)

	return (
		<>
			{loader && <Loader />}
			<Navbar />
			<Hero />
			<Intro />
			<About />
			<Timeline />
			<SkillsnTools />
			<Projects />
			<Contributions />
			<Contact />
			<Footer />
		</>
	)
}
