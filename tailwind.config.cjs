/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				rounded: 'Rounded',
				rubik: 'Rubik'
			},
			colors: {
				dark: '#121420',
				logo: '#FFBD00'
			}
		}
	},
	plugins: []
};
