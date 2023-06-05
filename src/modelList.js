export default [
    {
        model: 'https://threejs-practice-pi.vercel.app/',
        position: [0, -1.5, 0],
        rotation: [0, -0.1, 0],
        image: {
            scale: [3, 2, 1],
            position: [ 0, 1.56, - 1.4 ],
            rotationX: - 0.256,
            url :  './galaxy.png'
        },
        linkText: {
            media: 'https://threejs-practice-pi.vercel.app/',
            text: "Three Galaxy",
            fontSize:  0.4,
            textPrimary: '#ff6030',
            textSecondary: '#de4222'
        }
    },
    {
        model: 'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf',
        position: [1, -1, 0],
        rotation: [-0.4, -0.3, 0],
        scale: [0.8, 0.8, 0.8],
        image: {
            scale: [1.51, 2.95, 1],
            position: [ 0.17, 1.35, 0.09 ],
            url: './hackathonApp.jpeg'
        },
        linkText: {
            media: 'https://devpost.com/software/skin-cancer-detection-app-fm7ptq',
            text: "Skin Cancer Detection App (Hackathon)",
            fontSize: 0.4,
            textPrimary: '#fe7f9c',
            textSecondary: '#f14d73',
            position: [2.2, 1.5, 0.75]
        }
    },
    {
        model: 'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/umbrella/model.gltf',
        position: [2, -0.5, 0],
        rotation: [0, Math.PI * 1.2, 0],
        image: {
            scale: [3, 2, 1],
            position: [ 0, 1.56, - 1.4 ],
            rotationX: - 0.256,
            url :  './galaxy.png'
        },
        linkText: {
            media: 'https://www.youtube.com/channel/UCo9DGaDW1IbWbTjPcEJQELg',
            text: "Unity/Blender",
            fontSize: 0.4,
            textPrimary: '#4e6cb7',
            textSecondary: '#3c5b95',
            position: [2.2, 1.2, 0.75]
        }
    }
]