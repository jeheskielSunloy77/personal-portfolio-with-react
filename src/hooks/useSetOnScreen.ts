import { useContext, useEffect, useRef } from 'react'
import { AppContext } from '../utils/AppContext'
import useOnScreen from './useOnScreen'

const useSetOnScreen = (page: string) => {
	const ref: any = useRef()
	const isVisible = useOnScreen(ref)
	const { setBlockVisibility } = useContext(AppContext)
	useEffect(() => {
		setBlockVisibility((prev) => {
			if (isVisible && !prev.includes(page)) return [...prev, page]
			else return prev.filter((item) => item !== page)
		})
	}, [isVisible])

	return ref
}

export default useSetOnScreen
