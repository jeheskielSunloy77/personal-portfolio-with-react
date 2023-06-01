import type {
	Dispatch,
	FormEventHandler,
	MouseEvent,
	MouseEventHandler,
	RefObject,
	SetStateAction,
} from 'react'

type SetBoolean = Dispatch<SetStateAction<boolean>>
type SetString = Dispatch<SetStateAction<string>>
type SetNumber = Dispatch<SetStateAction<number>>
type OnClickButton = MouseEventHandler<HTMLButtonElement>
type OnClickAnchor = MouseEventHandler<HTMLAnchorElement>
type MouseEventButton = MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
type OnSubmitButton = FormEventHandler<HTMLButtonElement>
type OnSubmitAnchor = FormEventHandler<HTMLAnchorElement>
type OnSubmitForm = FormEventHandler<HTMLElement> | undefined
type Href = string
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
	desc: {
		short: string
		description: string
		list?: string[]
		aditional?: string
	}
	img: string
	video: {
		src: string
		isPortrait?: boolean
	}
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
