import { useState } from "react"
import { ParallaxProvider } from "react-scroll-parallax"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Timeline from "./components/Timeline"
import Hero from "./components/Hero"
import Intro from "./components/Intro"
import About from "./components/About"
import Skills from "./components/Skills"
import Tools from "./components/Tools"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
function App() {
	const [footerVisibility, setFooterVisibility] = useState(false)
	return (
		<ParallaxProvider>
			<div
				className={`bg-gray-100 dark:bg-gray-900 bg-[url("images/background.svg")]`}
			>
				<Navbar footerVisibility={footerVisibility} />
				<Hero />
				<Intro />
				<About />
				<Timeline />
				<Skills />
				<Tools />
				<Projects />
				<Contact />
				<Footer setFooterVisibility={setFooterVisibility} />
			</div>
		</ParallaxProvider>
	)
}

export default App
