import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
const Timeline = () => (
	<AnimatedSection>
		<div className='container px-6 mx-auto py-14'>
			<h1 className='mb-10 text-center text-2xl font-semibold text-gray-900 dark:text-gray-100 sm:text-4xl sm:text-left flex gap-2'>
				Educational
				<motion.div
					initial={{ x: 50 }}
					whileInView={{ x: 0 }}
					viewport={{ once: true }}
					className='text-cyan-500'
					transition={{ duration: 1 }}
				>
					Timeline
				</motion.div>
			</h1>
			<ol className='items-center sm:flex justify-center'>
				<TimeLineList
					title='SMA 1, Ambon'
					date='2014 - 2017'
					desc='I have a regular times at high school, im not the brightest person in the class but im not the slowest either.'
				/>
				<TimeLineList
					title='Satya Wacana Christian University'
					date='Enroled on August 1, 2017'
					desc='I am a student of the Faculty of Information and Technology, majoring Informatics Engineering with the latest GPA of 3.3'
				/>
				<TimeLineList
					title='KreasiX Internship'
					date='May 5 - July 21, 2022'
					desc='My first internship experience, one of the project i did during my internship was to build a backend for the company website using Node.js and Firebase'
				/>
				<TimeLineList
					title='Refactory Bootcamp'
					date='August 8 - September 18, 2022'
					desc='A 7-week intensive bootcamp to implement my skills of web development using ReactJS and Go, i got an opportunity to work with a real work project and mentored by a great senior engineer.'
				/>
			</ol>
		</div>
	</AnimatedSection>
)
const TimeLineList = ({ title, date, desc }: TimeLineList) => (
	<li className='relative mb-6 sm:mb-0 h-36'>
		<div className='flex items-center'>
			<div className='z-10 flex items-center justify-center w-6 h-6 rounded-full bg-cyan-200 ring-0 ring-gray-200 dark:bg-cyan-900 sm:ring-8 dark:ring-gray-800 shrink-0'>
				<svg
					className='w-3 h-3 text-cyan-600 dark:text-cyan-300'
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
			<p className='font-semibold text-md text-gray-900 dark:text-gray-100'>
				{title}
			</p>
			<time className='block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
				{date}
			</time>
			<p className='text-base font-normal text-gray-500 dark:text-gray-400'>
				{desc}
			</p>
		</div>
	</li>
)

interface TimeLineList {
	title: string
	date: string
	desc: string
}

export default Timeline
