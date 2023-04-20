import {
	Dispatch,
	FormEventHandler,
	MouseEvent,
	MouseEventHandler,
	RefObject,
	SetStateAction,
} from 'react'
import { Url } from 'url'

type SetBoolean = Dispatch<SetStateAction<boolean>>
type SetString = Dispatch<SetStateAction<string>>
type SetNumber = Dispatch<SetStateAction<number>>
type OnClickButton = MouseEventHandler<HTMLButtonElement>
type OnClickAnchor = MouseEventHandler<HTMLAnchorElement>
type MouseEventButton = MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
type OnSubmitButton = FormEventHandler<HTMLButtonElement>
type OnSubmitAnchor = FormEventHandler<HTMLAnchorElement>
type OnSubmitForm = FormEventHandler<HTMLElement> | undefined
type Href = Url['href']
type RefDiv = RefObject<HTMLDivElement>
type ComponentColors =
	| 'primary'
	| 'secondary'
	| 'accent'
	| 'error'
	| 'warning'
	| 'success'
	| 'info'

interface Project {
	title: string
	desc: string
	img: string
	details: {
		status: 'Stable' | 'Work on Progress' | 'Final' | 'Discontinued'
		demo: 'Available' | 'Prototype' | 'Unavailable'
		code: 'Public' | 'Private'
		stack: {
			name: string
			badgeColor: ComponentColors
		}[]
	}
	links: {
		demo?: string
		code?: string
	}
	badge?: { text: string; color?: ComponentColors }
}

export type {
	Project,
	ComponentColors,
	SetBoolean,
	SetString,
	SetNumber,
	OnClickAnchor,
	OnSubmitAnchor,
	OnClickButton,
	MouseEventButton,
	OnSubmitButton,
	OnSubmitForm,
	Href,
	RefDiv,
}
