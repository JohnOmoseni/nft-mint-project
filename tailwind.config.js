/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,jsx}",
		"./components/**/*.{js,jsx}",
		"./app/**/*.{js,jsx}",
		"./src/**/*.{js,jsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				body: "#111",
				"br-clr": "#00CC52",
				"light-green": "#E6FFF0",
				"btn-clr": "#00FF66",
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "3px",
			},
			boxShadow: {
				100: "0px 2px 5px rgba(0,0,0, 0.3)",
				200: "1px 3px 10px -2px rgba(0,0,0, 0.5)",
			},
			fontFamily: {
				familybold: ["Gilroy-Bold", "Arial", "sans-serif"],
				familymedium: ["Gilroy-Medium", "Arial", "sans-serif"],
				familylight: ["Gilroy-Light", "Arial", "sans-serif"],
			},
			fontSize: {
				tiny: ["0.65rem", { lineHeight: "1" }],
				sm: ["0.8rem", { lineHeight: "1.3" }],
				base: ["0.9rem", { lineHeight: "1.6" }],
				subtitle: ["clamp(1.2rem, 1vw, 20px)", { lineHeight: "1.2" }],
				secondary: ["clamp(1.5rem, 3vw + 1rem, 40px) ", { lineHeight: "1.2" }],
				section: ["clamp(40px, 5vw + 1rem, 60px) ", { lineHeight: "1" }],
				primary: ["clamp(60px, 10vw + 1rem, 100px)", { lineHeight: "1" }],
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [
		function ({ addUtilities }) {
			const newUtilities = {
				".h-dvh": {
					height: "100dvh",
				},
				".transition-sm": {
					transition: "all 0.3s linear",
				},
				".clip-circle": {
					clipPath: "circle()",
				},
				".green": {
					color: "#00FF66",
				},
				".card-shadow ": {
					boxShadow:
						"1px 2px 5px rgba(0, 0, 0, 0.3), inset 0px 2px 30px rgba(253, 246, 220, 0.5)",
				},
			};

			addUtilities(newUtilities, ["responsive", "hover"]);
		},
		require("tailwindcss-animate"),
	],
};
