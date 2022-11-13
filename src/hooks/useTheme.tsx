import { useEffect, useState } from 'react'

const useTheme = () => {
	const [theme, setTheme] = useState('dark')
	const changeTheme = theme === 'light' ? 'dark' : 'light'
	useEffect(() => {
		const root = window.document.documentElement
		root.classList.remove(changeTheme)
		root.classList.add(theme)
	}, [theme, changeTheme])

	return { changeTheme, setTheme, theme }
}

export default useTheme
