import React from "react"
import { useState } from "react"
import Typewriter from "typewriter-effect"
export default function Hero() {
	const [introTypewriter, setIntroTypewriter] = useState(true)
	return (
		<div id="home" className="myContainer flex h-screen">
			<div className="text-4xl leading-snug text-gray-900 dark:text-white font-bold flex items-center">
				{introTypewriter ? (
					<Typewriter
						options={{
							autoStart: true,
							delay: 40,
						}}
						onInit={typewriter => {
							typewriter
								.typeString(`const intro = () => {<br>`)
								.typeString(`let portfolio = {...myLive}<br>`)
								.typeString(`console.log(portfolio)<br>`)
								.typeString(`console.log("WELLCOME!")<br>`)
								.typeString(`} <br>`)
								.typeString(`intro()`)
								.pauseFor(1000)
								.callFunction(() => setIntroTypewriter(false))
								.start()
						}}
					/>
				) : (
					<div>
						<h1>
							Hello There! <br />
							Im
							<span className="ml-2 underline decoration-cyan-500 underline-offset-4">
								Jeheskiel Sunloy
							</span>
						</h1>
						<Typewriter
							options={{
								autoStart: true,
								loop: true,
							}}
							onInit={typewriter => {
								typewriter
									.typeString(
										`<span class="text-cyan-500">I am </span>`
									)
									.typeString("an IT Student.")
									.pauseFor(2000)
									.deleteChars(13)
									.typeString(" Web Developer.")
									.pauseFor(2000)
									.deleteChars(15)
									.typeString(" Simp for Nex")
									.deleteChars(13)
									.typeString(" Full Stack Developer.")
									.pauseFor(2000)
									.start()
							}}
						/>
					</div>
				)}
			</div>
			<img
				className="hidden sm:block w-1/2 h-fit my-auto ml-auto"
				src="src/images/heroImg.png"
				alt=""
			/>
		</div>
	)
}
