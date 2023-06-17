import * as THREE from 'three'
import {
    Environment,
    useGLTF,
    ContactShadows,
    Image,
    Float,
    OrbitControls,
    Text
} from '@react-three/drei'

import { useRef, useState } from 'react'
import { useFrame, applyProps } from '@react-three/fiber'
import { Canvas } from '@react-three/fiber'

// Laptop and phone models are from https://market.pmnd.rs/

// Picture frame model credits:
// title:	Framed picture | Картина в рамке
// * source:	https://sketchfab.com/3d-models/framed-picture-059ed0991ee84e53af0d40647413b04b
// * author:	Every 3D (https://sketchfab.com/Every_3D)

export default function Portfolio(props) {
    // Adjust phone screen to white
    const phone = useGLTF('./models/phone.gltf')
    applyProps(phone.nodes.SCREEN, {
        material: new THREE.MeshBasicMaterial({ color: '#ffffff' })
    })

    return (
        <>
            <Project
                description={{
                    title: 'Three.js Galaxy',
                    style: 'galaxy',
                    link: 'https://threejs-practice-pi.vercel.app/',
                    linkText: 'Live Website',
                    tech: 'Built with JavaScript and Three.js in VS Code',
                    description: `
                        The Three.js Galaxy is a particle-based geometry with tweakable 
                        attributes such as radius and rotation speed. The galaxy is
                        inspired by an exercise from Bruno Simon's Three.js Journey course.
                    `,
                    date: 'Spring 2022'
                }}
                position={[4.5, -0.5, 0]}
                scale={[1.6, 1.6, 1.6]}
                rotation={[0.15, -0.4, 0.1]}
                model={{
                    source: './models/laptop.gltf'
                }}
                image={{
                    scale: [3, 2, 1],
                    position: [0, 1.56, -1.4],
                    rotation: [-0.256, 0, 0],
                    url: './images/galaxy.png'
                }}
            />
            <Project
                description={{
                    title: 'Skin Cancer Detection App',
                    style: 'app',
                    link: 'https://devpost.com/software/skin-cancer-detection-app-fm7ptq',
                    linkText: 'Devpost Entry',
                    tech: 'Built with Java and Tensorflow in Android Studio',
                    description: `
                                    The Skin Cancer Detection app was made in a group of three during
                                    a University Hackathon. It's an android app that rates a picture of skin
                                    with a probability for skin cancer. It was done by training a tensorflow model 
                                    with skin cancer data sets and implementing the model on android via Android Studio.
                                `,
                    date: 'Spring 2023'
                }}
                position={[3.7, 0.3, 0]}
                scale={[1.3, 1.3, 1.3]}
                rotation={[0, -0.3, 0]}
                model={{
                    source: './models/phone.gltf',
                    rotation: [-0.4, 0, 0]
                }}
                image={{
                    scale: [1.38, 2.93, 1],
                    position: [0.17, 1.35, -0.48],
                    url: './images/hackathonApp.jpeg',
                    rotation: [-0.4, 0, 0]
                }}
            />
            <Project
                description={{
                    title: 'Unity and Blender Creations',
                    style: 'creations',
                    link: 'https://www.youtube.com/channel/UCo9DGaDW1IbWbTjPcEJQELg',
                    linkText: 'Youtube Showcase',
                    tech: '',
                    description: `
                                    I have an interest in all things 3D when it comes to
                                    programming, so I quickly became interested in 3D technologies
                                    such as Blender, Unity, and Three.js.
                                `,
                    date: 'Ongoing'
                }}
                position={[2.5, 1.5, 0]}
                scale={[1.9, 1.9, 1.9]}
                model={{
                    source: './models/frame.glb',
                    position: [1, 0, 0],
                    rotation: [-Math.PI / 8, 0, 0],
                    scale: [3, 3, 3]
                }}
                gallery={true}
            />
        </>
    )
}

