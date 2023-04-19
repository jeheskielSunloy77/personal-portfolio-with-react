import { useContext, useEffect, useRef, useState } from 'react'
import { AppContext } from '../utils/AppContext'

export default function useSetOnScreen<T = HTMLDivElement>(page: string) {
	const ref = useRef<T>(null)
	const [isIntersecting, setIntersecting] = useState(false)

	const observer = new IntersectionObserver(([entry]) =>
		setIntersecting(entry.isIntersecting)
	)

	useEffect(() => {
		observer.observe(ref.current as HTMLElement)

		return () => {
			observer.disconnect()
		}
	}, [])

	const { setBlockVisibility } = useContext(AppContext)
	useEffect(() => {
		setBlockVisibility((prev) => {
			if (isIntersecting && !prev.includes(page)) return [...prev, page]
			else return prev.filter((item) => item !== page)
		})
	}, [isIntersecting])

	return ref
}
