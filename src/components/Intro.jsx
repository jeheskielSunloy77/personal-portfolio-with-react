import { useContext } from "react"
import { AppContext } from "../contexts/AppContext"
import myAvatar from "../assets/images/myAvatar.png"
export default function Intro() {
	const { aboutRef } = useContext(AppContext)
	return (
		<>
			<div ref={aboutRef} id="about" className="myContainer mt-1">
				<h1 className="text-center text-intro mb-4">
					Let me
					<span className="text-cyan-500"> intoduce </span>
					myself
				</h1>
				<div className="flex items-center text-medium">
					<p className="sm:mr-28 text-lg text-center sm:text-left">
						Hey thank you for passing by, my fullname is
						<span className="mx-1 text-cyan-500 font-semibold">
							Jeheskiel Ventioky Sunloy
						</span>
						but my friends call me Jay. I am a student majoring
						Informatics Engineering at
						<span className="mx-1 text-cyan-500 font-semibold">
							Satya Wacana Christian University
						</span>
						. I am currently 21 years old and im hailing from Ambon,
						Indonesia
					</p>
					<img
						className="hidden sm:block w-[800px] ml-auto"
						src={myAvatar}
						alt="introImg"
					/>
				</div>
			</div>
		</>
	)
}
