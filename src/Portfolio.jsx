// Laptop and phone models are from https://market.pmnd.rs/

// Clapperboard model credits:
// * title:	clapperboard
// * source:	https://sketchfab.com/3d-models/clapperboard-1bf0c9ec243c457fafff7850aa4e696f
// * author:	clon6767 (https://sketchfab.com/clon6767)

// Picture frame 1 model credits:
// title:	Framed picture | Картина в рамке
// * source:	https://sketchfab.com/3d-models/framed-picture-059ed0991ee84e53af0d40647413b04b
// * author:	Every 3D (https://sketchfab.com/Every_3D)

// Picture frame 2 model credits:
// * title:	Pictures
// * source:	https://sketchfab.com/3d-models/pictures-2656b711625f486b839a7687e6e27df7
// * author:	Tatiana Gladkaya (https://sketchfab.com/tatiana_gladkaya)

// Pencil and paper credits:
// * title:	Pencil & Paper
// * source:	https://sketchfab.com/3d-models/pencil-paper-19518f51430445b19eca65f346941e01
// * author:	MOJackal (https://sketchfab.com/MOJackal)

import Project from './Project.jsx'
import { motion } from 'framer-motion'

export default function Portfolio(props) {
    return (
        <>
            <motion.h1
                className={`-mb-[10rem] mt-[25rem] grid h-[30rem] place-items-center md:mb-0 md:mt-[6rem] md:h-[40vh] ${props.style.textGradient} bg-clip-text text-6xl text-transparent md:text-8xl`}
                initial={{ opacity: 0, x: -200 }}
                whileInView={{
                    opacity: 1,
                    x: 0
                }}
                viewport={{ once: true }}
                transition={{ duration: 2 }}
            >
                Projects
            </motion.h1>
            <Project
                description={{
                    title: 'Three.js Galaxy',
                    style: 'galaxy',
                    link: 'https://threejs-practice-pi.vercel.app/',
                    linkText: 'Live Website',
                    tech: [
                        {
                            name: 'JavaScript',
                            logo:
                                props.style.type === 'dark'
                                    ? './images/logos/jsAlt.png'
                                    : './images/logos/js.png'
                        },
                        {
                            name: 'Three.js',
                            logo:
                                props.style.type === 'dark'
                                    ? './images/logos/threeAlt.png'
                                    : './images/logos/three.png'
                        }
                    ],
                    description: `
                        The Three.js Galaxy is a particle-based geometry with tweakable 
                        attributes such as radius and rotation speed. The galaxy is
                        inspired by an exercise from Bruno Simon's Three.js Journey course.
                    `,
                    date: 'Spring 2022'
                }}
                position={[0, -1.6, 0]}
                shadowY={1}
                scale={[2.2, 2.2, 2]}
                rotation={[-0.1, -0.3, 0]}
                model={{
                    source: './models/laptop.glb'
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
                    title: 'Skin Cancer Detection App',
                    style: 'app',
                    link: 'https://devpost.com/software/skin-cancer-detection-app-fm7ptq',
                    linkText: 'Devpost',
                    tech: [
                        {
                            name: 'Java',
                            logo:
                                props.style.type === 'dark'
                                    ? './images/logos/javaAlt.png'
                                    : './images/logos/java.png'
                        },
                        {
                            name: 'TensorFlow',
                            logo: './images/logos/tensorflow.png'
                        }
                    ],
                    description: `
                                    The Skin Cancer Detection app was made in a group of three during a University 
                                    Hackathon and won a prize in the healthcare section. It's an android app that rates a picture 
                                    of skin with a probability for skin cancer. It was done by training a tensorflow model 
                                    with skin cancer data sets and implementing the model on android via Android Studio.
                                `,
                    date: 'Spring 2023'
                }}
                position={[0.2, -0.1, 0]}
                shadowY={1}
                scale={[1.6, 1.6, 1.6]}
                rotation={[0, -0.3, 0]}
                model={{
                    source: './models/phone.glb',
                    rotation: [-0.4, 0, 0]
                }}
                image={{
                    scale: [1.38, 2.93, 1],
                    position: [0.17, 1.35, -0.48],
                    url: './images/portfolio/hackathonApp.jpeg',
                    rotation: [-0.4, 0, 0]
                }}
                award={
                    <div className="mt-2 flex items-center gap-x-1 md:mt-0 ">
                        <img
                            src="./images/portfolio/star.png"
                            alt=""
                            className="h-4 w-4 rounded-full"
                        />
                        <p className="text-center text-sm text-primary md:text-base">
                            Prize Winner
                        </p>
                        <img
                            src="./images/portfolio/star.png"
                            alt=""
                            className="h-4 w-4 rounded-full"
                        />
                    </div>
                }
            />
            <div className="h-[10vh]" />
            <Project
                description={{
                    title: 'SumIt (Reddit clone)',
                    style: 'sumit',
                    link: 'https://sumit-michael.vercel.app/',
                    linkText: 'Live Website',
                    tech: [
                        {
                            name: 'React',
                            logo: './images/logos/react.png'
                        },
                        {
                            name: 'TailwindCSS',
                            logo: './images/logos/tailwind.webp'
                        },
                        {
                            name: 'Next.js',
                            logo: './images/logos/nextjs.webp'
                        }
                    ],
                    description: `
                                    SumIt is a topic discussion site for summarizing and discussing 
                                    different topics, based on a Reddit clone tutorial by Josh Tried Coding. 
                                    Next.js was used for for API calls and routing, as well as authentication with 
                                    NextAuth. React, Tailwind, and a variety of ui libraries (i.e shadcn and Radix UI) 
                                    were used for the UI, and Prisma was used with MySQL for the database.
                                `,
                    date: 'Summer 2023'
                }}
                position={[0.2, 0, 0]}
                shadowY={1}
                scale={[0.18, 0.18, 0.18]}
                rotation={[0.7, -0.3, 0]}
                model={{
                    source: './models/pencilAndPaper.glb',
                    rotation: [-0.4, 0, 0]
                }}
            />
            <div className="h-[12vh]" />
            <Project
                description={{
                    title: 'Showtime (live movie site)',
                    style: 'showtime',
                    link: 'https://michaelcsi.github.io/Showtime/',
                    linkText: 'Live Website',
                    tech: [
                        {
                            name: 'React',
                            logo: './images/logos/react.png'
                        },
                        {
                            name: 'TailwindCSS',
                            logo: './images/logos/tailwind.webp'
                        },
                        {
                            name: 'Socket.io',
                            logo: './images/logos/socket.png'
                        }
                    ],
                    description: `
                                    Showtime is a movie website for watching public domain movies live.
                                    Movies go live on a regular schedule and new movies can be requested via email. 
                                    Each movie has its own chat room that uses Socket.io with Express.js for messaging.
                                `,
                    date: 'Summer 2023'
                }}
                position={[0.2, -0.1, 0]}
                shadowY={1}
                scale={[0.2, 0.2, 0.2]}
                rotation={[0, -0.3, 0]}
                model={{
                    source: './models/clapperboard.glb',
                    rotation: [-0.4, 0, 0]
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
                position={[-2.2, 3, 0]}
                shadowY={2}
                scale={[2.2, 2.2, 2.2]}
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
                    title: 'GLSL Water Shader Scene',
                    style: 'shader',
                    link: 'https://michaelcsi.github.io/Ocean-Shader/',
                    linkText: 'Live Website',
                    tech: [
                        {
                            name: 'JavaScript',
                            logo:
                                props.style.type === 'dark'
                                    ? './images/logos/jsAlt.png'
                                    : './images/logos/js.png'
                        },
                        {
                            name: 'Three.js',
                            logo:
                                props.style.type === 'dark'
                                    ? './images/logos/threeAlt.png'
                                    : './images/logos/threeAlt.png'
                        },
                        { name: 'GLSL', logo: './images/logos/glsl.png' }
                    ],
                    description: `
                                    Made a React Three (R3) ocean scene with a GLSL shader. The scene 
                                    combines 3D models, a built in R3 star shader, an R3 trail
                                    for the shooting star, and the custom shader for the ocean.
                                `,
                    date: 'Summer 2023'
                }}
                position={[0, 0, 2]}
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
