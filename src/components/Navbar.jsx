export default function Navbar() {
	return (
		<nav className="shadow-2xl bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg sm:w-80 h-14 rounded-full fixed bottom-5 left-1/2 -translate-x-1/2 flex justify-center items-center">
			<MenuItem href="/" active />
			<MenuItem href="/about" />
			<MenuItem href="/projects" />
			<MenuItem href="/resume" />
		</nav>
	)
	function MenuItem({ href, active }) {
		return (
			<div
				className={`${
					active ? "bg-gray-900" : "bg-gray-500"
				} w-10 h-10 mx-1 rounded-full bg-opacity-60 backdrop-blur-lg drop-shadow-lg flex justify-center items-center`}
			>
				<a href={href}>
					{href === "/" && (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6 text-gray-200"
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
					{href === "/about" && (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6 text-gray-200"
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
					{href === "/projects" && (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6 text-gray-200"
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
					{href === "/resume" && (
						<h1 className="text-gray-200 font-bold">CV</h1>
					)}
				</a>
			</div>
		)
	}
}
