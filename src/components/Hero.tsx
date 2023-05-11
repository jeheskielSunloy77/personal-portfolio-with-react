/* eslint-disable indent */
import { motion } from 'framer-motion'
import { useContext, useEffect, useRef, useState } from 'react'
import Typewriter from 'typewriter-effect'
import gopherNoseImage from '../assets/images/gopher-nose.webp'
import gopherImage from '../assets/images/gopher.webp'
import useSetOnScreen from '../hooks/useSetOnScreen'
import { AppContext } from '../utils/AppContext'
import { socialLinks } from '../utils/constants'
import ButtonSpecial from './buttons/ButtonSpecial'

const Hero = () => {
	const ref = useSetOnScreen('hero')

	return (
		<div id='home' ref={ref} className='relative flex h-screen myContainer'>
			<motion.div
				transition={{ duration: 1.5, type: 'spring' }}
				initial={{ x: -50, y: 50, opacity: 0 }}
				animate={{ x: 0, y: 0, opacity: 1 }}
				className='flex items-center'
			>
				<div className='w-full px-6 py-4 rounded-md h-fit bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 dark:bg-opacity-30 '>
					<div className='relative w-full max-w-lg'>
						<div className='absolute top-0 bg-purple-300 rounded-full dark:bg-lime-900 -left-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob'></div>
						<div className='absolute top-0 bg-yellow-300 rounded-full dark:bg-teal-900 -right-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000'></div>
						<div className='absolute bg-pink-300 rounded-full dark:bg-emerald-900 -bottom-8 left-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000'></div>
						<div className='relative'>
							<IntroTypewriter />
						</div>
					</div>
				</div>
			</motion.div>
			<HeroImage />
			<SocialIcons />
			<ScrollDown />
		</div>
	)
}

const shakeNoseAnimation = {
	rotate: [0, 10, -10, 10, -10, 10, -10, 0],
	y: [0, -1, 1, -1, 1, -1, 1, 0],
}

const HeroImage = () => {
	const [isLoaded, setIsLoaded] = useState(false)
	const [shakeNose, setShakeNose] = useState(false)
	const [showDialogueBox, setShowDialogueBox] = useState(true)
	const [timesHited, setTimesHited] = useState(0)
	const [dialogueBox, setDialogueBox] = useState({
		text: 'Hello World!',
		delay: 2,
		duration: 0.5,
	})
	const leftEye = useRef(null)
	const rightEye = useRef(null)
	const [angleDegress, setAngleDegrees] = useState(0)

	const angle = (cx: number, cy: number, ex: number, ey: number) => {
		const dy = ey - cy
		const dx = ex - cx
		const rad = Math.atan2(dy, dx)
		const deg = rad * (180 / Math.PI)

		return deg
	}

	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			const mouseX = event.clientX
			const mouseY = event.clientY
			const anchor = document.querySelector('#anchor-image')
			if (!anchor) return
			const rect = anchor.getBoundingClientRect()
			const anchorX = rect.left + rect.width / 2
			const anchorY = rect.top + rect.height / 2
			const resAngle = angle(anchorX, anchorY, mouseX, mouseY)
			setAngleDegrees(90 + resAngle)
		}
		document.addEventListener('mousemove', handleMouseMove)

		return () => {
			document.removeEventListener('mousemove', handleMouseMove)
		}
	}, [])

	useEffect(() => {
		if (!showDialogueBox) return
		const timer = setTimeout(
			() => {
				setShowDialogueBox(false)
			},
			timesHited === 0 ? 3000 : 2000
		)

		return () => clearTimeout(timer)
	}, [showDialogueBox])

	const popDialogue = (text: string) => {
		setDialogueBox((prev) => ({ ...prev, text, delay: 0 }))
		setShowDialogueBox(true)
		setTimesHited((prev) => prev + 1)
	}

	useEffect(() => {
		const timer = setTimeout(() => {
			setShakeNose(true)
			setTimeout(() => {
				setShakeNose(false)
			}, 500)
		}, 5000)

		return () => clearTimeout(timer)
	}, [shakeNose])

	return (
		<>
			<motion.div
				transition={{ duration: 1.5, type: 'spring' }}
				initial={{ x: 50, y: 50, opacity: 0 }}
				animate={{ x: 0, y: 0, opacity: 1 }}
				className='relative hidden my-auto ml-auto sm:block'
			>
				<div
					onClick={() =>
						popDialogue(
							timesHited === 0
								? 'Ouch!'
								: timesHited === 1
								? 'Stop It!'
								: 'Please Dont!'
						)
					}
				>
					<img
						onLoad={() => setIsLoaded(true)}
						id='anchor-image'
						width='500'
						height='500'
						src={gopherImage}
						alt='hero-image'
						loading='lazy'
						className='z-[1000]'
					/>
					{isLoaded && (
						<>
							<div
								ref={leftEye}
								style={{
									transform: `rotate(${angleDegress}deg)`,
								}}
								className='w-10 h-10 lg:w-14 lg:h-14 flex items-start justify-center absolute md:top-28 md:right-16 xl:top-40 xl:right-24 lg:top-36 lg:right-24'
							>
								<div className='rounded-full bg-red-900 w-6 h-6 lg:w-10 lg:h-10 hover:scale-90 transition-transform' />
							</div>
							<div
								className='w-10 h-10 lg:w-14 lg:h-14 flex items-start justify-center absolute md:top-28 md:left-40 lg:top-36 lg:left-52 xl:top-40 xl:left-56'
								ref={rightEye}
								style={{
									transform: `rotate(${angleDegress}deg)`,
								}}
							>
								<div className='rounded-full bg-red-900 w-6 h-6 lg:w-10 lg:h-10 hover:scale-90 transition-transform' />
							</div>
							<motion.img
								animate={shakeNose ? shakeNoseAnimation : undefined}
								whileHover={shakeNoseAnimation}
								src={gopherNoseImage}
								alt='gopher nose'
								className='flex items-start justify-center lg:w-5 lg:h-5 md:w-[14px] md:h-[14px] absolute md:top-[134px] md:left-[210px] xl:top-48 xl:left-[308px] lg:top-[180px] lg:left-[284px]'
							/>
							<motion.div
								initial={{ y: 100, opacity: 0 }}
								animate={
									showDialogueBox ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }
								}
								transition={{
									delay: dialogueBox.delay,
									duration: dialogueBox.duration,
								}}
								className='bg-gray-200 dark:bg-gray-800 px-4 py-2 absolute top-0 right-0 rounded-md w-32 text-center'
							>
								{dialogueBox.text}
								<div className='w-0 h-0 border-solid border-[10px_10px_0_10px]  border-[#1f2937_transparent_transparent_transparent] absolute -bottom-2 left-4' />
							</motion.div>
						</>
					)}
				</div>
			</motion.div>
		</>
	)
}

