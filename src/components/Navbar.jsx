import { useContext } from "react"
import { AppContext } from "../contexts/AppContext"
export default function Navbar() {
	const { footerVisibility } = useContext(AppContext)
	return (
		<nav
			style={{ backdropFilter: "blur(20px)" }}
			className={`${
				footerVisibility ? "top-5" : "bottom-5"
			} shadow-xl bg-white bg-opacity-10 backdrop-blur-3xl drop-shadow-lg sm:w-80 h-14 rounded-full fixed left-1/2 -translate-x-1/2 flex justify-center items-center z-30 transition-all duration-700`}
		>
			<MenuItem href="#home" active />
			<MenuItem href="#about" />
			<MenuItem href="#projects" />
			<MenuItem href="#resume" />
		</nav>
	)
	function MenuItem({ href, active }) {
		return (
			<div
				className={`${
					active
						? "bg-gray-900 bg-opacity-80"
						: "bg-gray-200 bg-opacity-20"
				} w-10 h-10 mx-1 rounded-full flex justify-center items-center`}
			>
				<a href={href}>
					{href === "#home" && (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className={`${
								active
									? "text-gray-200"
									: "text-gray-800 dark:text-gray-200"
							} h-6 w-6 `}
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
							/>
						</svg>
					)}
					{href === "#about" && (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className={`${
								active
									? "text-gray-200"
									: "text-gray-800 dark:text-gray-200"
							} h-6 w-6 `}
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
							/>
						</svg>
					)}
					{href === "#projects" && (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className={`${
								active
									? "text-gray-200"
									: "text-gray-800 dark:text-gray-200"
							} h-6 w-6 `}
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
							/>
						</svg>
					)}
					{href === "#resume" && (
						<h1
							className={`${
								active
									? "text-gray-200"
									: "text-gray-800 dark:text-gray-200"
							} font-bold `}
						>
							CV
						</h1>
					)}
				</a>
			</div>
		)
	}
}
