import { useState } from "react"
import { ParallaxProvider } from "react-scroll-parallax"
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
	return (
		<ParallaxProvider>
			<div className={`bg-gray-100 dark:bg-gray-900`}>
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
