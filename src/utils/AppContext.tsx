import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useState,
} from 'react'
import useTheme from '../hooks/useTheme'
import { SetBoolean } from './types'

export const AppContext = createContext<AppContext>({} as AppContext)

export const AppProvider = ({ children }: { children: ReactNode }) => {
	const [blockVisibility, setBlockVisibility] = useState<string[]>([])
	const [loading, setLoading] = useState(true)
	const { switchTheme, theme } = useTheme()

	return (
		<AppContext.Provider
			value={{
				blockVisibility,
				setBlockVisibility,
				switchTheme,
				theme,
				loading,
				setLoading,
			}}
		>
			{children}
			<style>{`
				:root {
 				color-scheme: ${theme};
		}
			`}</style>
		</AppContext.Provider>
	)
}
interface AppContext {
	setBlockVisibility: Dispatch<SetStateAction<string[]>>
	blockVisibility: string[]
	switchTheme: () => void
	theme: 'light' | 'dark'
	loading: boolean
	setLoading: SetBoolean
}
