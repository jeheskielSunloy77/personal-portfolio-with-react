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

export type {
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
