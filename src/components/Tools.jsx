import "./Skills.scss"
import { Card, CardLogo } from "./SkillsnToolsCard"
export default function Tools() {
	return (
		<div className="myContainer">
			<h1 className="mb-10 text-intro">
				I Use This <span className="text-cyan-500">Tools</span>
			</h1>
			<div className="smallGrid items-center justify-center">
				<Card
					title="VS Code"
					subtitle="code edditor"
					desc="used daily"
					logo={<CardLogo src="src/images/vscode.svg" />}
				/>
				<Card
					title="Ubuntu"
					subtitle="operating system"
					desc="used daily"
					logo={<CardLogo src="src/images/ubuntu.svg" />}
				/>
				<Card
					title="ESlint"
					subtitle="code analyzer"
					desc="used daily"
					logo={<CardLogo src="src/images/eslint.svg" />}
				/>
				<Card
					title="Prettier"
					subtitle="code formater"
					desc="used daily"
					logo={<CardLogo src="src/images/prettier.svg" />}
				/>
				<Card
					title="Thunder Client"
					subtitle="REST tester"
					desc="used often"
					logo={<CardLogo src="src/images/thunderclient.svg" />}
				/>
				<Card
					title="Vercel"
					subtitle="Hosting Provider"
					desc="used often"
					logo={<CardLogo src="src/images/vercel.svg" />}
				/>
				<Card
					title="Canva"
					subtitle="media edditor"
					desc="rarely used"
					logo={<CardLogo src="src/images/canva.svg" />}
				/>
			</div>
		</div>
	)
}
