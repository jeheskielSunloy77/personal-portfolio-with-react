import { useEffect, useRef, useState } from 'react'
import { blockVisibility } from '../stores/appStores'

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

	useEffect(() => {
		const prev = blockVisibility.get()
		blockVisibility.set(
			isIntersecting && !prev.includes(page)
				? [...prev, page]
				: prev.filter((item) => item !== page)
		)
	}, [isIntersecting])

	return ref
}
