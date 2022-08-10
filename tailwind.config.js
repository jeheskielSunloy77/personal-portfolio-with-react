/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				staatliches: "Staatliches, cursive",
				consolas: "Consolas, sans-serif",
			},
		},
	},
	plugins: [],
}
