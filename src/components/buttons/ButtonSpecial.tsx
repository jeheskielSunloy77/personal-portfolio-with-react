import type { ReactNode } from 'react'

export default function ButtonSpecial(props: { children: ReactNode }) {
	return (
		<button className='relative px-3 py-1 mt-2 text-2xl font-bold leading-snug text-black transition-all duration-1000 ease-linear border-2 border-black border-solid rounded-md cursor-pointer shadowBtn hover:before:top-12 font-staatliches dark:text-white hover:before:bg-black dark:hover:before:bg-white h-fit dark:border-white hover:bg-black dark:hover:bg-white dark:hover:text-black hover:text-white'>
			{props.children}
		</button>
	)
}
