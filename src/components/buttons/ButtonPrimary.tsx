import { OnClickButton } from 'src/utils/types'

const ButtonPrimary = ({ text, onClick }: ButtonPrimary) => (
	<button
		onClick={onClick}
		type='button'
		className='text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-cyan-600 dark:hover:bg-cyan-700 focus:outline-none dark:focus:ring-cyan-800'
	>
		{text}
	</button>
)
interface ButtonPrimary {
	text: string
	onClick?: OnClickButton
}

export default ButtonPrimary
