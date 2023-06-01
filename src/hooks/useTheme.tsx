import { useStore } from '@nanostores/react'
import { theme } from '../stores/appStores'

const useTheme = () => {
	const $theme = useStore(theme)

	const toggleTheme = () => {
		const themeToChange = $theme === 'light' ? 'dark' : 'light'
		theme.set(themeToChange)
		if (themeToChange === 'dark') {
			document.documentElement.classList.add('dark')
			document.documentElement.style.colorScheme = 'dark'
		} else {
			document.documentElement.classList.remove('dark')
			document.documentElement.style.colorScheme = 'light'
		}

		localStorage.setItem('theme', themeToChange)
	}

	return { theme: $theme, toggleTheme }
}

export default useTheme
