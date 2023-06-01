import { atom } from 'nanostores'

export const theme = atom<Theme>(
	(typeof window !== 'undefined'
		? localStorage.getItem('theme')
		: 'dark') as Theme
)

export const blockVisibility = atom<string[]>([])

export const isAppLoading = atom(true)

type Theme = 'dark' | 'light'
