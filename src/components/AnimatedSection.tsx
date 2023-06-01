import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
export default function AnimatedSection({ children }: { children: ReactNode }) {
	return (
		<motion.div
			initial={{ y: 50, opacity: 0 }}
			transition={{ duration: 1, type: 'spring' }}
			whileInView={{ y: 0, opacity: 1 }}
			viewport={{ once: true }}
		>
			{children}
		</motion.div>
	)
}