const ScrollDown = () => (
	<motion.p
		transition={{ duration: 4, type: 'spring' }}
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		className='absolute flex flex-row items-center text-xs transition-all duration-300 cursor-default bottom-10 right-3 sm:right-0 text-medium hover:translate-y-6'
		style={{ writingMode: 'vertical-rl' }}
	>
		SCROLL DOWN
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className='w-5 h-5 mt-2 animate-bounce'
			fill='none'
			viewBox='0 0 24 24'
			stroke='currentColor'
			strokeWidth={2}
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M16 17l-4 4m0 0l-4-4m4 4V3'
			/>
		</svg>
	</motion.p>
)

const SocialIcons = () => {
	const { theme, switchTheme } = useContext(AppContext)

	return (
		<motion.div
			transition={{ duration: 4, type: 'spring' }}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className='absolute flex flex-col items-center justify-center bottom-10 left-3 sm:left-0'
		>
			{theme === 'dark' ? (
				<svg
					id='sun'
					xmlns='http://www.w3.org/2000/svg'
					onClick={() => {
						switchTheme()
						localStorage.setItem('theme', 'light')
					}}
					className='hover:rotate-[360deg] transition-transform duration-1000 w-5 h-5 my-1 text-gray-600 cursor-pointer dark:text-gray-300 hover:text-black dark:hover:text-white'
					viewBox='0 0 20 20'
					fill='currentColor'
				>
					<path
						fillRule='evenodd'
						d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z'
						clipRule='evenodd'
					/>
				</svg>
			) : (
				<svg
					id='moon'
					xmlns='http://www.w3.org/2000/svg'
					onClick={() => {
						switchTheme()
						localStorage.setItem('theme', 'dark')
					}}
					className='w-5 h-5 my-1 text-gray-600 cursor-pointer hover:rotate-[360deg] transition-transform duration-1000 dark:text-gray-300 hover:text-black dark:hover:text-white'
					viewBox='0 0 20 20'
					fill='currentColor'
				>
					<path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' />
				</svg>
			)}
			<a
				href={socialLinks.instagram}
				target='_blank'
				className='my-1 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white'
				aria-label='Instagram'
				rel='noreferrer'
			>
				<svg
					className='w-4 h-4 fill-current hover:rotate-[360deg] transition-transform duration-1000'
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 169.063 169.063'
				>
					<g>
						<path d='M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752   c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407   c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752   c17.455,0,31.656,14.201,31.656,31.655V122.407z' />
						<path d='M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561   C128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561   c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z' />
						<path d='M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78   c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78   C135.661,29.421,132.821,28.251,129.921,28.251z' />
					</g>
					<g></g>
					<g></g>
					<g></g>
					<g></g>
					<g></g>
					<g></g>
					<g></g>
					<g></g>
					<g></g>
					<g></g>
					<g></g>
					<g></g>
					<g></g>
					<g></g>
					<g></g>
				</svg>
			</a>
			<a
				href={socialLinks.linkedin}
				target='_blank'
				className='my-1 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:rotate-[360deg] transition-transform duration-1000'
				aria-label='LinkedIn'
				rel='noreferrer'
			>
				<svg
					className='w-4 h-4 fill-current'
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 50 50'
				>
					<path d='M25,2C12.3,2,2,12.3,2,25s10.3,23,23,23s23-10.3,23-23S37.7,2,25,2z M19,35c0,0.6-0.4,1-1,1h-4c-0.6,0-1-0.4-1-1V20 c0-0.6,0.4-1,1-1h4c0.6,0,1,0.4,1,1V35z M16,18c-1.6,0-3-1.4-3-3s1.4-3,3-3s3,1.4,3,3S17.6,18,16,18z M38,35c0,0.6-0.4,1-1,1h-4 c-0.6,0-1-0.4-1-1v-7.5c0-1.4-1.1-2.5-2.5-2.5S27,26.1,27,27.5V35c0,0.6-0.4,1-1,1h-4c-0.6,0-1-0.4-1-1V20c0-0.6,0.4-1,1-1h4 c0.5,0,1,0.5,1,1c1.1-0.6,2.2-1,3.5-1c4.1,0,7.5,3.4,7.5,7.5V35z' />
				</svg>
			</a>

			<a
				href={socialLinks.facebook}
				className='my-1 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:rotate-[360deg] transition-transform duration-1000'
				aria-label='Facebook'
			>
				<svg
					className='w-4 h-4 fill-current'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path d='M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z'></path>
				</svg>
			</a>

			<a
				href={socialLinks.github}
				target='_blank'
				className='my-1 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:rotate-[360deg] transition-transform duration-1000'
				aria-label='Github'
				rel='noreferrer'
			>
				<svg
					className='w-4 h-4 fill-current'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path d='M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z'></path>
				</svg>
			</a>
		</motion.div>
	)
}

