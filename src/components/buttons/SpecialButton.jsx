import "./SpecialButton.css"
export default function SpecialButton({ text, href }) {
	return (
		<a href={href}>
			<button className="shadowBtn text-lg h-fit py-1 px-3 border-2 border-solid dark:border-white border-black dark:text-white text-black hover:bg-black dark:hover:bg-white dark:hover:text-black hover:text-white transition-all duration-1000 ease-linear rounded-lg relative cursor-pointer">
				{text}
			</button>
		</a>
	)
}
