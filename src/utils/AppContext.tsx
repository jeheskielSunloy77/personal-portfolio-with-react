import { createContext, ReactNode, useEffect, useRef, useState } from 'react'
import useOnScreen from '../hooks/useOnScreen'
import useTheme from '../hooks/useTheme'
// import background from "../assets/backgrounds/background.svg"
export const AppContext = createContext<AppContext>([])

export function AppProvider({ children }: { children: ReactNode }) {
	const [blockVisibility, setBlockVisibility] = useState<string | string[] | []>(
		[]
	)
	const [loader, setLoader] = useState(true)
	const [changeTheme, setTheme] = useTheme()
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
		setBlockVisibility((prev) => {
			if (isHeroVisible) {
				return 'hero'
			} else if (isAboutVisible) {
				return 'about'
			} else if (isSkillsVisible) {
				return 'skills'
			} else if (isFooterVisible) {
				return [prev, 'footer']
			} else if (isProjectsVisible) {
				return 'projects'
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
				loader,
				setLoader,
			}}
		>
			<div
				className={`bg-gradient-to-r from-gray-200 to-white dark:from-[#042c41] dark:to-gray-900`}
			>
				{/* <div style={{ backgroundImage: `url(${background})` }}> */}
				{children}
				{/* </div> */}
			</div>
		</AppContext.Provider>
	)
}
