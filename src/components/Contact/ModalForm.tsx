import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import type { MouseEventButton } from 'src/utils/types'
import Modal, { ModalProps } from '../Modal'
import Button from '../buttons/Button'

type ModalFormProps = Pick<ModalProps, 'toggleModal' | 'isClosing'>

const ModalForm = ({ toggleModal, isClosing }: ModalFormProps) => {
	const formRef = useRef<HTMLFormElement>(null)

	const sendMessage = (e: MouseEventButton) => {
		e.preventDefault()
		emailjs
			.sendForm(
				'gmail',
				'portfolioTemplate',
				formRef.current || '',
				'YxM46gqam9J7VniFJ'
			)
			.then(
				(result) => {
					if (result.status === 200) {
						alert('Message sent!')

						return toggleModal()
					}
					alert('Message failed to send!')
				},
				(error) => {
					console.error(error.text)
				}
			)
	}

	return (
		<Modal
			title='Send Me a Message'
			className='sm:w-[50vw]'
			toggleModal={toggleModal}
			isClosing={isClosing}
		>
			<form ref={formRef}>
				<div className='p-6 space-y-6'>
					<div className='items-center -mx-2 md:flex'>
						<div className='w-full mx-2'>
							<label className='block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200'>
								Name
							</label>

							<input
								className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 border-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40'
								type='text'
								name='name'
								required
							/>
						</div>

						<div className='w-full mx-2 mt-4 md:mt-0'>
							<label className='block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200'>
								E-mail
							</label>

							<input
								className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 border-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40'
								type='email'
								name='email'
								required
							/>
						</div>
					</div>

					<div className='w-full mt-4'>
						<label className='block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200'>
							Message
						</label>

						<textarea
							className='block w-full h-40 px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 border-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40'
							name='message'
							required
						></textarea>
					</div>
				</div>
				<div className='flex items-center p-6 space-x-2 rounded-b'>
					<Button onClick={(e) => sendMessage(e)}>Send Message!</Button>
					<Button onClick={toggleModal} color='secondary'>
						Cancel
					</Button>
				</div>
			</form>
		</Modal>
	)
}

export default ModalForm
