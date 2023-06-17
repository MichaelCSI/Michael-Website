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
                'green3': '#007417',
                'galaxy1': '#00008b',
                'galaxy2': '#ff6030',
                'app1': '#e591b3',
                'app2': '#e07ea7',
                'creations1': '#00569d',
                'creations2': '#000000',
            }
        }
    },
    plugins: []
}
