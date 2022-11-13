import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useState,
} from 'react'
import useTheme from '../hooks/useTheme'
import { SetBoolean, SetString } from './types'

// import background from "../assets/backgrounds/background.svg"
export const AppContext = createContext<AppContext>({} as AppContext)

export const AppProvider = ({ children }: { children: ReactNode }) => {
	const [blockVisibility, setBlockVisibility] = useState<string[]>([])
	const [loading, setLoading] = useState(true)
	const { changeTheme, setTheme } = useTheme()

	return (
		<AppContext.Provider
			value={{
				blockVisibility,
				setBlockVisibility,
				changeTheme,
				setTheme,
				loading,
				setLoading,
			}}
		>
			<div
				className={
					'bg-gradient-to-r from-gray-200 to-white dark:from-[#042c41] dark:to-gray-900'
				}
			>
				{/* <div style={{ backgroundImage: `url(${background})` }}> */}
				{children}
				{/* </div> */}
			</div>
		</AppContext.Provider>
	)
}
interface AppContext {
	setBlockVisibility: Dispatch<SetStateAction<string[]>>
	blockVisibility: string[]
	changeTheme: string
	setTheme: SetString
	loading: boolean
	setLoading: SetBoolean
}
