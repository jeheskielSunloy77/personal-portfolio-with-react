import { useState } from "react"
import { ParallaxProvider } from "react-scroll-parallax"
import useTheme from "./hooks/useTheme"
import { AppContext } from "./contexts/AppContext"
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
	const [footerVisibility, setFooterVisibility] = useState(false)
	const [changeTheme, setTheme] = useTheme()
	return (
		<AppContext.Provider
			value={{
				footerVisibility,
				setFooterVisibility,
				changeTheme,
				setTheme,
			}}
		>
			<ParallaxProvider>
				<div
					className={`bg-gray-100 dark:bg-gray-900 bg-[url("src/images/background.svg")]`}
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
				</div>
			</ParallaxProvider>
		</AppContext.Provider>
	)
}
