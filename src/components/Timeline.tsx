const Timeline = () => (
	<div className='myContainer'>
		<h1 className='mb-10 text-intro text-center sm:text-left'>
			Educational <span className='text-cyan-500'>Timeline</span>
		</h1>
		<ol className='items-center sm:flex'>
			<TimeLineList
				title='SMA 1, Ambon'
				date='Enroled on June 14, 2014'
				desc='I have a regular times at high school, im not the brightest person in the class but im not the slowest either.'
			/>
			<TimeLineList
				title='Satya Wacana Christian University'
				date='Enroled on August 1, 2017'
				desc='I am a student of the Faculty of Information and Technology, majoring Informatics Engineering with the latest GPA of 3.1'
			/>
			<TimeLineList
				title='KreasiX Internship'
				date='Started from May 5, 2022'
				desc='My first internship experience, one of the project i did during my internship was to build a backend for the company website using Node.js and Firebase'
			/>
		</ol>
	</div>
)
const TimeLineList = ({ title, date, desc }: TimeLineList) => (
	<li className='relative mb-6 sm:mb-0'>
		<div className='flex items-center'>
			<div className='flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-gray-200 dark:bg-blue-900 sm:ring-8 dark:ring-gray-800 shrink-0'>
				<svg
					className='w-3 h-3 text-blue-600 dark:text-blue-300'
					fill='currentColor'
					viewBox='0 0 20 20'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						fillRule='evenodd'
						d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
						clipRule='evenodd'
					></path>
				</svg>
			</div>
			<div className='hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700'></div>
		</div>
		<div className='mt-3 sm:pr-8'>
			<p className='text-md font-semibold text-high'>{title}</p>
			<time className='block mb-2 text-sm font-normal leading-none text-lowest'>
				{date}
			</time>
			<p className='text-base font-normal text-low'>{desc}</p>
		</div>
	</li>
)

interface TimeLineList {
	title: string
	date: string
	desc: string
}

export default Timeline
