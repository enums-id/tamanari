/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Source Code Pro', 'sans-serif'],
				serif: ['Cormorant', 'serif']
			},
			colors: {
				primary: '#044421',
				secondary: '#44403C',
				cta: '#CA8A04',
				bg: '#FAFAF9',
				text: '#0C0A09',
				hero: '#044421'
			}
		}
	},
	plugins: []
};
