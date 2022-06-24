import "./SpecialButton.css"
export default function SpecialButton({ text, href }) {
	return (
		<a href={href}>
			<button className="shadowBtn hover:before:top-12 hover:before:bg-black dark:hover:before:bg-white text-xl sm:text-3xl h-fit py-1 px-3 mt-2 border-2 border-solid dark:border-white border-black dark:text-white text-black hover:bg-black dark:hover:bg-white dark:hover:text-black hover:text-white transition-all duration-1000 ease-linear rounded-lg relative cursor-pointer">
				{text}
			</button>
		</a>
	)
}
