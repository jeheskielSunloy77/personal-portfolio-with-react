import "./Skills.scss"
import { Card, CardLogo } from "./SkillsnToolsCard"
export default function Skills() {
	return (
		<div className="myContainer">
			<h1 className="mb-10 text-intro text-center sm:text-left">
				<span className="text-cyan-500">Skills</span> I Acquired
			</h1>
			<div className="smallGrid items-center justify-center">
				<Card
					title="Javascript"
					subtitle="programing language"
					desc="bread and butter"
					logo={
						<CardLogo
							src="src/images/javascript.svg"
							backgroud="bg-[#f7df1e]"
						/>
					}
				/>
				<Card
					title="React.js"
					subtitle="JS library"
					desc="first love"
					logo={<CardLogo src="src/images/react.svg" />}
				/>

				<Card
					title="Next.js"
					subtitle="fullstack framework"
					desc="all you need"
					logo={<CardLogo src="src/images/nextjs.svg" />}
				/>
				<Card
					title="Mongodb"
					subtitle="database"
					desc="love and hate"
					logo={<CardLogo src="src/images/mongodb.svg" />}
				/>
				<Card
					title="Github"
					subtitle="version control"
					desc="pull, push, commit"
					logo={<CardLogo src="src/images/github.svg" />}
				/>
				<Card
					title="Node.js"
					subtitle="JS runtime"
					desc="JS backbone"
					logo={<CardLogo src="src/images/nodejs.svg" />}
				/>
				<Card
					title="Tailwind"
					subtitle="css framework"
					desc="my secret affair"
					logo={<CardLogo src="src/images/tailwind.svg" />}
				/>
				<Card
					title="Sass"
					subtitle="css preprocessor"
					desc="sexy.css"
					logo={<CardLogo src="src/images/sass.svg" />}
				/>
			</div>
		</div>
	)
}
