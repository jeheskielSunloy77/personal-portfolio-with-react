import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { projects } from '../../utils/constants'
import ProjectCard from './ProjectCard'

export default function ProjectSlider() {
	return (
		<Swiper
			className='w-fit'
			effect='fade'
			loop
			autoplay={{
				delay: 3000,
				pauseOnMouseEnter: true,
				disableOnInteraction: false,
			}}
			modules={[Autoplay, Pagination]}
			mousewheel={{ invert: false }}
			autoHeight
			pagination={{ dynamicBullets: true }}
		>
			{projects.map((_, index) => (
				<SwiperSlide key={index}>
					<ProjectCard projectIndex={index} projects={projects} />
				</SwiperSlide>
			))}
		</Swiper>
	)
}
