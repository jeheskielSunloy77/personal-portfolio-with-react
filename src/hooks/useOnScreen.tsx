import { RefObject, useEffect, useState } from 'react'

const useOnScreen = (ref: RefObject<HTMLElement>) => {
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

	return isIntersecting
}

export default useOnScreen
