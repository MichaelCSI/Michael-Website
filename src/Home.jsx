import { 
    useGLTF, 
    Trail, 
    Float, 
    OrbitControls,
    Environment,
    Text,
    Stars,
    Html
} from '@react-three/drei'
import { useFrame, applyProps, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { useRef, useMemo, useState } from 'react'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { Perf } from 'r3f-perf'
import { useControls, button } from 'leva'


import vertexShader from './water/vertex.jsx'
import fragmentShader from './water/fragment.jsx'
import SunMoon from './SunMoon.jsx'


export default function Home(){


    const sunMoonRef = useRef()

    const [showAlternate, setShowAlternate] = useState(false)


    useFrame((state) => {
        const time = state.clock.elapsedTime
        if(time % 2 < 1){
            setShowAlternate(false)
        } else{
            setShowAlternate(true)
        }
    })

    const { viewport } = useThree()

    return <>
        {/* <OrbitControls/> */}
        <Environment files='./hdrs/evening_road_01_puresky_4k.hdr'/>
        <color args={['#000000']} attach='background'/>

        <Water/>
        <SunMoon 
            position={ [0, 0.5, -10] }
            scale={ [0.0001, 0.0001, 0.0001] }
            showAlternate={ showAlternate }
            sunMoonRef={ sunMoonRef }
        />
        <Contact
            rotation={ [Math.PI / 2, 0, 0] } 
            position={ [ - viewport.width * 0.85, viewport.height * 0.5, -10] } 
            scale={ [0.15, 0.15, 0.15] }
        />
        <Stars
            radius={ 20 }
            depth={ 20 }
            factor={ 2 } 
            fade 
            speed={ 2 }
            count={ 10000 }
        />
        <ShootingStar/>
    </>
}



function Contact(props)
{
    const { viewport } = useThree()

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
            position={ props.position } 
            scale={ props.scale }
            onPointerEnter={ () => { document.body.style.cursor = 'pointer' }}
            onPointerLeave={ () => { document.body.style.cursor = 'default' }}  
        >
            <Float speed={ 3 }>
                {contacts.map((contact, index) => (
                    <primitive 
                        key={ index + 'contact' }
                        object={ contact.media }
                        position={ [-1.5 + 1.5 * index, 0.05 * index, 0.05 * index] }
                        rotation={ props.rotation }  
                        scale={ [0.1, 0.1, 0.1] }
                        onClick={() => { window.open(contact.link, '_blank')}}  
                    />
                ))}
            </Float>
            <Text
                    font="./fonts/OvertheRainbow-Regular.ttf"
                    fontSize={ 0.7 }
                    color='#888888'
                    outlineWidth={ 0.01 }
                    outlineColor='#111111'
                    position={ [viewport.width * 0.15, viewport.height * 0.95, 0] }
                >
                    Michael O'Sullivan
            </Text>
        </group>
    </>
}


function Water()
{
    const { bloom, stats, shader_mode } = useControls('Settings', {
        bloom: false,
        stats: false,
        shader_mode: { options: [ 'Normal', 'Night', 'Cursor Color', 'Glow' ] }
    })
    const shaderMap = new Map();
    shaderMap.set('Normal', 1);
    shaderMap.set('Night', 2);
    shaderMap.set('Cursor Color', 3);
    shaderMap.set('Glow', 4);

    const { viewport } = useThree()
    const ocean = useRef()
    const uniforms = useMemo(
        () => ({
            // General uniforms
            uTime: { value: 0 },
            uPointerCoordinates: { value: new THREE.Vector2(0, 0) },
            uViewPort: { value: new THREE.Vector2(0, 0) },
            uPointerSize: { value: 0.1 },

            // Vertex uniforms
            uBigWavesElevation: { value: 0.07 },
            uBigWavesFrequency: { value: new THREE.Vector2(2, 1.5) },
            uBigWavesSpeed: { value: 0.6 },
            uSmallWavesElevation: { value: 0.05 },
            uSmallWavesFrequency: { value: 4 },
            uSmallWavesSpeed: { value: 0.1 },
            uSmallIterations: { value: 2 },
            uXOffset: { value: 4 },
    
            // Fragment uniforms
            uDepthColor: { value: new THREE.Color('#0f4764') },
            uSurfaceColor: { value: new THREE.Color('#5f88a2') },
            uColorMultiplier: { value: 10 },
            uFragShaderMode: { value: 1 }
        }), []
    );  

    // Pass values to water shader
    useFrame((state) => {
        const time = state.clock.elapsedTime

        ocean.current.material.uniforms.uTime.value = time
        ocean.current.material.uniforms.uXOffset.value = 0.5 * Math.sin(0.2 * time) + 4

        const pointerX = state.pointer.x + 1
        const pointerY = state.pointer.y + 1
        ocean.current.material.uniforms.uPointerCoordinates.value = new THREE.Vector2(pointerX, pointerY)

        const viewPort = state.size
        ocean.current.material.uniforms.uViewPort.value = new THREE.Vector2(viewPort.width, viewPort.height)

        ocean.current.material.uniforms.uFragShaderMode.value = shaderMap.get(shader_mode)
    })
    
    return <>
        <mesh ref={ ocean } position={[0, -1.5, -10]} rotation={[-Math.PI / 2 - 0.08, 0, 0]} scale={1}>
            <planeGeometry args={[20, 40, 512, 1024]} />
            <shaderMaterial
                fragmentShader={fragmentShader}
                vertexShader={vertexShader}
                uniforms={uniforms}
            />
        </mesh>
        <Float speed={ 3 } floatIntensity={ 0.2 } rotationIntensity={ 0.1 }>
            <Text
                font="./fonts/bangers-v20-latin-regular.woff"
                fontSize={ 0.1 }
                rotation={ [0, 0, - Math.PI / 16] }
                position={ [viewport.width * 0.35, viewport.height * 0.1, 0] }
                >
                    {
                        shaderMap.get(shader_mode) === 1 &&
                        "Normal Ocean Shader" ||
                        shaderMap.get(shader_mode) === 2 &&
                        "Hover on the water!" ||
                        shaderMap.get(shader_mode) === 3 &&
                        "Move the mouse around!" ||
                        shaderMap.get(shader_mode) === 4 &&
                        "(Looks nicer with bloom)"
                    }
            </Text>
        </Float>
        {
            bloom && 
            <EffectComposer>
                <Bloom
                   mipmapBlur
                   intensity={ 0.4 }
                /> 
            </EffectComposer>
        }
        {
            stats && <Perf position='bottom-left'/>
        }
    </>
}

function ShootingStar()
{
    const starRef = useRef()
    const [trailDecay, setTrailDecay] = useState(500)

    const freq = 0.5
    useFrame((state) => {
        const time = state.clock.elapsedTime
        starRef.current.position.x = 1.1 * Math.sin(time + Math.PI * 0.9)
        starRef.current.position.y = 1.1 * Math.cos(time + Math.PI * 0.9) + 0.15
        
        setTrailDecay(500 * Math.sin(freq * time + Math.cos(freq * time)) + 510)
    })

    return <>
        <Trail
            width={ 0.1 }
            color='#ffffff'
            length={ 40 }
            decay={ trailDecay }
            attenuation={(width) => width*10}
            >
            <mesh ref={ starRef } position-z={ -10 }/>          
        </Trail>
    </>
}