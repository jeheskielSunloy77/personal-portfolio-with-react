import coffeeShopAppImage from '../assets/projects/coffeeShopApp.png'
import crudAppImg from '../assets/projects/crudApp.webp'
import fapertaUnipaImg from '../assets/projects/fapertaUnipa.webp'
import iaknKupangImg from '../assets/projects/iaknKupang.webp'
import weatherAppImg from '../assets/projects/weatherApp.webp'
import webscraper from '../assets/projects/webscraper.webp'
import { Project } from './types'

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

export const projects: Project[] = [
	{
		title: 'Student Information System',
		desc:
			'An information system for IAKN Kupang university student, Build with Next.js, Postgresql, Supabase, and Tailwindcss.',
		img: iaknKupangImg,
		details: {
			status: 'Work on Progress',
			code: 'Private',
			demo: 'Prototype',
			stack: [
				{
					name: 'Next.js',
					badgeColor: 'secondary',
				},
				{
					name: 'Postgresql',
					badgeColor: 'primary',
				},
				{
					name: 'Supabase',
					badgeColor: 'success',
				},
				{
					name: 'Typescript',
					badgeColor: 'info',
				},
				{
					name: 'Tailwindcss',
					badgeColor: 'primary',
				},
			],
		},
		links: {
			demo: 'http://nextjs-iakn-kupang.vercel.app/',
		},
		badge: {
			text: 'Active',
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
			stack: [
				{
					name: 'GO',
					badgeColor: 'info',
				},
				{
					name: 'COlly Framework',
					badgeColor: 'accent',
				},
			],
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
			stack: [
				{
					name: 'Next.js',
					badgeColor: 'secondary',
				},
				{
					name: 'Mongodb',
					badgeColor: 'success',
				},
				{
					name: 'Auth0',
					badgeColor: 'warning',
				},
				{
					name: 'Typescript',
					badgeColor: 'info',
				},
				{
					name: 'Tailwindcss',
					badgeColor: 'primary',
				},
			],
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
			stack: [
				{
					name: 'React.js',
					badgeColor: 'primary',
				},
				{
					name: 'Ant Design',
					badgeColor: 'accent',
				},
				{
					name: 'Tailwindcss',
					badgeColor: 'primary',
				},
			],
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
			stack: [
				{
					name: 'Next.js',
					badgeColor: 'secondary',
				},
				{
					name: 'Typescript',
					badgeColor: 'info',
				},
				{
					name: 'Tailwindcss',
					badgeColor: 'primary',
				},
			],
		},
		links: {
			demo: 'https://nextjs-weather-app-lemon.vercel.app/',
			code: 'https://github.com/jeheskielSunloy77/nextjs-weather-app',
		},
	},
	{
		title: 'Cross Platform Coffee Shop App',
		desc:
			'A cross platform mobile application for a coffee shop, build with React Native, Typescript, and Tailwindcss.',
		img: coffeeShopAppImage,
		details: {
			status: 'Work on Progress',
			code: 'Public',
			demo: 'Unavailable',
			stack: [
				{
					name: 'React Native',
					badgeColor: 'primary',
				},
				{
					name: 'Expo.js',
					badgeColor: 'secondary',
				},
				{
					name: 'Supabase',
					badgeColor: 'success',
				},
				{
					name: 'Typescript',
					badgeColor: 'info',
				},
				{
					name: 'Tailwindcss',
					badgeColor: 'primary',
				},
			],
		},
		links: {
			code: 'https://github.com/jeheskielSunloy77/react-native-coffee-shop',
		},
		badge: {
			text: 'New',
		},
	},
]
