import crudAppImg from '../assets/projects/crudApp.webp'
import fapertaUnipaImg from '../assets/projects/fapertaUnipa.webp'
import iaknKupangImg from '../assets/projects/iaknKupang.webp'
import weatherAppImg from '../assets/projects/weatherApp.webp'
import webscraper from '../assets/projects/webscraper.webp'
// import firebaseImg from '../../assets/icons/firebase.svg'
// import javascriptImg from '../../assets/icons/javascript.svg'
// import mongodbImg from '../../assets/icons/mongodb.svg'
// import nodejsImg from '../../assets/icons/nodejs.svg'
// import postgresqlImg from '../../assets/icons/postgresql.svg'
// import reactImg from '../../assets/icons/react.svg'
// import sassImg from '../../assets/icons/sass.svg'
// import tailwindImg from '../../assets/icons/tailwind.svg'
// import typescriptImg from '../../assets/icons/typescript.svg'

// import antdImg from '../../assets/icons/antd.svg'
// import auth0Img from '../../assets/icons/auth0.svg'
// import eslintImg from '../../assets/icons/eslint.svg'
// import goImg from '../../assets/icons/go.svg'
// import supabaseImg from '../../assets/icons/supabase.svg'
// import thunderclientImg from '../../assets/icons/thunderclient.svg'
// import ubuntuImg from '../../assets/icons/ubuntu.svg'
// import vscodeImg from '../../assets/icons/vscode.svg'
// // import gimpImg from "../../assets/icons/gimp.svg"
// // import canvaImg from '../../assets/icons/canva.svg'
// import jestImg from '../../assets/icons/jest.svg'

export const socialLinks = {
	instagram: 'https://www.instagram.com/schlittschuhlaufen_/',
	facebook: 'https://www.facebook.com/people/Jehezkiel-Sunloy/100007513622251/',
	github: 'https://github.com/jeheskielSunloy77',
	linkedin: 'https://www.linkedin.com/in/jeheskiel-ventioky-sunloy/',
}

export const cvLinks = {
	english: '',
	bahasa: '',
}

export const projects = [
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

// export const skillsNTools = [
// 	{
// 		title: 'Javascript',
// 		subtitle: 'Programming Language',
// 		desc: 'Bread & Butter',
// 		src: javascriptImg,
// 		backgroud: 'bg-[#f7df1e]',
// 		svg: '',
// 	},
// 	{
// 		title: 'ReactJS',
// 		subtitle: 'JS library',
// 		desc: 'First Love',
// 		src: reactImg,
// 		backgroud: '',
// 		svg: '',
// 	},
// 	{
// 		title: 'Next.js',
// 		subtitle: 'Fullstack Framewordk',
// 		desc: 'All You Need',
// 		svg: '',
// 	},
// 	{
// 		title: 'Typescript',
// 		subtitle: 'Programming Language',
// 		desc: 'Stockholm Syndrome',
// 		src: typescriptImg,
// 		backgroud: 'bg-[#3178c6]',
// 	},
// 	{
// 		title: 'Go',
// 		subtitle: 'Programmig Language',
// 		desc: 'Its Go !Golang',
// 		src: goImg,
// 	},
// 	{
// 		title: 'Mongodb',
// 		subtitle: 'Database',
// 		desc: 'Love and Hate',
// 		src: mongodbImg,
// 	},
// 	{
// 		title: 'Firebase',
// 		subtitle: 'Services',
// 		desc: 'Fire and Forget',
// 		src: firebaseImg,
// 	},
// 	{
// 		title: 'PostgreSQL',
// 		subtitle: 'Database',
// 		desc: 'Old Reliable',
// 		src: postgresqlImg,
// 	},
// 	{
// 		title: 'NodeJS',
// 		subtitle: 'JS Runtime',
// 		desc: 'Server.js',
// 		src: nodejsImg,
// 	},
// 	{
// 		title: 'ExpressJS',
// 		subtitle: 'Backend Framework',
// 		desc: 'Easy Backend',
// 		svg: '',
// 	},
// 	{
// 		title: 'TailwindCSS',
// 		subtitle: 'CSS Framework',
// 		desc: 'CSS Reinvented',
// 		src: tailwindImg,
// 	},
// 	{
// 		title: 'Ant Design',
// 		subtitle: 'CSS Library',
// 		desc: 'Reactive UI',
// 		src: antdImg,
// 	},
// 	{
// 		title: 'Sass',
// 		subtitle: 'CSS Preprocessor',
// 		desc: 'SEXY.css',
// 		src: sassImg,
// 	},
// 	{
// 		title: 'VS Code',
// 		subtitle: 'Code Editor',
// 		desc: 'Playground',
// 		src: vscodeImg,
// 	},
// 	{
// 		title: 'Ubuntu',
// 		subtitle: 'Operating System',
// 		desc: 'Work, Work, Work',
// 		src: ubuntuImg,
// 	},
// 	{
// 		title: 'Github',
// 		subtitle: 'Version Control',
// 		desc: 'Pull,Commit,Push',
// 		svg: '',
// 	},
// 	{
// 		title: 'ESLint',
// 		subtitle: 'Code Linter',
// 		desc: 'Annoying Little Thing',
// 		src: eslintImg,
// 	},
// 	{
// 		title: 'Supabase',
// 		subtitle: 'Service',
// 		desc: "Shouldn't be Free",
// 		src: supabaseImg,
// 	},
// 	{
// 		title: 'Auth0',
// 		subtitle: 'Auth Service',
// 		desc: 'Guardian Angel',
// 		src: auth0Img,
// 	},
// 	{
// 		title: 'Thunder Client',
// 		subtitle: 'REST Tester',
// 		desc: 'Restless API',
// 		src: thunderclientImg,
// 	},
// 	{
// 		title: 'Vercel',
// 		subtitle: 'Deployment Service',
// 		desc: 'Easy Like 123',
// 		svg: '',
// 	},
// 	{
// 		title: 'Jest',
// 		subtitle: 'Testing Framework',
// 		desc: 'Green == Fun',
// 		src: jestImg,
// 	},
// ]
