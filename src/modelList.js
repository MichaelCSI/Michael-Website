export default [
    {
        model: './models/laptop.gltf',
        position: [0, -0.3, 0],
        image: {
            scale: [3, 2, 1],
            position: [ 0, 1.56, - 1.4 ],
            rotation: [-0.256, 0, 0],
            url :  './images/galaxy.png'
        },
        linkText: {
            media: 'https://threejs-practice-pi.vercel.app/',
            text: "Three Galaxy",
            fontSize:  0.4,
            textPrimary: '#ff6030',
            textSecondary: '#d0312d',
            position: [2.5, 2.2, 0],
        }
    },
    {
        model: './models/phone.gltf',
        rotation: [-0.4, 0, 0],
        scale: [0.8, 0.8, 0.8],
        image: {
            scale: [1.51, 2.95, 1],
            position: [ 0.17, 1.35, 0.09 ],
            url: './images/hackathonApp.jpeg'
        },
        linkText: {
            media: 'https://devpost.com/software/skin-cancer-detection-app-fm7ptq',
            text: "Skin Cancer Detection App (Hackathon)",
            fontSize: 0.4,
            textPrimary: '#fe7f9c',
            textSecondary: '#f14d73',
            position: [2.2, 1.5, 0]
        }
    },
    {
        model: './models/umbrella.gltf',
        position: [0, 0.5, 0],
        rotation: [0, Math.PI * 1.2, 0],
        scale: [1.3, 1.3, 1.3],
        linkText: {
            media: 'https://www.youtube.com/channel/UCo9DGaDW1IbWbTjPcEJQELg',
            text: "Unity/Blender",
            fontSize: 0.4,
            textPrimary: '#4e97d1',
            textSecondary: '#00569d',
            position: [2.3, 1.2, 0.1]
        }
    }
]