/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                graphite: {
                    50: "#f3f2f2",
                    100: "#e6e5e6",
                    200: "#cdcbcc",
                    300: "#b4b1b3",
                    400: "#9b9799",
                    500: "#827d80",
                    600: "#686466",
                    700: "#4e4b4d",
                    800: "#343233",
                    900: "#1a191a",
                    950: "#121112"
                },
                grey: {
                    50: "#f3f2f2",
                    100: "#e6e5e5",
                    200: "#cdcbcb",
                    300: "#b4b1b1",
                    400: "#9b9797",
                    500: "#827d7d",
                    600: "#686464",
                    700: "#4e4b4b",
                    800: "#343232",
                    900: "#1a1919",
                    950: "#121111"
                },
                silver: {
                    50: "#f4f3f1",
                    100: "#e8e7e3",
                    200: "#d1cec7",
                    300: "#bab6ab",
                    400: "#a39d8f",
                    500: "#8c8573",
                    600: "#706a5c",
                    700: "#545045",
                    800: "#38352e",
                    900: "#1c1b17",
                    950: "#141310"
                },
                charcoal: {
                    50: "#f2f1f3",
                    100: "#e4e3e8",
                    200: "#cac8d0",
                    300: "#afacb9",
                    400: "#9591a1",
                    500: "#7a758a",
                    600: "#625e6e",
                    700: "#494653",
                    800: "#312f37",
                    900: "#18171c",
                    950: "#111013"
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Outfit', 'sans-serif'],
            },
            animation: {
                ripple: "ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite",
            },
            keyframes: {
                ripple: {
                    "0%, 100%": {
                        transform: "translate(-50%, -50%) scale(1)",
                    },
                    "50%": {
                        transform: "translate(-50%, -50%) scale(0.9)",
                    },
                },
            },
        },
    },
    plugins: [],
}
