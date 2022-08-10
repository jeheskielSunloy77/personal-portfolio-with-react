import { Href } from 'src/utils/types'

const ButtonSpecial = ({ text, href }: ButtonSpecial) => (
	<a href={href}>
		<button className='shadowBtn hover:before:top-12 hover:before:bg-black dark:hover:before:bg-white text-xl sm:text-3xl h-fit py-1 px-3 mt-2 border-2 border-solid dark:border-white border-black dark:text-white text-black hover:bg-black dark:hover:bg-white dark:hover:text-black hover:text-white transition-all duration-1000 ease-linear rounded-lg relative cursor-pointer'>
			{text}
		</button>
		<style>{`.shadowBtn::before {
	content: "";
	position: absolute;
	left: 0;
	top: 50px;
	background: transparent;
	height: 50%;
	width: 100%;
	transform: perspective(1em) rotateX(40deg) scale(1, 0.35);
	filter: blur(8px);
	transition: 1s ease;
}`}</style>
	</a>
)

interface ButtonSpecial {
	text: string
	href: Href
}

export default ButtonSpecial
