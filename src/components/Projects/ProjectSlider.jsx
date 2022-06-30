import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Pagination, Autoplay } from "swiper"
import "swiper/css"
import "swiper/css/autoplay"
import ProjectCard from "./ProjectCard"
import memeGeneratorImg from "../../assets/projects/memeGenerator.png"
import fapertaUnipaImg from "../../assets/projects/fapertaUnipa.png"
import libraryImg from "../../assets/projects/library.png"
import weatherAppImg from "../../assets/projects/weatherApp.png"
SwiperCore.use([Pagination, Autoplay])
export default function ProjectSlider() {
	return (
		<Swiper
			effect="fade"
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
			<div className="text-red-500">
				<SwiperSlide>
					<ProjectCard
						title="Official Faculty Website"
						desc="A Fullstack web app for Faculty of Argiculture, Papua University build with Next.js, Tailwindcss and Mongodb."
						img={fapertaUnipaImg}
						details={{
							status: "Work on Progress",
							code: "Private",
							demo: "Prototype",
							stack: "Next.js, Mongodb, Tailwindcss",
						}}
						links={{
							demo: "https://faperta-unipa-prototype.vercel.app/",
						}}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<ProjectCard
						title="PWA Weather App"
						desc="A progressive web application that can be installed on any device that can provide an acurate weather report from all around the world."
						img={weatherAppImg}
						details={{
							status: "Stable",
							code: "Public",
							demo: "Available",
							stack: "Next.js, Tailwindcss",
						}}
						links={{
							demo: "https://nextjs-weather-app-lemon.vercel.app/",
							code: "https://github.com/jeheskielSunloy77/nextjs-weather-app",
						}}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<ProjectCard
						title="Fullstack Library"
						desc="A full fledged library app, with CRUD functionality for administrators and a beautifull UI for users."
						img={libraryImg}
						details={{
							status: "Work on Progress",
							code: "Public",
							demo: "Prototype",
							stack: "Next.js, Mongodb, Tailwindcss",
						}}
						links={{
							demo: "https://nextjs-fullstack-library-with-mongodb.vercel.app/",
							code: "https://github.com/jeheskielSunloy77/nextjs-fullstack-library-with-mongodb",
						}}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<ProjectCard
						title="Meme Generator"
						desc="A basic and simple website that can generate a random meme images and using user input to customize the meme."
						img={memeGeneratorImg}
						details={{
							status: "Final",
							code: "Public",
							demo: "Prototype",
							stack: "ReactJS",
						}}
						links={{
							demo: "https://react-meme-generator-eta.vercel.app/",
							code: "https://github.com/jeheskielSunloy77/react-meme-generator",
						}}
					/>
				</SwiperSlide>
			</div>
		</Swiper>
	)
}
