import ReactAtom from './ReactAtom.jsx'
import { Text, useGLTF, Trail, Float } from '@react-three/drei'
import { useFrame, applyProps } from '@react-three/fiber'
import * as THREE from 'three'
import { useRef, useState } from 'react'

export default function Home()
{

    return <>
        <color args={['#000000']} attach='background'/>
        <MadeWithReact/>
        <Contact/>
        <Trails/>
    </>
}


function MadeWithReact()
{
    return <>
        <group position={ [0, -5.45, 0] }>
            <Text
                font="./fonts/bangers-v20-latin-regular.woff"
                fontSize={ 0.3 }
                maxWidth={ 2 }
                color={ '#61dbfb' }
                position={ [0, -0.65, 0] }
            >
                Made with R3F
            </Text>
            {[...Array(3).keys()].map((_, index) => (
                <ReactAtom
                    atomScale={ [0.3, 0.3, 0.3] }
                    key={ index }
                    index={ index }
                    numTrails={ 3 }
                    trailColor='#61dbfb'
                    amplitude={ 0.3 }
                    frequency={ 8 }
                />
            ))}
        </group>
    </>
}

// MODEL CREDITS
// Name: 3D Brand Logos Free low-poly 3D model
// Author: AtroRocket
// Link: https://www.cgtrader.com/free-3d-models/architectural/decoration/3d-brand-logos
function Contact()
{
    const logos = useGLTF('./models/logos.glb')
    const github = logos.nodes.github
    const linkedin = logos.nodes.LinkedIn
    const youtube = logos.nodes.youtube

    applyProps(github, { material: new THREE.MeshBasicMaterial({ color: '#ffffff' })})
    applyProps(linkedin, { material: new THREE.MeshBasicMaterial({ color: '#00a5d4' })})
    applyProps(youtube, { material: new THREE.MeshBasicMaterial({ color: '#ff0000' })})

    const contacts = [
        {media: github, link: 'https://github.com/MichaelCSI'},
        {media: linkedin, link: 'https://www.linkedin.com/in/michael-osullivan-ottawa'},
        {media: youtube, link: 'https://www.youtube.com/channel/UCo9DGaDW1IbWbTjPcEJQELg'},
    ]

    return <>
        <group 
            rotation={ [Math.PI * 0.44, -0.17, -0.3] } 
            position={ [-10.5, -6.2, 0] } 
            scale={ [0.6, 0.6, 0.6] }
            onPointerEnter={ () => { document.body.style.cursor = 'pointer' }}
            onPointerLeave={ () => { document.body.style.cursor = 'default' }}  
        >
            {contacts.map((contact, index) => (
                <Float speed={ 3 }>
                    <primitive 
                        key={ contact.link }
                        object={ contact.media }
                        position={ [-1.5 + 1.5 * index, 0.05 * index, 0.05 * index] } 
                        scale={ [0.1, 0.1, 0.1] }
                        onClick={() => { window.open(contact.link, '_blank')}}  
                    />
                </Float>
                ))}
        </group>
        <ambientLight intensity={100}/>
    </>
}

function Trails()
{
    const mRef = useRef()
    const oRef = useRef()
    const dotRef = useRef()
    const bounceRef = useRef()

    const mTrailRef = useRef()
    const oTrailRef = useRef()
    const dotTrailRef = useRef()
    const bounceTrailRef = useRef()
    const [showTrail, setShowTrail] = useState(false)

    useFrame((state) => {
        const time = state.clock.elapsedTime
       
        const amp = 0.5

        // Position M
        const freqM = 2
        const xM = amp * Math.sin(freqM * time) + amp * 0.01 * Math.sin(time * freqM * 0.6)
        const yM = 2 * amp * ((Math.abs(Math.sin(freqM * time))) + 1.3 * Math.abs(Math.cos(freqM * time)))
        mRef.current.position.set(xM, yM, 0)

        // Position O
        const freqO = 5
        const xO = -amp * 0.8 * Math.sin(freqO * time) + 1.4
        const yO = amp * 0.8 * Math.cos(freqO * time) + 1.4
        oRef.current.position.set(xO, yO, 0)

        // Position dot
        const freqDot = 5
        const xDot = -amp * 0.05 * Math.sin(freqDot * time) + 0.8
        const yDot = amp * 0.05 * Math.cos(freqDot * time) + 1.1
        dotRef.current.position.set(xDot, yDot, 0)

        // Position bounce
        const freqBounce = 0.5
        const xBounce = 2.5 * amp * Math.sin(freqBounce * time) + 0.6
        const yBounce = 0.3 * amp * (Math.abs(Math.cos(freqBounce * time * 16))) + 0.5
        bounceRef.current.position.set(xBounce, yBounce, 0)

        // Color
        const intensity = 0.5
        const r = Math.sin(0.9 * time) * intensity + intensity
        const g = Math.sin(0.7 * time + 2 * Math.PI / 3) * intensity + intensity
        const b = Math.sin(0.5 * time + 2 * 2 * Math.PI / 3) * intensity + intensity
        mTrailRef.current.material.color.set(r, g, b)
        oTrailRef.current.material.color.set(r, g, b)
        dotTrailRef.current.material.color.set(r, g, b)
        bounceTrailRef.current.material.color.set(r, g, b)

        // Done to fix the trail starting/rendering at center screen briefly
        if(time > 0.1) {
            setShowTrail(true)
        }
    })

    return <>
        <group position={[9.7, -6.8, 0]}>
            {[
                {mesh: mRef, trail: mTrailRef}, 
                {mesh: oRef, trail: oTrailRef},
                {mesh: dotRef, trail: dotTrailRef},
                {mesh: bounceRef, trail: bounceTrailRef}
            ].map((r) => (
                    <Trail
                        ref={ r.trail }
                        width={ 0.07}
                        length={ 100 }
                        decay={ showTrail ? 3 : 1000 }
                        attenuation={(width) => width*10}
                    >
                    <mesh ref={ r.mesh }/>          
                </Trail>
            ))}
        </group>
    </>
}