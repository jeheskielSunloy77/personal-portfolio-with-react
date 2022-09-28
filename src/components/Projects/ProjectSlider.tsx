import SwiperCore, { Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/autoplay'
import { Swiper, SwiperSlide } from 'swiper/react'
import crudAppImg from '../../assets/projects/crudApp.webp'
import fapertaUnipaImg from '../../assets/projects/fapertaUnipa.webp'
import iaknKupangImg from '../../assets/projects/iaknKupang.webp'
import libraryImg from '../../assets/projects/library.webp'
import memeGeneratorImg from '../../assets/projects/memeGenerator.webp'
import weatherAppImg from '../../assets/projects/weatherApp.webp'
import ProjectCard from './ProjectCard'

SwiperCore.use([Pagination, Autoplay])

const ProjectSlider = () => (
	<Swiper
		effect='fade'
		loop
		autoplay={{
			delay: 3000,
			pauseOnMouseEnter: true,
			disableOnInteraction: false,
		}}
		mousewheel={{ invert: false }}
		autoHeight
		pagination={{
			dynamicBullets: true,
		}}
	>
		<div className='text-red-500'>
			<SwiperSlide>
				<ProjectCard
					title='Official Faculty Website'
					desc='A Fullstack web app for Faculty of Argiculture, Papua University build with Next.js, Tailwindcss and Mongodb.'
					img={fapertaUnipaImg}
					details={{
						status: 'Work on Progress',
						code: 'Private',
						demo: 'Prototype',
						stack: 'Next.js, Mongodb, Auth0, Tailwindcss',
					}}
					links={{
						demo: 'https://faperta-unipa-prototype.vercel.app/',
					}}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<ProjectCard
					title='Student Information System'
					desc='An information system for IAKN Kupang university student, Build with Next.js, Postgresql, Supabase, and Tailwindcss.'
					img={iaknKupangImg}
					details={{
						status: 'Work on Progress',
						code: 'Private',
						demo: 'Prototype',
						stack: 'Next.js, Typescript, Postgresql, Supabase, Tailwindcss',
					}}
					links={{
						demo: 'http://nextjs-iakn-kupang.vercel.app/',
					}}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<ProjectCard
					title='CRUD App'
					desc='A simple CRUD application with Antd on the frontend and using mockapi.io to handle the resources.'
					img={crudAppImg}
					details={{
						status: 'Final',
						code: 'Public',
						demo: 'Production Available',
						stack: 'ReactJS, Tailwindcss, Antd',
					}}
					links={{
						demo: 'https://dataon-project.vercel.app/',
						code: 'https://github.com/jeheskielSunloy77/dataon-project',
					}}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<ProjectCard
					title='PWA Weather App'
					desc='A progressive web application that can be installed on any device that can provide an acurate weather report from all around the world.'
					img={weatherAppImg}
					details={{
						status: 'Stable',
						code: 'Public',
						demo: 'Production Available',
						stack: 'Next.js, Typescript, Tailwindcss',
					}}
					links={{
						demo: 'https://nextjs-weather-app-lemon.vercel.app/',
						code: 'https://github.com/jeheskielSunloy77/nextjs-weather-app',
					}}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<ProjectCard
					title='Fullstack Library'
					desc='A full fledged library app, with CRUD functionality for administrators and a beautifull UI for users.'
					img={libraryImg}
					details={{
						status: 'Work on Progress',
						code: 'Public',
						demo: 'Prototype',
						stack: 'Next.js, Mongodb, Tailwindcss',
					}}
					links={{
						demo: 'https://nextjs-fullstack-library-with-mongodb.vercel.app/',
						code:
							'https://github.com/jeheskielSunloy77/nextjs-fullstack-library-with-mongodb',
					}}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<ProjectCard
					title='Meme Generator'
					desc='A basic and simple website that can generate a random meme images and using user input to customize the meme.'
					img={memeGeneratorImg}
					details={{
						status: 'Final',
						code: 'Public',
						demo: 'Available',
						stack: 'ReactJS',
					}}
					links={{
						demo: 'https://react-meme-generator-eta.vercel.app/',
						code: 'https://github.com/jeheskielSunloy77/react-meme-generator',
					}}
				/>
			</SwiperSlide>
		</div>
	</Swiper>
)

export default ProjectSlider
