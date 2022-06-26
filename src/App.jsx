import { useContext } from "react"
import { AppContext } from "./contexts/AppContext"
import {
	Loader,
	Navbar,
	About,
	Footer,
	Timeline,
	Hero,
	Intro,
	SkillsnTools,
	Projects,
	Contact,
} from "./components"
export default function App() {
	const { loader } = useContext(AppContext)
	return (
		<>
			<div className={!loader && "hidden"}>
				<Loader />
			</div>
			<div className={loader && "hidden"}>
				<Navbar />
				<Hero />
				<Intro />
				<About />
				<Timeline />
				<SkillsnTools />
				<Projects />
				<Contact />
				<Footer />
			</div>
		</>
	)
}
