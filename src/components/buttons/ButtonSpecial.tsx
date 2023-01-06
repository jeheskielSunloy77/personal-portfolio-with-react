import { Href } from 'src/utils/types'

const ButtonSpecial = ({ text, href }: ButtonSpecial) => (
	<a href={href}>
		<button className='relative px-3 py-1 mt-2 text-2xl font-bold leading-snug text-black transition-all duration-1000 ease-linear border-2 border-black border-solid rounded-md cursor-pointer shadowBtn hover:before:top-12 font-staatliches dark:text-white hover:before:bg-black dark:hover:before:bg-white h-fit dark:border-white hover:bg-black dark:hover:bg-white dark:hover:text-black hover:text-white'>
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
