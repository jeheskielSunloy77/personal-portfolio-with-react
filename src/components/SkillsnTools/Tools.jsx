import { useContext } from "react"
import { AppContext } from "../../contexts/AppContext"
import { Card, CardLogo } from "./Card"
import vscodeImg from "../../assets/icons/vscode.svg"
import ubuntuImg from "../../assets/icons/ubuntu.svg"
import eslintImg from "../../assets/icons/eslint.svg"
import auth0Img from "../../assets/icons/auth0.svg"
import thunderclientImg from "../../assets/icons/thunderclient.svg"
import gimpImg from "../../assets/icons/gimp.svg"
import canvaImg from "../../assets/icons/canva.svg"
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
					desc="playground"
					logo={<CardLogo src={vscodeImg} />}
				/>
				<Card
					title="Ubuntu"
					subtitle="operating system"
					desc="work, work, work"
					logo={<CardLogo src={ubuntuImg} />}
				/>
				<Card
					title="ESlint"
					subtitle="code analyzer"
					desc="annoying little thing"
					logo={<CardLogo src={eslintImg} />}
				/>
				<Card
					title="Auth0"
					subtitle="authentication platform"
					desc="guardian angel"
					logo={<CardLogo src={auth0Img} />}
				/>
				<Card
					title="Thunder Client"
					subtitle="REST tester"
					desc="restless api"
					logo={<CardLogo src={thunderclientImg} />}
				/>
				<Card
					title="Vercel"
					subtitle="Hosting Provider"
					desc="easy like 123"
					logo={<CardLogo svg={vercelLogo} />}
				/>
				<Card
					title="Gimp"
					subtitle="media edditor"
					desc="mr.underated"
					logo={<CardLogo src={gimpImg} />}
				/>
				<Card
					title="Canva"
					subtitle="media edditor"
					desc="template, copy, paste"
					logo={<CardLogo src={canvaImg} />}
				/>
			</div>
		</div>
	)
}
