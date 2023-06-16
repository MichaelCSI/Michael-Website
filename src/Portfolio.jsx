import LinkText from './LinkText.jsx'
import MODELS from './modelList.js'
import * as THREE from 'three'
import {
    Environment,
    useGLTF,
    useScroll,
    ScrollControls,
    ContactShadows,
    Image,
    Float,
    Sky,
    OrbitControls,
    Text
} from '@react-three/drei'

import { useRef, useState } from 'react'
import { useFrame, applyProps } from '@react-three/fiber'
import { Canvas } from '@react-three/fiber'

// 3D models are from https://market.pmnd.rs/
export default function Portfolio(props) {
    return (
        <>
            <Project
                position={[3, -0.5, 0]}
                scale={[1.5, 1.5, 1.5]}
                model={{
                    source: './models/laptop.gltf'
                }}
                image={{
                    scale: [3, 2, 1],
                    position: [0, 1.56, -1.4],
                    rotation: [-0.256, 0, 0],
                    url: './images/galaxy.png'
                }}
                title={{
                    media: 'https://threejs-practice-pi.vercel.app/',
                    text: 'Three Galaxy',
                    fontSize: 0.4,
                    primaryColor: '#ff6030',
                    secondaryColor: '#d0312d',
                    position: [2.5, 2.2, 0]
                }}
            />
            <Project
                position={[2.7, 0, 0]}
                scale={[1.5, 1.5, 1.5]}
                model={{
                    source: './models/phone.gltf',
                    rotation: [-0.4, 0, 0],
                }}
                image={{
                    scale: [1.38, 2.93, 1],
                    position: [0.17, 1.35, -0.48],
                    url: './images/hackathonApp.jpeg',
                    rotation: [-0.4, 0, 0],
                    style: { borderRadius: '50%' }

                }}
                title={{
                    media: 'https://devpost.com/software/skin-cancer-detection-app-fm7ptq',
                    text: 'Skin Cancer Detection App',
                    fontSize: 0.4,
                    primaryColor: '#fe7f9c',
                    secondaryColor: '#f14d73',
                    position: [2.2, 1.5, 0]
                }}
            />
            <Project
                position={[2.5, 0, 0]}
                scale={[1.7, 1.7, 1.7]}
                model={{
                    source: './models/umbrella.gltf',
                    rotation: [0, Math.PI * 1.2, 0]
                }}
                title={{
                    media: 'https://www.youtube.com/channel/UCo9DGaDW1IbWbTjPcEJQELg',
                    text: 'Unity/Blender',
                    fontSize: 0.35,
                    primaryColor: '#4e97d1',
                    secondaryColor: '#00569d',
                    position: [2.3, 1.2, 0.1]
                }}
            />
        </>
    )
}

function Project(props) {
    const model = useGLTF(props.model.source)

    // Adjust phone screen to white
    if (model.nodes.SCREEN) {
        applyProps(model.nodes.SCREEN, {
            material: new THREE.MeshBasicMaterial({ color: '#ffffff' })
        })
    }

    return (
        <>
            <Canvas
                flat
                camera={{
                    fov: 45,
                    near: 0.1,
                    far: 2000,
                    position: [0, 4, 12]
                }}
            >
                {/* <OrbitControls/> */}
                <Environment files="./hdrs/evening_road_01_puresky_4k.hdr" />
                {/* <Sky azimuth={0.75} rayleigh={0.3} /> */}
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
                <Float rotationIntensity={0.2} speed={2} floatIntensity={0.5}>
                    <group position={props.position} scale={props.scale}>
                        <primitive
                            object={model.scene}
                            rotation={props.model.rotation}
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
                            />
                        ) : null}
                    </group>
                </Float>
            </Canvas>
        </>
    )
}
