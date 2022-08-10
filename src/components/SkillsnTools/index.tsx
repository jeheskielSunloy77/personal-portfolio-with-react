import { useContext } from 'react'
import { AppContext } from '../../utils/AppContext'
import { Card, CardLogo } from './Card'

import javascriptImg from '../../assets/icons/javascript.svg'
import mongodbImg from '../../assets/icons/mongodb.svg'
import nodejsImg from '../../assets/icons/nodejs.svg'
import postgresqlImg from '../../assets/icons/postgresql.svg'
import reactImg from '../../assets/icons/react.svg'
import sassImg from '../../assets/icons/sass.svg'
import tailwindImg from '../../assets/icons/tailwind.svg'
import typescriptImg from '../../assets/icons/typescript.svg'

import auth0Img from '../../assets/icons/auth0.svg'
import eslintImg from '../../assets/icons/eslint.svg'
import supabaseImg from '../../assets/icons/supabase.svg'
import thunderclientImg from '../../assets/icons/thunderclient.svg'
import ubuntuImg from '../../assets/icons/ubuntu.svg'
import vscodeImg from '../../assets/icons/vscode.svg'
// import gimpImg from "../../assets/icons/gimp.svg"
import canvaImg from '../../assets/icons/canva.svg'

const SkillsNTools = () => {
	const { skillsRef, changeTheme } = useContext(AppContext)

	const githubLogo = (
		<svg
			className='group-hover:w-[40px] z-10 transition-all duration-500 w-full rounded-lg'
			xmlns='http://www.w3.org/2000/svg'
			width='200'
			height='200'
			viewBox='0 0 1024 1024'
			fill='none'
		>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z'
				transform='scale(64)'
				fill={changeTheme === 'dark' ? '#141414' : '#f5f5f5'}
			/>
		</svg>
	)
	const nextjsLogo = (
		<svg
			className='group-hover:w-[40px] z-10 transition-all duration-500 w-full rounded-lg'
			xmlns='http://www.w3.org/2000/svg'
			width='256px'
			height='256px'
			viewBox='0 0 256 256'
			version='1.1'
			preserveAspectRatio='xMidYMid'
		>
			<g>
				<path
					d='M119.616813,0.0688905149 C119.066276,0.118932037 117.314565,0.294077364 115.738025,0.419181169 C79.3775171,3.69690087 45.3192571,23.3131775 23.7481916,53.4631946 C11.7364614,70.2271045 4.05395894,89.2428829 1.15112414,109.384595 C0.12512219,116.415429 0,118.492153 0,128.025062 C0,137.557972 0.12512219,139.634696 1.15112414,146.665529 C8.10791789,194.730411 42.3163245,235.11392 88.7116325,250.076335 C97.0197458,252.753556 105.778299,254.580072 115.738025,255.680985 C119.616813,256.106338 136.383187,256.106338 140.261975,255.680985 C157.453763,253.779407 172.017986,249.525878 186.382014,242.194795 C188.584164,241.068861 189.00958,240.768612 188.709286,240.518404 C188.509091,240.36828 179.124927,227.782837 167.86393,212.570214 L147.393939,184.922273 L121.743891,146.965779 C107.630108,126.098464 96.0187683,109.034305 95.9186706,109.034305 C95.8185728,109.009284 95.7184751,125.873277 95.6684262,146.465363 C95.5933529,182.52028 95.5683284,183.971484 95.1178886,184.82219 C94.4672532,186.048207 93.9667644,186.548623 92.915738,187.099079 C92.114956,187.499411 91.4142717,187.574474 87.6355816,187.574474 L83.3063539,187.574474 L82.1552297,186.848872 C81.4044966,186.373477 80.8539589,185.747958 80.4785924,185.022356 L79.9530792,183.896422 L80.0031281,133.729796 L80.0782014,83.5381493 L80.8539589,82.5623397 C81.25435,82.0369037 82.1051808,81.3613431 82.7057674,81.0360732 C83.7317693,80.535658 84.1321603,80.4856165 88.4613881,80.4856165 C93.5663734,80.4856165 94.4172043,80.6857826 95.7434995,82.1369867 C96.1188661,82.5373189 110.007429,103.454675 126.623656,128.650581 C143.239883,153.846488 165.962072,188.250034 177.122972,205.139048 L197.392766,235.839522 L198.418768,235.163961 C207.502639,229.259062 217.112023,220.852086 224.719453,212.09482 C240.910264,193.504394 251.345455,170.835585 254.848876,146.665529 C255.874878,139.634696 256,137.557972 256,128.025062 C256,118.492153 255.874878,116.415429 254.848876,109.384595 C247.892082,61.3197135 213.683675,20.9362052 167.288368,5.97379012 C159.105376,3.32158945 150.396872,1.49507389 140.637341,0.394160408 C138.234995,0.143952798 121.693842,-0.131275573 119.616813,0.0688905149 L119.616813,0.0688905149 Z M172.017986,77.4831252 C173.219159,78.0836234 174.195112,79.2345784 174.545455,80.435575 C174.74565,81.0861148 174.795699,94.9976579 174.74565,126.348671 L174.670577,171.336 L166.73783,159.17591 L158.780059,147.01582 L158.780059,114.313685 C158.780059,93.1711423 158.880156,81.2862808 159.030303,80.7108033 C159.430694,79.3096407 160.306549,78.2087272 161.507722,77.5581875 C162.533724,77.0327515 162.909091,76.98271 166.837928,76.98271 C170.541544,76.98271 171.19218,77.0327515 172.017986,77.4831252 Z'
					fill={changeTheme === 'dark' ? '#141414' : '#f5f5f5'}
				/>
			</g>
		</svg>
	)
	const vercelLogo = (
		<svg
			className='group-hover:w-[40px] z-10 transition-all duration-500 w-full rounded-lg'
			xmlns='http://www.w3.org/2000/svg'
			width='200'
			height='200'
			viewBox='0 0 512 512'
		>
			<path
				fillRule='evenodd'
				d='M256,48,496,464H16Z'
				fill={changeTheme === 'dark' ? '#141414' : '#f5f5f5'}
			/>
		</svg>
	)

	return (
		<div ref={skillsRef} id='skills' className='myContainer'>
			<h1 className='mb-10 text-intro text-center sm:text-left'>
				<span className='text-cyan-500'>Skills</span> I Have
				<br />
				And <span className='text-cyan-500'>Tools</span> I Use
			</h1>
			<div className='smallGrid items-center justify-center'>
				<Card
					title='Javascript'
					subtitle='programing language'
					desc='bread and butter'
					logo={<CardLogo src={javascriptImg} backgroud='bg-[#f7df1e]' />}
				/>
				<Card
					title='ReactJS'
					subtitle='JS library'
					desc='first love'
					logo={<CardLogo src={reactImg} />}
				/>

				<Card
					title='Next.js'
					subtitle='fullstack framework'
					desc='all you need'
					logo={<CardLogo svg={nextjsLogo} />}
				/>
				<Card
					title='Typescript'
					subtitle='programing language'
					desc='stockholm syndrome'
					logo={<CardLogo src={typescriptImg} backgroud='bg-[#3178c6]' />}
				/>
				<Card
					title='Mongodb'
					subtitle='database'
					desc='love and hate'
					logo={<CardLogo src={mongodbImg} />}
				/>
				<Card
					title='PostgreSQL'
					subtitle='database'
					desc='old reliable'
					logo={<CardLogo src={postgresqlImg} />}
				/>
				<Card
					title='NodeJS'
					subtitle='JS runtime'
					desc='JS backbone'
					logo={<CardLogo src={nodejsImg} />}
				/>
				<Card
					title='Tailwind'
					subtitle='css framework'
					desc='my secret affair'
					logo={<CardLogo src={tailwindImg} />}
				/>
				<Card
					title='Sass'
					subtitle='css preprocessor'
					desc='sexy.css'
					logo={<CardLogo src={sassImg} />}
				/>

				<Card
					title='VS Code'
					subtitle='code edditor'
					desc='playground'
					logo={<CardLogo src={vscodeImg} />}
				/>
				<Card
					title='Ubuntu'
					subtitle='operating system'
					desc='work, work, work'
					logo={<CardLogo src={ubuntuImg} />}
				/>
				<Card
					title='Github'
					subtitle='version control'
					desc='pull, push, commit'
					logo={<CardLogo svg={githubLogo} />}
				/>
				<Card
					title='ESlint'
					subtitle='code analyzer'
					desc='annoying little thing'
					logo={<CardLogo src={eslintImg} />}
				/>
				<Card
					title='Supabase'
					subtitle='BaaS service'
					desc="shouldn't be free"
					logo={<CardLogo src={supabaseImg} />}
				/>
				<Card
					title='Auth0'
					subtitle='authentication platform'
					desc='guardian angel'
					logo={<CardLogo src={auth0Img} />}
				/>
				<Card
					title='Thunder Client'
					subtitle='REST tester'
					desc='restless api'
					logo={<CardLogo src={thunderclientImg} />}
				/>
				<Card
					title='Vercel'
					subtitle='Hosting Provider'
					desc='easy like 123'
					logo={<CardLogo svg={vercelLogo} />}
				/>
				<Card
					title='Canva'
					subtitle='media edditor'
					desc='template, copy, paste'
					logo={<CardLogo src={canvaImg} />}
				/>
			</div>
		</div>
	)
}

export default SkillsNTools
