import type { ReactNode } from 'react'
import type { ComponentColors } from 'src/utils/types'

interface BadgeProps {
	children: ReactNode
	color?: ComponentColors
	size?: 'medium' | 'large'
	className?: string
}

const badgeStyle = {
	colors: {
		primary: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300',
		secondary: 'bg-gray-100 text-gray-800 dark:bg-gray-950 dark:text-gray-300',
		accent:
			'bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-300',
		error: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
		warning:
			'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
		success: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
		info: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
	},
	sizes: {
		medium: 'text-xs',
		large: 'text-sm',
	},
}

export default function Badge({
	children,
	color = 'primary',
	size = 'medium',
	className,
}: BadgeProps) {
	return (
		<span
			className={`${className} ${badgeStyle.colors[color]} ${badgeStyle.sizes[size]} text-xs font-medium px-2.5 py-0.5 rounded`}
		>
			{children}
		</span>
	)
}
