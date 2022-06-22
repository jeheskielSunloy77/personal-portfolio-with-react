import { useContext } from "react"
import { AppContext } from "../contexts/AppContext"
import { Card, CardLogo } from "./SkillsnToolsCard"
export default function Tools() {
	const { changeTheme } = useContext(AppContext)
	const vercelLogo = (
		<svg
			className="group-hover:w-[40px] z-10 transition-all duration-500 w-full rounded-lg"
			xmlns="http://www.w3.org/2000/svg"
			width="200"
			height="200"
			viewBox="0 0 512 512"
		>
			<path
				fillRule="evenodd"
				d="M256,48,496,464H16Z"
				fill={changeTheme === "dark" ? "#141414" : "#f5f5f5"}
			/>
		</svg>
	)
	return (
		<div className="myContainer">
			<h1 className="mb-10 text-intro text-center sm:text-left">
				I Use This <span className="text-cyan-500">Tools</span>
			</h1>
			<div className="smallGrid items-center justify-center">
				<Card
					title="VS Code"
					subtitle="code edditor"
					desc="used daily"
					logo={<CardLogo src="src/images/svg/vscode.svg" />}
				/>
				<Card
					title="Ubuntu"
					subtitle="operating system"
					desc="used daily"
					logo={<CardLogo src="src/images/svg/ubuntu.svg" />}
				/>
				<Card
					title="ESlint"
					subtitle="code analyzer"
					desc="used daily"
					logo={<CardLogo src="src/images/svg/eslint.svg" />}
				/>
				<Card
					title="Prettier"
					subtitle="code formater"
					desc="used daily"
					logo={<CardLogo src="src/images/svg/prettier.svg" />}
				/>
				<Card
					title="Thunder Client"
					subtitle="REST tester"
					desc="used often"
					logo={<CardLogo src="src/images/svg/thunderclient.svg" />}
				/>
				<Card
					title="Vercel"
					subtitle="Hosting Provider"
					desc="used often"
					logo={<CardLogo svg={vercelLogo} />}
				/>
				<Card
					title="Canva"
					subtitle="media edditor"
					desc="rarely used"
					logo={<CardLogo src="src/images/svg/canva.svg" />}
				/>
			</div>
		</div>
	)
}
