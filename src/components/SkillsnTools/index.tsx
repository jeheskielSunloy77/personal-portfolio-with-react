import { useContext } from 'react'
import { AppContext } from '../../utils/AppContext'
import { Card, CardLogo } from './Card'
// import gimpImg from "../../assets/icons/gimp.svg"
// import canvaImg from '../../assets/icons/canva.svg'
import SwiperCore, { Autoplay, FreeMode } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import ginImg from '../../assets/icons/gin.png'
import {
	AntdIcon,
	AstroIcon,
	Auth0Icon,
	DynamicIcons,
	EslintIcon,
	FireBaseIcon,
	GoIcon,
	JavascriptIcon,
	JestIcon,
	MongodbIcon,
	MuiIcon,
	NodejsIcon,
	PostgresIcon,
	ReactIcon,
	SassIcon,
	SupabaseIcon,
	TailwindIcon,
	ThunderClientIcon,
	TypescriptIcon,
	UbuntuIcon,
	VscodeIcon,
} from '../icons/SkillsnToolsIcons'
SwiperCore.use([Autoplay, FreeMode])

const SkillsNTools = () => {
	const { skillsRef, changeTheme } = useContext(AppContext)
	const { ExpressIcon, GithubIcon, NextjsIcon, VercelIcon } =
		DynamicIcons(changeTheme)

	return (
		<div ref={skillsRef} id='skills' className='myContainer'>
			<h1 className='mb-10 text-intro text-center sm:text-left'>
				<span className='text-cyan-500'>Skills</span> I Have
				<br />
				And <span className='text-cyan-500'>Tools</span> I Use
			</h1>
			<Swiper
				loop
				speed={50000}
				autoplay={{
					delay: 0,
					waitForTransition: false,
					pauseOnMouseEnter: true,
					disableOnInteraction: false,
				}}
				allowTouchMove={false}
				autoHeight
			>
				<SwiperSlide className='flex'>
					<Card
						title='Javascript'
						subtitle='Programing Language'
						desc='Bread and Butter'
						logo={<CardLogo svg={JavascriptIcon} backgroud='bg-[#f7df1e]' />}
					/>
					<Card
						title='ReactJS'
						subtitle='JS Library'
						desc='First Love'
						logo={<CardLogo svg={ReactIcon} />}
					/>
					<Card
						title='Next.js'
						subtitle='Fullstack Framework'
						desc='all you need'
						logo={<CardLogo svg={NextjsIcon} />}
					/>
					<Card
						title='Astro'
						subtitle='Web Framework'
						desc='Fast and Furious'
						logo={<CardLogo svg={AstroIcon} />}
					/>
					<Card
						title='Typescript'
						subtitle='Programing Language'
						desc='stockholm syndrome'
						logo={<CardLogo svg={TypescriptIcon} backgroud='bg-[#3178c6]' />}
					/>
					<Card
						title='Go'
						subtitle='Programing Language'
						desc='Its Go !Golang'
						logo={<CardLogo svg={GoIcon} />}
					/>
					<Card
						title='Mongodb'
						subtitle='Database'
						desc='love and hate'
						logo={<CardLogo svg={MongodbIcon} />}
					/>
					<Card
						title='Firebase'
						subtitle='Backend Service'
						desc='fire and forget'
						logo={<CardLogo svg={FireBaseIcon} />}
					/>
					<Card
						title='PostgreSQL'
						subtitle='Database'
						desc='old reliable'
						logo={<CardLogo svg={PostgresIcon} />}
					/>
				</SwiperSlide>
				<SwiperSlide className='flex'>
					<Card
						title='NodeJS'
						subtitle='JS runtime'
						desc='JS backbone'
						logo={<CardLogo svg={NodejsIcon} />}
					/>
					<Card
						title='ExpressJS'
						subtitle='Backend Framework'
						desc='Easy Backend'
						logo={<CardLogo svg={ExpressIcon} />}
					/>
					<Card
						title='Gin'
						subtitle='Web Framework'
						desc='Go In The Back'
						logo={<CardLogo src={ginImg} className='h-[110px]' />}
					/>
					<Card
						title='Javascript'
						subtitle='Programing Language'
						desc='Bread and Butter'
						logo={<CardLogo svg={JavascriptIcon} backgroud='bg-[#f7df1e]' />}
					/>
					<Card
						title='ReactJS'
						subtitle='JS Library'
						desc='First Love'
						logo={<CardLogo svg={ReactIcon} />}
					/>
					<Card
						title='Next.js'
						subtitle='Fullstack Framework'
						desc='all you need'
						logo={<CardLogo svg={NextjsIcon} />}
					/>
					<Card
						title='Typescript'
						subtitle='Programing Language'
						desc='stockholm syndrome'
						logo={<CardLogo svg={TypescriptIcon} backgroud='bg-[#3178c6]' />}
					/>
					<Card
						title='Go'
						subtitle='Programing Language'
						desc='Its Go !Golang'
						logo={<CardLogo svg={GoIcon} />}
					/>
					<Card
						title='Mongodb'
						subtitle='Database'
						desc='love and hate'
						logo={<CardLogo svg={MongodbIcon} />}
					/>
				</SwiperSlide>
			</Swiper>
			<Swiper
				loop
				speed={50000}
				autoplay={{
					delay: 0,
					reverseDirection: true,
					waitForTransition: false,
					pauseOnMouseEnter: true,
					disableOnInteraction: false,
				}}
				allowTouchMove={false}
				autoHeight
			>
				<SwiperSlide className='flex'>
					<Card
						title='Tailwind'
						subtitle='CSS Framework'
						desc='my secret affair'
						logo={<CardLogo svg={TailwindIcon} />}
					/>
					<Card
						title='Ant Design'
						subtitle='CSS Library'
						desc='Reactive UI'
						logo={<CardLogo svg={AntdIcon} />}
					/>
					<Card
						title='Material UI'
						subtitle='CSS Library'
						desc='Reactive UI'
						logo={<CardLogo svg={MuiIcon} />}
					/>
					<Card
						title='Sass'
						subtitle='CSS Preprocessor'
						desc='sexy.css'
						logo={<CardLogo svg={SassIcon} />}
					/>
					<Card
						title='VS Code'
						subtitle='Code Editor'
						desc='playground'
						logo={<CardLogo svg={VscodeIcon} />}
					/>
					<Card
						title='Ubuntu'
						subtitle='Operating System'
						desc='work, work, work'
						logo={<CardLogo svg={UbuntuIcon} />}
					/>
					<Card
						title='Github'
						subtitle='Version Control'
						desc='pull, push, commit'
						logo={<CardLogo svg={GithubIcon} />}
					/>
					<Card
						title='ESlint'
						subtitle='Code Analyzer'
						desc='annoying little thing'
						logo={<CardLogo svg={EslintIcon} />}
					/>
					<Card
						title='Supabase'
						subtitle='Backend Service'
						desc="shouldn't be free"
						logo={<CardLogo svg={SupabaseIcon} />}
					/>
				</SwiperSlide>
				<SwiperSlide className='flex'>
					<Card
						title='Auth0'
						subtitle='Authentication Platform'
						desc='guardian angel'
						logo={<CardLogo svg={Auth0Icon} />}
					/>
					<Card
						title='Thunder Client'
						subtitle='REST Tester'
						desc='restless api'
						logo={<CardLogo svg={ThunderClientIcon} />}
					/>
					<Card
						title='Vercel'
						subtitle='Hosting Provider'
						desc='easy like 123'
						logo={<CardLogo svg={VercelIcon} />}
					/>
					<Card
						title='Jest'
						subtitle='Unit Testing'
						desc='Green is fun'
						logo={<CardLogo svg={JestIcon} />}
					/>
					<Card
						title='Tailwind'
						subtitle='CSS Framework'
						desc='my secret affair'
						logo={<CardLogo svg={TailwindIcon} />}
					/>
					<Card
						title='Ant Design'
						subtitle='CSS Library'
						desc='Reactive UI'
						logo={<CardLogo svg={AntdIcon} />}
					/>
					<Card
						title='Sass'
						subtitle='CSS Preprocessor'
						desc='sexy.css'
						logo={<CardLogo svg={SassIcon} />}
					/>
					<Card
						title='VS Code'
						subtitle='Code Editor'
						desc='playground'
						logo={<CardLogo svg={VscodeIcon} />}
					/>
					<Card
						title='Ubuntu'
						subtitle='Operating System'
						desc='work, work, work'
						logo={<CardLogo svg={UbuntuIcon} />}
					/>
				</SwiperSlide>
			</Swiper>
		</div>
	)
}

export default SkillsNTools
