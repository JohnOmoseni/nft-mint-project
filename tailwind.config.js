/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        body: "#fffaea",
        "br-clr": "#d9ffe8",
      },
      boxShadow: {
        100: "0px 2px 5px rgba(0,0,0, 0.3)",
        200: "1px 3px 10px -2px rgba(0,0,0, 0.5)",
      },
      borderRadius: {
        sm: "3px",
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
        section: ["clamp(40px, 5vw + 1rem, 80px) ", { lineHeight: "1" }],
        primary: ["clamp(60px, 10vw + 1rem, 120px)", { lineHeight: "1" }],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".h-100dvh": {
          height: "100dvh",
        },
        ".transition-sm": {
          transition: "all 0.3s linear",
        },
        ".clip-circle": {
          clipPath: "circle()",
        },
        ".green": {
          color: "#00732E",
        },
        ".card-shadow ": {
          boxShadow:
            "1px 2px 5px rgba(0, 0, 0, 0.3), inset 0px 2px 30px rgba(253, 246, 220, 0.5)",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
