import { useContext } from 'react'
import myAvatar from '../assets/images/myAvatar.webp'
import { AppContext } from '../utils/AppContext'

const Intro = () => {
	const { aboutRef } = useContext(AppContext)

	return (
		<>
			<div ref={aboutRef} id='about' className='myContainer mt-1'>
				<h1 className='text-center text-intro'>
					Let me
					<span className='text-cyan-500'> intoduce </span>
					myself
				</h1>
				<div className='flex flex-col-reverse sm:flex-row items-center text-medium'>
					<p className='sm:mr-28 text-lg text-center sm:text-left'>
						Hey thank you for passing by, my fullname is
						<span className='mx-1 text-cyan-500 font-semibold'>
							Jeheskiel Ventioky Sunloy
						</span>
						but my friends call me Jay. I am a student majoring Informatics
						Engineering at
						<span className='mx-1 text-cyan-500 font-semibold'>
							Satya Wacana Christian University
						</span>
						. I am currently 21 years old and im hailing from Ambon, Indonesia
					</p>
					<img
						className=' sm:block sm:w-[800px] mx-auto sm:ml-auto my-4 sm:my-0'
						width='393'
						height='603'
						src={myAvatar}
						alt='introImg'
					/>
				</div>
			</div>
		</>
	)
}

export default Intro
