import { useStore } from '@nanostores/react'
import { motion } from 'framer-motion'
import { blockVisibility } from '../stores/appStores'
import type { Href } from '../utils/types'

const Navbar = () => {
	const $blockVisibility = useStore(blockVisibility)

	return (
		<motion.nav
			initial={{ bottom: '20px' }}
			animate={$blockVisibility.includes('footer') ? { top: '20px' } : undefined}
			className={`shadow-xl bg-opacity-5 backdrop-blur-3xl drop-shadow-lg dark:bg-opacity-5 dark:backdrop-blur-3xl dark:drop-shadow-lg sm:w-80 h-14 bg-black dark:bg-white rounded-full fixed left-1/2 -translate-x-1/2 flex justify-center items-center z-30 transition-all duration-700`}
		>
			<MenuItem href='#home' active={$blockVisibility[0] === 'hero'} />
			<MenuItem href='#about' active={$blockVisibility[0] === 'about'} />
			<MenuItem href='#skills' active={$blockVisibility[0] === 'skills'} />
			<MenuItem href='#projects' active={$blockVisibility[0] === 'projects'} />
		</motion.nav>
	)
}

const MenuItem = ({ href, active }: { href: Href; active: boolean }) => (
	<div
		className={`${
			active
				? 'bg-gray-900 bg-opacity-80 shadow-lg shadow-gray-600 dark:shadow-[#00000070] -translate-y-0.5'
				: 'bg-opacity-10 bg-gray-900 dark:bg-white dark:bg-opacity-5'
		} w-10 h-10 mx-1 rounded-full flex justify-center items-center transition-all duration-700`}
	>
		<a href={href}>
			{href === '#home' && <Home active={active} />}
			{href === '#about' && <About active={active} />}
			{href === '#projects' && <Projects active={active} />}
			{href === '#skills' && <Skills active={active} />}
		</a>
	</div>
)
const Home = ({ active }: { active: boolean }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className={`${
			active ? 'text-gray-200' : 'text-gray-800 dark:text-gray-200'
		} h-5 w-5 `}
		fill='none'
		viewBox='0 0 24 24'
		stroke='currentColor'
		strokeWidth={2}
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
		/>
	</svg>
)
const About = ({ active }: { active: boolean }) => (
	<svg
		className={`${
			active ? 'text-gray-200' : 'text-gray-800 dark:text-gray-200'
		} h-5 w-5 `}
		fill='currentColor'
		viewBox='0 0 24 24'
		stroke='currentColor'
		strokeWidth={1}
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			d='M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z'
		/>
	</svg>
)
const Projects = ({ active }: { active: boolean }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className={`${
			active ? 'text-gray-200' : 'text-gray-800 dark:text-gray-200'
		} h-5 w-5 `}
		fill='none'
		viewBox='0 0 24 24'
		stroke='currentColor'
		strokeWidth={2}
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'
		/>
	</svg>
)
const Skills = ({ active }: { active: boolean }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className={`${
			active ? 'text-gray-200' : 'text-gray-800 dark:text-gray-200'
		} h-5 w-5 `}
		fill='none'
		viewBox='0 0 24 24'
		stroke='currentColor'
		strokeWidth={2}
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
		/>
	</svg>
)

export default Navbar
