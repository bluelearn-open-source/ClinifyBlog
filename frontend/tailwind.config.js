module.exports = {
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		".src/components/**/*.{js,ts,jsx,tsx}",
		"src/components/*.{js,ts,jsx,tsx}"
	],

	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
		  colors: {
			"bg": "#1b3940",
			"bg-accent": "#484a4d",
		  },
		  fontFamily:{
"mulish":['Mulish']
		  }
		},
	  },
	variants: {
		extend: {},
	},
	plugins: [],
};