function Project(props) {
    const model = useGLTF(props.model.source)

    return (
        <>
            <Description
                title={props.description.title}
                style={props.description.style}
                link={props.description.link}
                linkText={props.description.linkText}
                tech={props.description.tech}
                description={props.description.description}
                date={props.description.date}
            />
            <Canvas
                flat
                camera={{
                    fov: 45,
                    near: 0.1,
                    far: 2000,
                    position: [0, 4, 12]
                }}
            >
                {/* <OrbitControls /> */}
                <Environment files="./hdrs/evening_road_01_puresky_4k.hdr" />
                <rectAreaLight
                    width={2.5}
                    height={1.65}
                    intensity={30}
                    color={'#ff6900'}
                    rotation={[-1, 0, 0]}
                    position={[0, 4, 6]}
                />
                <ContactShadows
                    position-y={-1}
                    opacity={0.5}
                    scale={30}
                    blur={2.4}
                    frames={1}
                />
                <Float rotationIntensity={0.3} speed={2} floatIntensity={2}>
                    <group
                        position={props.position}
                        scale={props.scale}
                        rotation={props.rotation}
                    >
                        <primitive
                            object={model.scene}
                            position={props.model.position}
                            rotation={props.model.rotation}
                            scale={props.model.scale}
                        />
                        {props.image ? (
                            <Image
                                scale={props.image.scale}
                                position={props.image.position}
                                rotation={props.image.rotation}
                                url={props.image.url}
                            />
                        ) : null}
                        {props.title ? (
                            <LinkText
                                media={props.title.media}
                                text={props.title.text}
                                fontSize={props.title.fontSize}
                                textPrimary={props.title.primaryColor}
                                textSecondary={props.title.secondaryColor}
                                position={props.title.position}
                                ySpacing={props.title.ySpacing}
                            />
                        ) : null}
                        {props.gallery ? (
                            <>
                                <Image
                                    scale={[1, 1, 1]}
                                    position={[-0.5, 0, 0.05]}
                                    rotation={props.model.rotation}
                                    url={'./images/thunderstorm.png'}
                                />
                                <Image
                                    scale={[1, 1, 1]}
                                    position={[1, 0, 0.05]}
                                    rotation={props.model.rotation}
                                    url={'./images/room.png'}
                                />
                                <Image
                                    scale={[1, 1, 1]}
                                    position={[2.5, 0, 0.05]}
                                    rotation={props.model.rotation}
                                    url={'./images/island.png'}
                                />
                            </>
                        ) : null}
                    </group>
                </Float>
            </Canvas>
        </>
    )
}

function Description(props) {
    const style = {
        galaxy: {
            gradient: 'bg-gradient-to-r from-galaxy1 to-galaxy2 to-60%',
            hoverGradient:
                'hover:bg-gradient-to-r from-galaxy1 to-galaxy2 to-60% hover:text-primary'
        },
        app: {
            gradient: 'bg-gradient-to-r from-app1 to-app2 to-60%',
            hoverGradient:
                'hover:bg-gradient-to-r from-app1 to-app2 to-60% hover:text-primary'
        },
        creations: {
            gradient: 'bg-gradient-to-r from-creations1 to-creations2 to-60%',
            hoverGradient:
                'hover:bg-gradient-to-r from-creations1 to-creations2 to-60% hover:text-primary'
        }
    }

    return (
        <article className="ml-20 h-[00vh] max-w-xl rounded-xl">
            <div className="group relative">
                <h1
                    className={`${
                        style[props.style].gradient
                    } mb-2 bg-clip-text text-xl font-semibold leading-6 text-transparent`}
                >
                    {props.title}
                </h1>
                <div className="flex items-center gap-x-8 text-xs">
                    <p className="text-sm text-primary">{props.date}</p>
                    <a
                        href={props.link}
                        target="_blank"
                        className={`${
                            style[props.style].hoverGradient
                        } relative z-10 rounded-full bg-gray-50 px-5 py-1.5 text-sm font-medium text-gray-600`}
                    >
                        {props.linkText}
                    </a>
                </div>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-primary">
                    {props.description}
                </p>
            </div>
            <div className="relative mt-8 flex items-center gap-x-4">
                <p className="text-primary">{props.tech}</p>
            </div>
        </article>
    )
}
