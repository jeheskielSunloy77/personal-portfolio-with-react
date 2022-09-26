import { useContext } from 'react'
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax'
import BGclouds from '../assets/backgrounds/clouds.webp'
import BGmoon from '../assets/backgrounds/moon.webp'
import { AppContext } from '../utils/AppContext'

const About = () => {
	const { changeTheme } = useContext(AppContext)

	return (
		<>
			<ParallaxProvider>
				<ParallaxBanner
					className='aspect-[2/1] h-[500px]'
					layers={[
						{
							image: changeTheme === 'dark' ? BGclouds : BGmoon,

							speed: -30,
						},
					]}
				>
					<Text />
				</ParallaxBanner>
			</ParallaxProvider>
		</>
	)
}

const Text = () => (
	<div className='myContainer z-10 absolute inset-0 flex items-center justify-center'>
		<div className='sm:w-1/2 mx-auto text-center sm:text-left'>
			<h1 className='text-intro mb-4'>
				<span className='text-cyan-500'>Get to know</span> me a bit
			</h1>
			<p className='text-medium text-lg'>
				My
				<span className='mx-1 text-cyan-500 font-semibold'>passion</span>
				is programing, i've been seriously started to jump into the programing world
				about 6 month ago and i am absolutly loving it. My weapon of choice is
				<span className='mx-1 text-cyan-500 font-semibold'>Typescript and Go.</span>
				I am currently married to
				<span className='mx-1 text-cyan-500 font-semibold'>ReactJS</span>. I also
				like to work with other frameworks such as
				<span className='mx-1 text-cyan-500 font-semibold'>
					Express, Next.js and Gin
				</span>
			</p>
		</div>
	</div>
)

export default About
