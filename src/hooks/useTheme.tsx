import { useCallback, useEffect, useState } from 'react'

const useTheme = () => {
	const [theme, setTheme] = useState<Theme>('dark')

	useEffect(() => {
		const storedTheme = localStorage.getItem('theme') as Theme | null
		storedTheme && setTheme(storedTheme)
	}, [])

	const themeToSwitch = theme === 'dark' ? 'light' : 'dark'

	const toggleColorMode = useCallback(
		() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark')),
		[]
	)

	useEffect(() => {
		const root = window.document.documentElement
		root.classList.remove(themeToSwitch)
		root.classList.add(theme)
	}, [theme])

	const switchTheme = () => {
		toggleColorMode()
		localStorage.setItem('theme', themeToSwitch)
	}

	return { switchTheme, theme }
}

type Theme = 'light' | 'dark'

export default useTheme
