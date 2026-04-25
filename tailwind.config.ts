
export default {
    content: [
        "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                body: '#fff18f',
                bg: '#8db9e8',
                blueAccent: '#063970',
                error: '#ff0000',
            },
             fontFamily: {
                sans: ['Roboto', 'sans-serif'],
            },
        },
    },
}