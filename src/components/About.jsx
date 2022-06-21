import { useContext } from "react"
import { AppContext } from "../contexts/AppContext"
import { ParallaxBanner } from "react-scroll-parallax"
export default function About() {
	const { changeTheme } = useContext(AppContext)
	return (
		<>
			<ParallaxBanner
				className="aspect-[2/1] h-[500px]"
				layers={
					changeTheme === "dark"
						? [
								{
									image: "src/images/aboutBackground.jpg",
									speed: -30,
								},
						  ]
						: [
								{
									image: "src/images/moon.jpg",
									speed: -30,
								},
						  ]
				}
			>
				<div
					id="about"
					className="myContainer z-10 absolute inset-0 flex items-center justify-center"
				>
					<div className="sm:w-1/2 mx-auto">
						<h1 className="text-intro mb-4 text-center sm:text-left">
							<span className="text-cyan-500">Get to know</span> me a bit
						</h1>
						<p className="text-medium text-lg aspect-s">
							My
							<span className="mx-1 text-cyan-500 font-semibold">
								passion
							</span>
							is programing, i've been coding for a couple of years but i
							just seriously started to jump into the programing world
							about 6 month ago. my weapon of choice is
							<span className="mx-1 text-cyan-500 font-semibold">
								Javascript
							</span>
							and i am currently married to
							<span className="mx-1 text-cyan-500 font-semibold">
								ReactJS
							</span>
							. I also have work with other frameworks such as
							<span className="mx-1 text-cyan-500 font-semibold">
								Express & Next.js
							</span>
						</p>
					</div>
				</div>
			</ParallaxBanner>
		</>
	)
}
