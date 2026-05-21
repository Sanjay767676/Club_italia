/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#0a0a0a',
                foreground: '#ffffff',
                accent: '#e5e5e5',
                muted: '#737373',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
                luxury: ['Montserrat', 'sans-serif'],
            },
            letterSpacing: {
                tighter: '-0.05em',
                widest: '0.2em',
            },
        },
    },
    plugins: [],
}
