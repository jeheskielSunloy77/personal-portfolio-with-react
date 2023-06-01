import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { createPortal } from 'react-dom'

export type ModalProps = {
	children: React.ReactNode
	isClosing: boolean
	toggleModal: () => void
	className?: string
} & (
	| { title: ReactNode; header?: never }
	| { title?: never; header: ReactNode }
)

export default function Modal({
	isClosing,
	children,
	toggleModal,
	title,
	header,
	className,
}: ModalProps) {
	return createPortal(
		<div className='fixed z-40 w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900 bg-opacity-50 flex flex-col items-center justify-center'>
			<motion.form
				initial={{
					opacity: 0,
					y: 1100,
					scale: 0,
				}}
				animate={
					isClosing
						? { opacity: 0, scale: 0.5, y: 1100 }
						: { opacity: 1, scale: 1, y: 0 }
				}
				transition={{
					type: 'spring',
					duration: 1,
				}}
				className={`${className} relative p-4 bg-white rounded-lg shadow dark:bg-gray-900 border dark:border-gray-800 border-gray-200`}
			>
				{header ? (
					header
				) : (
					<div className='flex justify-between items-center p-5 rounded-t'>
						{typeof title === 'string' ? (
							<h3 className='text-xl font-bold text-gray-900 dark:text-gray-100'>
								{title}
							</h3>
						) : (
							title
						)}
						<button
							onClick={toggleModal}
							type='button'
							className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
						>
							<svg
								className='w-5 h-5'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fillRule='evenodd'
									d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
									clipRule='evenodd'
								></path>
							</svg>
						</button>
					</div>
				)}
				{children}
			</motion.form>
		</div>,
		document.getElementById('portal') as HTMLElement
	)
}
