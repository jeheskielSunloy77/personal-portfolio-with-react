import SwiperCore, { Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/autoplay'
import { Swiper, SwiperSlide } from 'swiper/react'
import { projects } from '../../utils/constants'
import ProjectCard from './ProjectCard'

SwiperCore.use([Pagination, Autoplay])

const ProjectSlider = () => (
	<Swiper
		className='w-fit'
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
		{projects.map((_, index) => (
			<SwiperSlide key={index}>
				<ProjectCard projectIndex={index} projects={projects} />
			</SwiperSlide>
		))}
	</Swiper>
)

export default ProjectSlider
