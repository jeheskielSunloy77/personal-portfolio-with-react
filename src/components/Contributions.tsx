import { motion } from 'framer-motion'
import { useContext } from 'react'
import GitHubCalendar from 'react-github-calendar'
import ReactTooltip from 'react-tooltip'
import { AppContext } from '../utils/AppContext'

const Contributions = () => {
	const { theme } = useContext(AppContext)
	const isDark = theme === 'dark'

	return (
		<div className='myContainer'>
			<h1 className='mb-10 flex gap-2 text-center text-intro sm:text-left'>
				<motion.div
					transition={{ duration: 1 }}
					initial={{ x: -50 }}
					whileInView={{ x: 0 }}
					viewport={{ once: true }}
					className='text-cyan-500'
				>
					Github
				</motion.div>
				Calendar
			</h1>
			<div className='text-light centerAll'>
				<div className='hidden sm:flex'>
					<GitHubCalendar
						username='jeheskielSunloy77'
						blockMargin={6}
						blockSize={18}
						theme={{
							level0: isDark ? '#113b4b' : '#ebedf0',
							level1: isDark ? '#0e7490' : '#7dd3fc',
							level2: isDark ? '#06b6d4' : '#38bdf8',
							level3: isDark ? '#67e8f9' : '#0ea5e9',
							level4: isDark ? '#cffafe' : '#0284c7',
						}}
					>
						<ReactTooltip html />
					</GitHubCalendar>
				</div>
				<div className='flex px-4 sm:hidden'>
					<GitHubCalendar
						username='jeheskielSunloy77'
						blockMargin={6}
						blockSize={20}
						theme={{
							level0: isDark ? '#113b4b' : '#ebedf0',
							level1: isDark ? '#0e7490' : '#7dd3fc',
							level2: isDark ? '#06b6d4' : '#38bdf8',
							level3: isDark ? '#67e8f9' : '#0ea5e9',
							level4: isDark ? '#cffafe' : '#0284c7',
						}}
					>
						<ReactTooltip html />
					</GitHubCalendar>
				</div>
			</div>
		</div>
	)
}

export default Contributions
