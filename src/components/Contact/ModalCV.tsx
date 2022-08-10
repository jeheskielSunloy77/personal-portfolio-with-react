import { useState } from 'react'
import { SetBoolean } from 'src/utils/types'

export default function ModalForm({ setModalCV }: { setModalCV: SetBoolean }) {
	const [isEnglish, setIsEnglish] = useState(true)

	return (
		<div className='fixed z-40 w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900 bg-opacity-60 centerAll'>
			<div className='relative p-4 w-full sm:max-w-7xl'>
				<div className='relative bg-gray-200 rounded-lg shadow dark:bg-gray-800'>
					<div className='flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600'>
						<h3 className='text-xl font-medium text-high'>View My Resume</h3>

						<IndonesianIcon setIsEnglish={setIsEnglish} isEnglish={isEnglish} />

						<EnglishIcon setIsEnglish={setIsEnglish} isEnglish={isEnglish} />

						<ButtonClose setModalCV={setModalCV} />
					</div>
					<iframe
						className='w-full h-[80vh]'
						src={
							isEnglish
								? 'https://drive.google.com/file/d/1vcc4JOOs2O_wKsfI82Jdt67xdyqtgDhC/preview'
								: 'https://drive.google.com/file/d/1rJMMV74ujvS8pQcRxIIb7-NmuTx3bjLI/preview'
						}
						allow='autoplay'
					></iframe>
				</div>
			</div>
		</div>
	)
}

const IndonesianIcon = ({ setIsEnglish, isEnglish }: LanguageIcon) => (
	<svg
		onClick={() => setIsEnglish(false)}
		className={`${
			isEnglish && 'grayscale'
		} w-10 ml-4 rounded hover:scale-110 hover:filter-none hover:shadow-xl transition-all duration-300`}
		xmlns='http://www.w3.org/2000/svg'
		id='flag-icons-id'
		viewBox='0 0 640 480'
	>
		<g fillRule='evenodd' strokeWidth='1pt'>
			<path fill='#e70011' d='M0 0h640v249H0z' />
			<path fill='#fff' d='M0 240h640v240H0z' />
		</g>
	</svg>
)

const EnglishIcon = ({ setIsEnglish, isEnglish }: LanguageIcon) => (
	<svg
		onClick={() => setIsEnglish(true)}
		className={`${
			!isEnglish && 'grayscale'
		} w-10 ml-4 rounded hover:scale-110 hover:filter-none hover:shadow-xl transition-all duration-300`}
		xmlns='http://www.w3.org/2000/svg'
		id='flag-icons-gb'
		viewBox='0 0 640 480'
	>
		<path fill='#012169' d='M0 0h640v480H0z' />
		<path
			fill='#FFF'
			d='m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z'
		/>
		<path
			fill='#C8102E'
			d='m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z'
		/>
		<path fill='#FFF' d='M241 0v480h160V0H241zM0 160v160h640V160H0z' />
		<path fill='#C8102E' d='M0 193v96h640v-96H0zM273 0v480h96V0h-96z' />
	</svg>
)

const ButtonClose = ({ setModalCV }: { setModalCV: SetBoolean }) => (
	<button
		onClick={() => setModalCV(false)}
		type='button'
		className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
	>
		<svg
			className='w-5 h-5'
			fill='currentColor'
			viewBox='0 0 20 20'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				fillRule='evenodd'
				d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
				clipRule='evenodd'
			></path>
		</svg>
	</button>
)
interface LanguageIcon {
	isEnglish: boolean
	setIsEnglish: SetBoolean
}
