import React from "react"

export default function Intro() {
	return (
		<>
			<div className="myContainer">
				<h1 className="text-center text-intro">
					Let me
					<span className="text-cyan-500"> intoduce </span>
					myself
				</h1>
				<div className="flex items-center text-medium">
					<p className="mr-28 text-lg">
						Hey thank you for passing by, my fullname is
						<span className="mx-1 text-cyan-500 font-semibold">
							Jeheskiel Ventioky Sunloy
						</span>
						but my friends call me Jay. I am a student majoring
						Informatics Engineering at
						<span className="mx-1 text-cyan-500 font-semibold">
							Satya Wacana Christian University
						</span>
						. I am currently 21 years old and i came from Ambon,
						Indonesia.
					</p>
					<img
						className="hidden sm:block w-[800px] ml-auto"
						src="src/images/myAvatar.png"
						alt="introImg"
					/>
				</div>
			</div>
		</>
	)
}
