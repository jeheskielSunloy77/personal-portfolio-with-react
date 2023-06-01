import { atom } from 'nanostores'

export const theme = atom<Theme>(
	(localStorage.getItem('theme') ?? 'light') as Theme
)
export const blockVisibility = atom<string[]>([])

export const isAppLoading = atom(true)

type Theme = 'dark' | 'light'
