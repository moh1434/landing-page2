module.exports = {
	purge: {
		content: ['./public/index.html']
	},

	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			maxWidth: {
				'8xl': "1300px",
				'xs-p': '21rem',
				'72': '18rem',
			},
			boxShadow: {
				'my': '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}