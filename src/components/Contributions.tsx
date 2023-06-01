import { motion } from 'framer-motion'
import type { ComponentProps } from 'react'
import GitHubCalendar from 'react-github-calendar'
import ReactTooltip from 'react-tooltip'
import useTheme from 'src/hooks/useTheme'
import AnimatedSection from './AnimatedSection'

type TransformData = ComponentProps<typeof GitHubCalendar>['transformData']

const Contributions = () => {
	const { theme } = useTheme()
	const isDark = theme === 'dark'

	const selectLastHalfYear: TransformData = (contributions) => {
		const currentYear = new Date().getFullYear()
		const currentMonth = new Date().getMonth()
		const shownMonths = 6

		return contributions.filter((activity) => {
			const date = new Date(activity.date)
			const monthOfDay = date.getMonth()

			return (
				date.getFullYear() === currentYear &&
				monthOfDay > currentMonth - shownMonths &&
				monthOfDay <= currentMonth
			)
		})
	}

	return (
		<AnimatedSection>
			<div className='container px-6 mx-auto py-14'>
				<h1 className='mb-10 flex gap-2 text-center text-2xl font-semibold text-gray-900 dark:text-gray-100 sm:text-4xl sm:text-left'>
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
				<div className='text-gray-500 dark:text-gray-400 flex flex-col items-center justify-center'>
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
							blockSize={18}
							transformData={selectLastHalfYear}
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
		</AnimatedSection>
	)
}

export default Contributions
