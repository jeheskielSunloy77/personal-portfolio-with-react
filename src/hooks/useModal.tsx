import { useState } from 'react'

export default function useModal() {
	const [isClosing, setIsClosing] = useState(false)
	const [isOpen, setIsOpen] = useState(false)

	const closeWithAnimation = () => {
		setIsClosing(true)
		setTimeout(() => {
			setIsOpen(false)
			setIsClosing(false)
		}, 500)
	}

	const toggleModal = () => {
		if (isOpen) {
			return closeWithAnimation()
		}
		setIsOpen(true)
	}

	return { isClosing, isOpen, toggleModal }
}
