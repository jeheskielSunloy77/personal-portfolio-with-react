import React from "react"

export default function Intro() {
	return (
		<>
			<h1 className="myContaier text-center text-intro">
				Let me
				<span className="text-cyan-500"> intoduce </span>
				myself
			</h1>
			<div className="myContainer flex items-center text-medium">
				<p className="mr-28 text-lg">
					Hey thank you for passing by, my fullname is
					<span className="mx-1 text-cyan-500 font-semibold">
						Jeheskiel Ventioky Sunloy
					</span>
					but my friends call me Jay. I am a student majoring Informatics
					Engineering at
					<span className="mx-1 text-cyan-500 font-semibold">
						Satya Wacana Christian University
					</span>
					. I am currently 21 years old and i came from Ambon, Indonesia.
				</p>
				<img
					className="hidden sm:block w-[800px] ml-auto rounded-lg shadow-2xl"
					src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt="introImg"
				/>
			</div>
		</>
	)
}
