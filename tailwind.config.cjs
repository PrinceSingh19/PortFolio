/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

	theme: {
		extend: {
			colors: {
				textColor: "#64ffda",
			},
			backgroundColor: {
				neon: "#64ffda",
			},
			borderColor: {
				neon: "#64ffda",
			},
		},
	},
	plugins: [],
};
