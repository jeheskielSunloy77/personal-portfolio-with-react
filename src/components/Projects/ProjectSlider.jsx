import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, {
	Navigation,
	Pagination,
	EffectCoverflow,
	Autoplay,
	Scrollbar,
} from "swiper"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/autoplay"
import ProjectCard from "./ProjectCard"
SwiperCore.use([Navigation, Pagination, EffectCoverflow, Autoplay, Scrollbar])

export default function ProjectSlider() {
	return (
		<Swiper
			// spaceBetween={30}
			effect="fade"
			loop
			// navigation={true}
			autoplay={{ delay: 3000 }}
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
						desc="A Fullstack web for Faculty of Argiculture, Papua University build with Next.js, Tailwindcss and Mongodb."
						img="src/images/projects/fapertaUnipa.png"
						details={{
							status: "Work on Progress",
							code: "Private",
							demo: "Prototype",
							stack: "Next.js, Mongodb",
						}}
						links={{
							demo: "https://nextjs-faperta-unipa-prototype.vercel.app/",
							code: "https://github.com/Redsparrow77/nextjs-faperta-unipa",
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
							stack: "Next.js, Mongodb",
						}}
						links={{
							demo: "https://nextjs-faperta-unipa-prototype.vercel.app/",
							code: "https://github.com/Redsparrow77/nextjs-faperta-unipa",
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
							stack: "Next.js, Mongodb",
						}}
						links={{
							demo: "https://nextjs-faperta-unipa-prototype.vercel.app/",
							code: "https://github.com/Redsparrow77/nextjs-faperta-unipa",
						}}
					/>
				</SwiperSlide>
			</div>
		</Swiper>
	)
}
