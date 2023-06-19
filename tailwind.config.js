/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            textColor: {
                primary: '#fffff0',
                secondary: '#000000',
                tertiary: '#d3d3d3',
            },
            colors: {
                'bg1': '#2e8bc0',
                'bg2': '#145da0',
                'bg3': '#0c2d48',
                'galaxy1': '#00008b',
                'galaxy2': '#ff6030',
                'app1': '#e591b3',
                'app2': '#e07ea7',
                'creations1': '#000000',
                'creations2': '#00008b',
                'shader1': '#88d1f1',
                'shader2': '#5880a2',
            }
        }
    },
    plugins: []
}
