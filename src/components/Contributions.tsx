import { CalendarData } from 'react-activity-calendar'
import GitHubCalendar from 'react-github-calendar'
import ReactTooltip from 'react-tooltip'

const Contributions = () => {
	const selectLastHalfYear = (contributions: CalendarData) => {
		const currentYear = new Date().getFullYear()
		const currentMonth = new Date().getMonth()
		const shownMonths = 6

		return contributions.filter((day) => {
			const date = new Date(day.date)
			const monthOfDay = date.getMonth()

			return (
				date.getFullYear() === currentYear &&
				monthOfDay > currentMonth - shownMonths &&
				monthOfDay <= currentMonth
			)
		})
	}

	return (
		<div className='myContainer'>
			<h1 className='mb-10 text-intro text-center sm:text-left'>
				Github <span className='text-cyan-500'>Calender</span>
			</h1>
			<div className='centerAll text-white'>
				<div className='hidden sm:flex'>
					<GitHubCalendar
						username='jeheskielSunloy77'
						blockMargin={6}
						blockSize={18}
						theme={{
							level0: '#113b4b',
							level1: '#0e7490',
							level2: '#06b6d4',
							level3: '#67e8f9',
							level4: '#cffafe',
						}}
					>
						<ReactTooltip html />
					</GitHubCalendar>
				</div>
				<div className='flex sm:hidden px-4'>
					<GitHubCalendar
						username='jeheskielSunloy77'
						transformData={selectLastHalfYear}
						blockMargin={6}
						blockSize={20}
						theme={{
							level0: '#113b4b',
							level1: '#0e7490',
							level2: '#06b6d4',
							level3: '#67e8f9',
							level4: '#cffafe',
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
