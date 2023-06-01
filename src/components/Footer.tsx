import useTheme from 'src/hooks/useTheme'
import logo from '../assets/icons/logo.webp'
import loveIcon from '../assets/icons/love.svg'
import useSetOnScreen from '../hooks/useSetOnScreen'
import { socialLinks } from '../utils/constants'

const Footer = () => {
	const ref = useSetOnScreen('footer')
	const { theme } = useTheme()

	return (
		<footer
			ref={ref}
			className='flex flex-col items-center justify-between px-6 py-2 sm:flex-row'
		>
			<img
				src={logo}
				className='rounded w-14 h-14 dark:grayscale'
				alt='logo-footer'
				loading='lazy'
			/>

			<p className='flex items-center py-2 text-gray-800 dark:text-white sm:py-0'>
				Build with
				<img
					className='w-5 h-5 mx-1  animate-pulse'
					src={loveIcon}
					alt='love'
					loading='lazy'
				/>
				with
				<svg
					className='ml-1 hover:rotate-[360deg] transition-transform duration-1000'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='-11.5 -10.23174 23 20.46348'
					width='18px'
					height='18px'
				>
					<circle
						cx='0'
						cy='0'
						r='2.05'
						fill={theme === 'light' ? '#2096b7' : '#61dafb'}
					/>
					<g
						stroke={theme === 'light' ? '#2096b7' : '#61dafb'}
						strokeWidth='1'
						fill='none'
					>
						<ellipse rx='11' ry='4.2' />
						<ellipse rx='11' ry='4.2' transform='rotate(60)' />
						<ellipse rx='11' ry='4.2' transform='rotate(120)' />
					</g>
				</svg>
			</p>
			<div className='flex -mx-2'>
				<a
					href={socialLinks.instagram}
					target='_blank'
					className='mx-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white'
					aria-label='Instagram'
					rel='noreferrer'
				>
					<svg
						className='w-5 h-5 fill-current hover:rotate-[360deg] transition-transform duration-1000'
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
					className='mx-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white'
					aria-label='LinkedIn'
					rel='noreferrer'
				>
					<svg
						className='w-5 h-5 fill-current hover:rotate-[360deg] transition-transform duration-1000'
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 50 50'
					>
						<path d='M25,2C12.3,2,2,12.3,2,25s10.3,23,23,23s23-10.3,23-23S37.7,2,25,2z M19,35c0,0.6-0.4,1-1,1h-4c-0.6,0-1-0.4-1-1V20 c0-0.6,0.4-1,1-1h4c0.6,0,1,0.4,1,1V35z M16,18c-1.6,0-3-1.4-3-3s1.4-3,3-3s3,1.4,3,3S17.6,18,16,18z M38,35c0,0.6-0.4,1-1,1h-4 c-0.6,0-1-0.4-1-1v-7.5c0-1.4-1.1-2.5-2.5-2.5S27,26.1,27,27.5V35c0,0.6-0.4,1-1,1h-4c-0.6,0-1-0.4-1-1V20c0-0.6,0.4-1,1-1h4 c0.5,0,1,0.5,1,1c1.1-0.6,2.2-1,3.5-1c4.1,0,7.5,3.4,7.5,7.5V35z' />
					</svg>
				</a>

				<a
					href={socialLinks.facebook}
					target='_blank'
					className='mx-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white'
					aria-label='Facebook'
					rel='noreferrer'
				>
					<svg
						className='w-5 h-5 fill-current hover:rotate-[360deg] transition-transform duration-1000'
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
					className='mx-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white'
					aria-label='Github'
					rel='noreferrer'
				>
					<svg
						className='w-5 h-5 fill-current hover:rotate-[360deg] transition-transform duration-1000'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d='M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z'></path>
					</svg>
				</a>
			</div>
		</footer>
	)
}

export default Footer
