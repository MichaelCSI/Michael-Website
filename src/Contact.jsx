import { useGLTF, Float, Text } from '@react-three/drei'
import { applyProps, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'

// MODEL CREDITS
// Name: 3D Brand Logos Free low-poly 3D model
// Author: AtroRocket
// Link: https://www.cgtrader.com/free-3d-models/architectural/decoration/3d-brand-logos
export default function Contact(props) {
    const logos = useGLTF('./models/logos.glb')
    const github = logos.nodes.github
    const linkedin = logos.nodes.LinkedIn
    const youtube = logos.nodes.youtube

    applyProps(github, {
        material: new THREE.MeshBasicMaterial({
            color: '#ffffff'
        })
    })
    applyProps(linkedin, {
        material: new THREE.MeshBasicMaterial({
            color: '#00a5d4'
        })
    })
    applyProps(youtube, {
        material: new THREE.MeshBasicMaterial({
            color: '#ff0000'
        })
    })

    const contacts = [
        { media: github, link: 'https://github.com/MichaelCSI' },
        {
            media: linkedin,
            link: 'https://www.linkedin.com/in/michael-osullivan-ottawa'
        },
        {
            media: youtube,
            link: 'https://www.youtube.com/channel/UCo9DGaDW1IbWbTjPcEJQELg'
        }
    ]

    return (
        <div className="h-[10vh] w-[90vw] md:h-[20vh] md:w-[100vw]">
            <Canvas
                flat
                camera={{
                    fov: 45,
                    near: 0.1,
                    far: 2000,
                    position: [0, 4, 12]
                }}
            >
                <group
                    position={props.position}
                    scale={props.scale}
                    onPointerEnter={() => {
                        document.body.style.cursor = 'pointer'
                    }}
                    onPointerLeave={() => {
                        document.body.style.cursor = 'default'
                    }}
                >
                    <Float
                        speed={3}
                        rotationIntensity={0.3}
                        floatIntensity={1.5}
                    >
                        {contacts.map((contact, index) => (
                            <primitive
                                key={index + 'contact'}
                                object={contact.media}
                                position={[-10 + 10 * index, 0.05 * index, 0]}
                                rotation={props.rotation}
                                scale={[0.8, 0.8, 0.8]}
                                onClick={() => {
                                    window.open(contact.link, '_blank')
                                }}
                            />
                        ))}
                    </Float>
                    <Text
                        font="./fonts/OvertheRainbow-Regular.ttf"
                        fontSize={3}
                        color="#888888"
                        outlineWidth={0.01}
                        outlineColor="#111111"
                        position={[5, -3, 0]}
                    >
                        Michael O'Sullivan
                    </Text>
                </group>
            </Canvas>
        </div>
    )
}
