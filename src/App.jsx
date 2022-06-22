import { useState, useEffect, useRef } from "react"
import useTheme from "./hooks/useTheme"
import { AppContext } from "./contexts/AppContext"
import useOnScreen from "./hooks/useOnScreen"
import {
	Navbar,
	About,
	Footer,
	Timeline,
	Hero,
	Intro,
	Skills,
	Tools,
	Projects,
	Contact,
} from "./components"
export default function App() {
	const [blockVisibility, setBlockVisibility] = useState([])
	const heroRef = useRef()
	const aboutRef = useRef()
	const skillsRef = useRef()
	const projectsRef = useRef()
	const footerRef = useRef()
	const isHeroVisible = useOnScreen(heroRef)
	const isAboutVisible = useOnScreen(aboutRef)
	const isSkillsVisible = useOnScreen(skillsRef)
	const isProjectsVisible = useOnScreen(projectsRef)
	const isFooterVisible = useOnScreen(footerRef)
	useEffect(() => {
		setBlockVisibility(prev => {
			if (isHeroVisible) {
				return "hero"
			} else if (isAboutVisible) {
				return "about"
			} else if (isSkillsVisible) {
				return "skills"
			} else if (isFooterVisible) {
				return [prev, "footer"]
			} else if (isProjectsVisible) {
				return "projects"
			} else {
				return []
			}
		})
	}, [
		isHeroVisible,
		isAboutVisible,
		isSkillsVisible,
		isProjectsVisible,
		isFooterVisible,
	])
	const [changeTheme, setTheme] = useTheme()
	return (
		<AppContext.Provider
			value={{
				heroRef,
				aboutRef,
				skillsRef,
				projectsRef,
				footerRef,
				blockVisibility,
				changeTheme,
				setTheme,
			}}
		>
			<Navbar />
			<Hero />
			<Intro />
			<About />
			<Timeline />
			<Skills />
			<Tools />
			<Projects />
			<Contact />
			<Footer />
		</AppContext.Provider>
	)
}
