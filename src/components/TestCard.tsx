import crudAppImg from '../assets/projects/crudApp.webp'
import fapertaUnipaImg from '../assets/projects/fapertaUnipa.webp'
import iaknKupangImg from '../assets/projects/iaknKupang.webp'
import weatherAppImg from '../assets/projects/weatherApp.webp'
import webscraper from '../assets/projects/webscraper.webp'
const Project = ({ title, img, desc }: ProjectProps) => (
	<div
		className={
			'group h-full flex-[1] bg-cover bg-no-repeat overflow-hidden cursor-pointer rounded-sm transition-all duration-500 bg-[#212121] flex hover:block justify-center items-center hover:flex-[4]'
		}
		style={{ backgroundImage: `url(${img})` }}
	>
		<span className='group-hover:hidden min-w-[14em] p-1 text-center transform rotate-90 transition-all duration-500 text-cyan-500 uppercase tracking-[.1em]'>
			{title}
		</span>
		<div className='hidden p-6 group-hover:block'>
			<h4 className='uppercase text-cyan-500'>{title}</h4>
			<p>{desc}</p>
		</div>
	</div>
)

export default function TestCard() {
	return (
		<section className='myContainer'>
			<div className='h-[350px] flex gap-1 p-1 mx-auto rounded-md  bg-cyan-500 card'>
				{projects.map((project, i) => (
					<Project
						key={i}
						img={project.img}
						title={project.title}
						desc={project.desc}
					/>
				))}
			</div>
		</section>
	)
}

interface ProjectProps {
	title: string
	img: string
	desc: string
}

const projects = [
	{
		title: 'Student Information System',
		desc:
			'An information system for IAKN Kupang university student, Build with Next.js, Postgresql, Supabase, and Tailwindcss.',
		img: iaknKupangImg,
		details: {
			status: 'Work on Progress',
			code: 'Private',
			demo: 'Prototype',
			stack: 'Next.js, Typescript, Postgresql, Supabase, Tailwindcss',
		},
		links: {
			demo: 'http://nextjs-iakn-kupang.vercel.app/',
		},
	},
	{
		title: 'Ecommerce Web Scraper',
		desc:
			'A webscraper build with GO using serverless functions technology, that can scrape the web looking for any product from the user.',
		img: webscraper,
		details: {
			status: 'Stable',
			code: 'Public',
			demo: 'Available',
			stack: 'GO, Colly Framework',
		},
		links: {
			demo: 'https://go-ecommerce-scraper.vercel.app/',
			code: 'https://github.com/jeheskielSunloy77/go-ecommerce-scraper',
		},
	},
	{
		title: 'Official Faculty Website',
		desc:
			'A Fullstack web app for Faculty of Argiculture, Papua University build with Next.js, Tailwindcss and Mongodb.',
		img: fapertaUnipaImg,
		details: {
			status: 'Work on Progress',
			code: 'Private',
			demo: 'Prototype',
			stack: 'Next.js, Mongodb, Auth0, Tailwindcss',
		},
		links: {
			demo: 'https://faperta-unipa-prototype.vercel.app/',
		},
	},
	{
		title: 'CRUD App',
		desc:
			'A simple CRUD application with Antd on the frontend and using mockapi.io to handle the resources.',
		img: crudAppImg,
		details: {
			status: 'Final',
			code: 'Public',
			demo: 'Available',
			stack: 'ReactJS, Tailwindcss, Antd',
		},
		links: {
			demo: 'https://dataon-project.vercel.app/',
			code: 'https://github.com/jeheskielSunloy77/dataon-project',
		},
	},
	{
		title: 'PWA Weather App',
		desc:
			'A progressive web application that can be installed on any device that can provide an acurate weather report from all around the world.',
		img: weatherAppImg,
		details: {
			status: 'Stable',
			code: 'Public',
			demo: 'Available',
			stack: 'Next.js, Typescript, Tailwindcss',
		},
		links: {
			demo: 'https://nextjs-weather-app-lemon.vercel.app/',
			code: 'https://github.com/jeheskielSunloy77/nextjs-weather-app',
		},
	},
]
