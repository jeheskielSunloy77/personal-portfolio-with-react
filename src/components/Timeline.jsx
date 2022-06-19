export default function Timeline() {
	return (
		<div className="myContainer">
			<h1 className="mb-10 text-intro">
				Educational <span className="text-cyan-500">Timeline</span>
			</h1>
			<ol class="items-center sm:flex">
				<TimeLine
					title="SMA 1, Ambon"
					date="Enroled on June 14, 2014"
					desc="Fugiat tempor cupidatat ut nisi. Ut cupidatat cupidatat velit
					amet eu mollit et velit est dolore magna aute. Enim"
				/>
				<TimeLine
					title="Satya Wacana Christian University"
					date="Enroled on August 1, 2017"
					desc="Fugiat tempor cupidatat ut nisi. Ut cupidatat cupidatat velit
					amet eu mollit et velit est dolore magna aute. Enim"
				/>
				<TimeLine
					title="KreasiX Internship"
					date="Started from May 5, 2022"
					desc="Fugiat tempor cupidatat ut nisi. Ut cupidatat cupidatat velit
					amet eu mollit et velit est dolore magna aute. Enim"
				/>
			</ol>
		</div>
	)
	function TimeLine({ title, date, desc }) {
		return (
			<li class="relative mb-6 sm:mb-0">
				<div class="flex items-center">
					<div class="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
						<svg
							class="w-3 h-3 text-blue-600 dark:text-blue-300"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
								clip-rule="evenodd"
							></path>
						</svg>
					</div>
					<div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
				</div>
				<div class="mt-3 sm:pr-8">
					<h1 class="text-lg font-semibold text-high">{title}</h1>
					<time class="block mb-2 text-sm font-normal leading-none text-lowest">
						{date}
					</time>
					<p class="text-base font-normal text-low">{desc}</p>
				</div>
			</li>
		)
	}
}
