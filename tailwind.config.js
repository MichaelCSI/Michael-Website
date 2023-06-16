/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            textColor: {
                primary: '#fffff0'
            },
            colors: {
                'green1': '#85fea1',
                'green2': '#41aa4a',
                'green3': '#007417'
            }
        }
    },
    plugins: []
}
