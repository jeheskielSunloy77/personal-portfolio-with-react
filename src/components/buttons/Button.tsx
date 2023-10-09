import type { MouseEventHandler, ReactNode } from 'react'

const Button = ({
	children,
	onClick,
	color = 'primary',
	className = '',
}: ButtonProps) => (
	<button
		onClick={onClick}
		type='button'
		className={`${className} ${style.color[color]} font-semibold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2`}
	>
		{children}
	</button>
)
interface ButtonProps {
	children: ReactNode
	className?: string
	onClick?: MouseEventHandler<HTMLButtonElement>
	color?: keyof typeof style.color
}

export default Button

const style = {
	color: {
		primary:
			'text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 focus:outline-none dark:focus:ring-cyan-800',
		danger:
			'text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800',
		secondary:
			'text-gray-800 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700',
	},
}
