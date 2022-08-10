import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	esbuild: {
		logOverride: { 'this-is-undefined-in-esm': 'silent' },
	},
})
