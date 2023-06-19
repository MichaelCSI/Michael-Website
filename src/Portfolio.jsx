// Laptop and phone models are from https://market.pmnd.rs/

// Picture frame 1 model credits:
// title:	Framed picture | Картина в рамке
// * source:	https://sketchfab.com/3d-models/framed-picture-059ed0991ee84e53af0d40647413b04b
// * author:	Every 3D (https://sketchfab.com/Every_3D)

// Picture frame 2 model credits:
// * title:	Pictures
// * source:	https://sketchfab.com/3d-models/pictures-2656b711625f486b839a7687e6e27df7
// * author:	Tatiana Gladkaya (https://sketchfab.com/tatiana_gladkaya)

import Project from './Project.jsx'

export default function Portfolio(props) {
    return (
        <>
            <div className="grid h-[40vh] place-items-center">
                <h1 className="text-8xl text-primary">Projects</h1>
            </div>
            <Project
                description={{
                    title: 'Three.js Galaxy',
                    style: 'galaxy',
                    link: 'https://threejs-practice-pi.vercel.app/',
                    linkText: 'Live Website',
                    tech: [
                        { name: 'JavaScript', logo: './images/logos/js.png' },
                        { name: 'Three.js', logo: './images/logos/three.png' }
                    ],
                    description: `
                        The Three.js Galaxy is a particle-based geometry with tweakable 
                        attributes such as radius and rotation speed. The galaxy is
                        inspired by an exercise from Bruno Simon's Three.js Journey course.
                    `,
                    date: 'Spring 2022'
                }}
                position={[0, -2, 0]}
                scale={[2.2, 2.2, 2]}
                rotation={[-0.1, -0.3, 0]}
                model={{
                    source: './models/laptop.gltf'
                }}
                image={{
                    scale: [3, 2, 1],
                    position: [0, 1.56, -1.4],
                    rotation: [-0.256, 0, 0],
                    url: './images/portfolio/galaxy.png'
                }}
            />
            <Project
                description={{
                    title: 'Unity and Blender Creations',
                    style: 'creations',
                    link: 'https://www.youtube.com/channel/UCo9DGaDW1IbWbTjPcEJQELg',
                    linkText: 'Youtube Showcase',
                    tech: [
                        { name: 'Unity', logo: './images/logos/unity.png' },
                        { name: 'Blender', logo: './images/logos/blender.png' }
                    ],
                    description: `
                                    I have an interest in all things 3D when it comes to
                                    programming, so I quickly became interested in 3D technologies
                                    such as Blender, Unity, and Three.js.
                                `,
                    date: 'Ongoing'
                }}
                position={[-2.4, 1.5, 0]}
                scale={[2.7, 2.7, 2.7]}
                model={{
                    source: './models/frame.glb',
                    position: [1, 0, 0],
                    rotation: [-Math.PI / 8, 0, 0],
                    scale: [3, 3, 3]
                }}
                gallery1={true}
            />
            <Project
                description={{
                    title: 'Skin Cancer Detection App',
                    style: 'app',
                    link: 'https://devpost.com/software/skin-cancer-detection-app-fm7ptq',
                    linkText: 'Devpost Entry',
                    tech: [
                        { name: 'Java', logo: './images/logos/java.png' },
                        {
                            name: 'TensorFlow',
                            logo: './images/logos/tensorflow.png'
                        }
                    ],
                    description: `
                                    The Skin Cancer Detection app was made in a group of three during
                                    a University Hackathon, and won a prize____. It's an android app that rates a picture of skin
                                    with a probability for skin cancer. It was done by training a tensorflow model 
                                    with skin cancer data sets and implementing the model on android via Android Studio.
                                `,
                    date: 'Spring 2023'
                }}
                position={[0.2, -0.8, 0]}
                scale={[1.8, 1.8, 1.8]}
                rotation={[0, -0.3, 0]}
                model={{
                    source: './models/phone.gltf',
                    rotation: [-0.4, 0, 0]
                }}
                image={{
                    scale: [1.38, 2.93, 1],
                    position: [0.17, 1.35, -0.48],
                    url: './images/portfolio/hackathonApp.jpeg',
                    rotation: [-0.4, 0, 0]
                }}
            />
            <Project
                description={{
                    title: 'GLSL Water Shader Scene',
                    style: 'shader',
                    link: 'https://michaelcsi.github.io/Ocean-Shader/',
                    linkText: 'Live Website',
                    tech: [
                        { name: 'JavaScript', logo: './images/logos/js.png' },
                        { name: 'Three.js', logo: './images/logos/three.png' },
                        { name: 'GLSL', logo: './images/logos/glsl.png' }
                    ],
                    description: `
                                    Made a React Three (R3) ocean scene with a GLSL shader. The scene 
                                    combines 3D models, a built in R3 shader for the stars, an R3 trail
                                    for the shooting star, and the custom shader for the ocean.
                                `,
                    date: 'Summer 2023'
                }}
                position={[0, 0.4, 2]}
                model={{
                    source: './models/frame2.glb',
                    rotation: [-Math.PI / 8, 0, 0],
                    scale: [0.07, 0.07, 0.07]
                }}
                gallery2={true}
            />
        </>
    )
}
