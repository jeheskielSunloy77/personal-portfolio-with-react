import SwiperCore, { Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/autoplay'
import { Swiper, SwiperSlide } from 'swiper/react'
import { projects } from '../../utils/constants'
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
		{projects.map((project, index) => (
			<SwiperSlide key={index}>
				<ProjectCard
					title={project.title}
					desc={project.desc}
					img={project.img}
					details={project.details}
					links={project.links}
				/>
			</SwiperSlide>
		))}
	</Swiper>
)

export default ProjectSlider