const IntroTypewriter = () => {
	const { loading } = useContext(AppContext)

	return (
		<div className='flex max-w-xl my-auto h-fit'>
			<div className='my-auto'>
				<div className='font-bold leading-snug text-gray-900 transition-all duration-300 font-staatliches dark:text-white '>
					<h3 className='text-2xl'>Hello There!</h3>
					<h2 className='text-4xl'>
						Im
						<span className='ml-2 underline decoration-cyan-500 underline-offset-4'>
							Jeheskiel Sunloy
						</span>
					</h2>

					<div className='text-3xl'>
						{!loading && (
							<Typewriter
								options={{
									autoStart: true,
									loop: true,
									deleteSpeed: 5,
								}}
								onInit={(typewriter) => {
									typewriter
										.start()
										.typeString('<span class="text-cyan-500">I am </span>')
										.typeString('an IT Student.')
										.pauseFor(1500)
										.deleteChars(13)
										.typeString(' Full Stack Developer.')
										.pauseFor(1500)
										.deleteChars(21)
										.typeString(' Mobile Developer.')
										.pauseFor(1500)
										.deleteChars(18)
										.typeString(' Gopher.')
										.pauseFor(1500)
								}}
							/>
						)}
					</div>
				</div>
				<p className='text-md text-medium'>
					Hey thank you for passing by, my fullname is Jeheskiel Ventioky Sunloy but
					my friends call me Jay. I am a student majoring Informatics Engineering at
					Satya Wacana Christian University. I am currently 21 years old and im
					hailing from Ambon, Indonesia
				</p>
				<ButtonSpecial text='EXPLORE' href='#about' />
			</div>
		</div>
	)
}

export default Hero
