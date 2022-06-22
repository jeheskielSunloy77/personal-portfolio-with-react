import React from "react"
import "./Skills/SkillsStyles.scss"
export function Card({ title, subtitle, desc, logo }) {
	return (
		<div class="card relative w-[150px] h-[150px] bg-gray-200 dark:bg-gray-700 rounded-xl mx-auto">
			<div class="absolute bottom-0 right-0 w-full h-full flex justify-center items-center flex-col m-0 pb-8">
				<h1 class="font-semibold m-0 p-0 text-high text-xl text-center">
					{title}
				</h1>
				<p className="text-lowest text-center text-xs">{subtitle}</p>
				<p class="text-low text-base text-center">{desc}</p>
			</div>
			{logo}
		</div>
	)
}
export function CardLogo({ src, backgroud, svg }) {
	return (
		<div
			class={`${
				backgroud ? backgroud : "bg-gray-100 dark:bg-gray-800"
			} layerTop absolute bottom-0 right-0 w-full h-full flex justify-center items-center bg-transparant rounded-xl transition-all duration-500`}
		>
			{svg ? (
				svg
			) : (
				<img
					src={src}
					alt=""
					className="z-10 transition-all duration-500 w-full rounded-lg"
				/>
			)}
		</div>
	)
}
