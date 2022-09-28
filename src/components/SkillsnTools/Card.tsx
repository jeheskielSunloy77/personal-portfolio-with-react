import { ReactNode } from 'react'

export const Card = ({ title, subtitle, desc, logo }: Card) => (
	<div className='group relative w-24 h-24 sm:w-[150px] sm:h-[150px] bg-gray-100 dark:bg-gray-700 shadow-2xl rounded-xl mx-auto'>
		<div className='hidden sm:flex absolute bottom-0 right-0 w-full h-full justify-center items-center flex-col m-0 pb-8'>
			<h1 className='font-semibold m-0 p-0 text-high text-xl text-center'>
				{title}
			</h1>
			<p className='text-low text-center text-xs'>{subtitle}</p>
			<p className='text-medium text-base text-center'>{desc}</p>
		</div>
		{logo}
	</div>
)

export const CardLogo = ({ src, backgroud, svg, className }: CardLogo) => (
	<div
		className={`${
			backgroud ? backgroud : 'bg-gray-200 dark:bg-gray-800 p-5'
		} sm:group-hover:h-[40px] group-hover:p-0 absolute bottom-0 right-0 w-full h-full flex justify-center items-center bg-transparant rounded-xl transition-all duration-500`}
	>
		{svg ? (
			svg
		) : (
			<img
				src={src}
				alt='Skill or Tool Logo'
				loading='lazy'
				className={
					className +
					' sm:group-hover:w-[40px] z-10 transition-all duration-500 w-full rounded-lg  object-contain'
				}
			/>
		)}
	</div>
)
interface Card {
	title: string
	subtitle: string
	desc: string
	logo: ReactNode
}
interface CardLogo {
	src?: string
	backgroud?: string
	svg?: ReactNode
	className?: string
}
