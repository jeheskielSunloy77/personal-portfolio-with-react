import { useState } from 'react'
import { SetBoolean } from 'src/utils/types'
import Modal, { ModalProps } from '../Modal'

type ModalCvProps = Pick<ModalProps, 'toggleModal' | 'isClosing'>

export default function ModalCv({ toggleModal, isClosing }: ModalCvProps) {
	const [isEnglish, setIsEnglish] = useState(true)

	return (
		<Modal
			className='sm:w-[60vw]'
			isClosing={isClosing}
			toggleModal={toggleModal}
			title={
				<>
					<h3 className='text-xl font-medium text-high'>View My Resume</h3>
					<IndonesianIcon setIsEnglish={setIsEnglish} isEnglish={isEnglish} />
					<EnglishIcon setIsEnglish={setIsEnglish} isEnglish={isEnglish} />
				</>
			}
		>
			<iframe
				className='w-full h-[80vh]'
				src={
					isEnglish
						? 'https://drive.google.com/file/d/1vcc4JOOs2O_wKsfI82Jdt67xdyqtgDhC/preview'
						: 'https://drive.google.com/file/d/1rJMMV74ujvS8pQcRxIIb7-NmuTx3bjLI/preview'
				}
				allow='autoplay'
			></iframe>
		</Modal>
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

interface LanguageIcon {
	isEnglish: boolean
	setIsEnglish: SetBoolean
}
