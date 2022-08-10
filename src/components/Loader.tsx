import { useContext } from 'react'
import Typewriter from 'typewriter-effect'
import { AppContext } from '../utils/AppContext'

const Loader = () => {
	const { setLoader } = useContext(AppContext)

	return (
		<div className='font-consolas text-xl sm:text-4xl text-[#C6C6C6] bg-[#1E1E1E] h-screen w-screen fixed z-50 centerAll'>
			<div className='min-h-[240px] w-[150px] sm:w-[260px]'>
				<Typewriter
					options={{
						autoStart: true,
						delay: 10,
					}}
					onInit={(typewriter) => {
						typewriter
							.typeString(
								'<span class="text-purple-600">while</span><span class="text-purple-600">(</span><span class="text-[#8dc4dd]">alive</span><span class="text-purple-600">)</span><span class="text-purple-600">{</span><br>'
							)
							.typeString(
								'<span class="text-[$d4d3a6] ml-16">eat</span><span class="text-blue-600">()</span><br>'
							)
							.typeString(
								'<span class="text-[$d4d3a6] ml-16">sleep</span><span class="text-blue-600">()</span><br>'
							)
							.typeString(
								'<span class="text-[$d4d3a6] ml-16">code</span><span class="text-blue-600">()</span><br>'
							)
							.typeString(
								'<span class="text-[$d4d3a6] ml-16">repeat</span><span class="text-blue-600">()</span><br>'
							)
							.typeString('<span class="text-purple-600">}</span>')
							.pauseFor(1000)
							.callFunction(() => setLoader(false))
							.start()
					}}
				/>
			</div>
		</div>
	)
}

export default Loader
