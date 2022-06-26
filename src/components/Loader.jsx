import { useContext } from "react"
import { AppContext } from "../contexts/AppContext"
import Typewriter from "typewriter-effect"
export default function Loader() {
	const { setLoader } = useContext(AppContext)
	return (
		<div
			className={`font-consolas text-xl sm:text-4xl text-[#C6C6C6] bg-[#1E1E1E] h-screen w-screen fixed z-50 centerAll`}
		>
			<div className="min-h-[240px] min-w-[310px] sm:min-w-[555px]">
				<Typewriter
					options={{
						autoStart: true,
						delay: 30,
					}}
					onInit={typewriter => {
						typewriter
							.typeString(
								`<span class="dataType">function</span> <span class="functions">myWeb</span><span class="dataType">() {</span><br>`
							)
							.typeString(
								`<span class="dataType">let</span> <span class="variables">portfolio</span> = <span class="functions">{</span>...<span class="variables">myLive</span><span class="functions">}</span><br>`
							)
							.typeString(
								`<span class="variables">console</span>.<span class="functions">log</span>(<span class="variables">portfolio</span>)<br>`
							)
							.typeString(
								`<span class="variables">console</span>.<span class="functions">log</span>(<span class="strings">"WELLCOME!"</span>)<br>`
							)
							.typeString(`<span class="dataType">}</span> <br>`)
							.typeString(`<span class="functions">myWeb()</span>`)
							.pauseFor(1000)
							.callFunction(() => setLoader(false))
							.start()
					}}
				/>
			</div>
		</div>
	)
}
