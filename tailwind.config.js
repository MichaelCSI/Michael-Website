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
                'bg4': '#000000',
                'bg5': '#111111',
                'bg6': '#222222',
                'bg7': '#001306',
                'bg8': '#01260c',
                'bg9': '#013a12',
                'galaxy1': '#00008b',
                'galaxy2': '#ff6030',
                'app1': '#e591b3',
                'app2': '#e07ea7',
                'creations1': '#00afff',
                'creations2': '#00ff8f',
                'shader1': '#61f4de',
                'shader2': '#eed991',
            }
        }
    },
    plugins: []
}
