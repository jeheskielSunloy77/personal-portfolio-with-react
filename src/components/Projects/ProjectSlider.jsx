import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Pagination, Autoplay } from "swiper"

import "swiper/css"
import "swiper/css/autoplay"
import ProjectCard from "./ProjectCard"
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
						img="src/images/projects/fapertaUnipa.png"
						details={{
							status: "Work on Progress",
							code: "Private",
							demo: "Prototype",
							stack: "Next.js, Mongodb, Tailwindcss",
						}}
						links={{
							demo: "https://nextjs-faperta-unipa-prototype.vercel.app/",
							code: "https://github.com/jeheskielSunloy77/nextjs-faperta-unipa",
						}}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<ProjectCard
						title="Official Faculty Website"
						desc="Adipisicing nulla culpa reprehenderit adipisicing ullamco non laboris. Eiusmod consectetur consequat proident minim consectetur."
						img="src/images/projects/fapertaUnipa.png"
						details={{
							status: "Work on Progress",
							code: "Private",
							demo: "Prototype",
							stack: "Next.js, Mongodb, Tailwindcss",
						}}
						links={{
							demo: "https://nextjs-faperta-unipa-prototype.vercel.app/",
							code: "https://github.com/jeheskielSunloy77/nextjs-faperta-unipa",
						}}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<ProjectCard
						title="Official Faculty Website"
						desc="Adipisicing nulla culpa reprehenderit adipisicing ullamco non laboris. Eiusmod consectetur consequat proident minim consectetur."
						img="src/images/projects/fapertaUnipa.png"
						details={{
							status: "Work on Progress",
							code: "Private",
							demo: "Prototype",
							stack: "Next.js, Mongodb, Tailwindcss",
						}}
						links={{
							demo: "https://nextjs-faperta-unipa-prototype.vercel.app/",
							code: "https://github.com/jeheskielSunloy77/nextjs-faperta-unipa",
						}}
					/>
				</SwiperSlide>
			</div>
		</Swiper>
	)
}
