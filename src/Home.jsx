import { 
    useGLTF, 
    Trail, 
    Float, 
    OrbitControls,
    Environment,
    Text,
    Sky,
    useAnimations,
    Center,
    Stars
} from '@react-three/drei'
import { useFrame, applyProps, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { useRef, useMemo, useEffect, useState } from 'react'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import vertexShader from './water/vertex.jsx'
import fragmentShader from './water/fragment.jsx'
import SunMoon from './SunMoon.jsx'


export default function Games(){
    const ocean = useRef()
    const uniforms = useMemo(
        () => ({
            uTime: { value: 0 },
            uBigWavesElevation: { value: 0.07 },
            uBigWavesFrequency: { value: new THREE.Vector2(2, 1.5) },
            uBigWavesSpeed: { value: 0.6 },

            uSmallWavesElevation: { value: 0.05 },
            uSmallWavesFrequency: { value: 4 },
            uSmallWavesSpeed: { value: 0.1 },
            uSmallIterations: { value: 2 },
            uXOffset: { value: 4 },

            uPointerCoordinates: { value: new THREE.Vector2(0, 0) },
            uViewPort: { value: new THREE.Vector2(0, 0) },
            uPointerSize: { value: 0.1 },
    
            uDepthColor: { value: new THREE.Color('#0f4764') },
            uSurfaceColor: { value: new THREE.Color('#5f88a2') },
            uColorOffset: { value: 0.01 },
            uColorMultiplier: { value: 5 },

            uShaderMode: { value: 5 }

        }), []
    );  


    const groupRef = useRef()
    const sun1Ref = useRef()
    const sun2Ref = useRef()
    const moon1Ref = useRef()
    const moon2Ref = useRef()

    const [showAlternate, setShowAlternate] = useState(false)

    const bgRef = useRef()

    useFrame((state) => {
        const time = state.clock.elapsedTime

        // Shader
        ocean.current.material.uniforms.uTime.value = time
        ocean.current.material.uniforms.uXOffset.value = 0.5 * Math.sin(0.2 * time) + 4

        const pointerX = state.pointer.x + 1
        const pointerY = state.pointer.y + 1
        ocean.current.material.uniforms.uPointerCoordinates.value = new THREE.Vector2(pointerX, pointerY)

        const viewPort = state.size
        ocean.current.material.uniforms.uViewPort.value = new THREE.Vector2(viewPort.width, viewPort.height)

        // Sun and Moon
        // groupRef.current.position.x = 5 * Math.sin(0.1 * time)
        // groupRef.current.position.y = 0.5 * Math.cos(0.1 * time)
        // sun1Ref.current.position.z = 10 * Math.cos(0.1 * time)
        if(time % 2 < 1){
            setShowAlternate(false)
        } else{
            setShowAlternate(true)
        }

        // Background
        const amp = 0.05
        const sTime = amp * Math.sin(time * 0.8) + amp
    })

    const { viewport } = useThree()

    return <>
        <OrbitControls/>
        <EffectComposer>
            <Bloom
               mipmapBlur
               intensity={ 0.4 }
            />
        </EffectComposer>
        <Environment files='./hdrs/evening_road_01_puresky_4k.hdr'/>
        <color ref={ bgRef } args={['#000000']} attach='background'/>
        <mesh ref={ ocean } position={[0, -1.5, -10]} rotation={[-Math.PI / 2 - 0.08, 0, 0]} scale={1}>
            <planeGeometry args={[20, 40, 512, 1024]} />
            <shaderMaterial
                fragmentShader={fragmentShader}
                vertexShader={vertexShader}
                uniforms={uniforms}
            />
        </mesh>
        <SunMoon 
            position={ [0, 0.5, -10] }
            scale={ [0.0001, 0.0001, 0.0001] }
            showAlternate={ showAlternate }
            groupRef={ groupRef }
            sun1Ref={ sun1Ref }
            sun2Ref={ sun2Ref }
            moon1Ref={ moon1Ref }
            moon2Ref={ moon2Ref }
        />
        <Contact
            rotation={ [Math.PI / 2, 0, 0] } 
            position={ [ - viewport.width * 0.85, viewport.height * 0.6, -10] } 
            scale={ [0.15, 0.15, 0.15] }
        />
        <Stars
            radius={ 10 }
            depth={ 10 }
            factor={ 2 } 
            fade 
            speed={ 2 }
            count={ 10000 }
        />
    </>
}



function Contact(props)
{
    const logos = useGLTF('./models/logos.glb')
    const github = logos.nodes.github
    const linkedin = logos.nodes.LinkedIn
    const youtube = logos.nodes.youtube

    applyProps(github, { material: new THREE.MeshStandardMaterial({ color: '#ffffff', emissive: '#ffffff', emissiveIntensity: 3 })})
    applyProps(linkedin, { material: new THREE.MeshStandardMaterial({ color: '#00a5d4', emissive: '#00a5d4', emissiveIntensity: 3 })})
    applyProps(youtube, { material: new THREE.MeshStandardMaterial({ color: '#ff0000', emissive: '#ff0000', emissiveIntensity: 3 })})

    const contacts = [
        {media: github, link: 'https://github.com/MichaelCSI'},
        {media: linkedin, link: 'https://www.linkedin.com/in/michael-osullivan-ottawa'},
        {media: youtube, link: 'https://www.youtube.com/channel/UCo9DGaDW1IbWbTjPcEJQELg'},
    ]

    return <>
        <group 
            rotation={ props.rotation } 
            position={ props.position } 
            scale={ props.scale }
            onPointerEnter={ () => { document.body.style.cursor = 'pointer' }}
            onPointerLeave={ () => { document.body.style.cursor = 'default' }}  
        >
            {contacts.map((contact, index) => (
                <Float 
                    speed={ 3 }
                    key={ contact.link }
                >
                    <primitive 
                        object={ contact.media }
                        position={ [-1.5 + 1.5 * index, 0.05 * index, 0.05 * index] } 
                        scale={ [0.1, 0.1, 0.1] }
                        onClick={() => { window.open(contact.link, '_blank')}}  
                    />
                </Float>
                ))}
        </group>
    </>
}