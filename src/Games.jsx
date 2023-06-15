// Credits:

// Name: 3D Brand Logos Free low-poly 3D model
// Author: AtroRocket
// Link: https://www.cgtrader.com/free-3d-models/architectural/decoration/3d-brand-logos

// * title:	Computer
// * source:	https://sketchfab.com/3d-models/computer-ac4fc7339cd643aa93a0ea0c5b12544c
// * author:	inesmerino (https://sketchfab.com/inesmerino)

// * title:	TV
// * source:	https://sketchfab.com/3d-models/tv-ee802eec0b5742f2b036ea986b89ad88
// * author:	shedmon (https://sketchfab.com/shedmon)

// * title:	PS2 Controller
// * source:	https://sketchfab.com/3d-models/ps2-controller-3b641465a47049c4b4cc02b004757e4a
// * author:	Jeffrey fan 2000 (https://sketchfab.com/8723516)

// * title:	ps2 Console
// * source:	https://sketchfab.com/3d-models/ps2-console-b20d0f22228b49e1b06ac252d0a799f3
// * author:	Jeffrey fan 2000 (https://sketchfab.com/8723516)

// Pong gif: https://henrikostergaard.com/home

import ReactAtom from './ReactAtom.jsx'
import { 
    useGLTF, 
    Trail, 
    Float, 
    OrbitControls,
    Environment,
    Text,
    Sky
} from '@react-three/drei'
import { useFrame, applyProps } from '@react-three/fiber'
import * as THREE from 'three'
import { useRef, useState } from 'react'
import Setup from './Setup.jsx'
import { EffectComposer, Bloom } from '@react-three/postprocessing'

export default function Games()
{

    const meRef = useRef()
    useFrame((state) => {
        const time = state.clock.elapsedTime
        meRef.current.fillOpacity = Math.sin(time) + 3
    })

    return <>
        <Environment files='./hdrs/evening_road_01_puresky_4k.hdr' background={ true }/>
        <color args={['#110050']} attach='background'/>
        <EffectComposer>
            <Bloom
                mipmapBlur
                intensity={ 0.4 }
            />
        </EffectComposer>
        <OrbitControls/>
        <Text
            ref={ meRef }
            font="./fonts/SourceCodePro-BlackItalic.ttf"
            fontSize={ 0.2 }
            outlineWidth={ 0.02 }
            outlineColor='#000000'
            maxWidth={ 3 }
            color={ '#61dbfb' }
            position={ [-4, 1, 0] }
        >
            Bla bla bla, I am Michael from planet Earth and this is my website
        </Text>
        <ReactAtom 
            position={ [-4, -1, 0] }
            scaleRatio={ 0.8 }
        />
        <group position={ [0, -0.5, 0] }>
            {/* <ReactAtom 
                position={ [-1.35, 0.3, 0.25] }
                scaleRatio={ 0.3 }
            /> */}
            <Signature
                position={ [1, 0.8, 1.91] }
                amp={ 0.1 }
            />
            <Setup/>
        </group>
    </>
}

function Signature(props)
{
    const mRef = useRef()
    const oRef = useRef()
    const dotRef = useRef()
    const bounceRef = useRef()

    const trailRefs = [useRef(), useRef(), useRef(), useRef()]
    const [showTrail, setShowTrail] = useState(false)

    const amp = props.amp

    useFrame((state) => {
        const time = state.clock.elapsedTime
       
        // Position M
        const freqM = 2
        const xM = amp * Math.sin(freqM * time) + amp * 0.01 * Math.sin(time * freqM * 0.6)
        const yM = 2 * amp * ((Math.abs(Math.sin(freqM * time))) + 1.3 * Math.abs(Math.cos(freqM * time)))
        mRef.current.position.set(xM, yM, 0)

        // Position O
        const freqO = 5
        const xO = -amp * 0.8 * Math.sin(freqO * time) + amp * 2.8
        const yO = amp * 0.8 * Math.cos(freqO * time) + amp * 2.7
        oRef.current.position.set(xO, yO, 0)
        // Position dot
        const freqDot = 5
        const xDot = amp * 0.05 * Math.sin(freqDot * time) + amp * 1.6
        const yDot = amp * 0.05 * Math.cos(freqDot * time) + amp * 2.1
        dotRef.current.position.set(xDot, yDot, 0)

        // Position bounce
        const freqBounce = 0.5
        const xBounce = 2.5 * amp * Math.sin(freqBounce * time) + amp * 1.2
        const yBounce = 0.3 * amp * (Math.abs(Math.cos(freqBounce * time * 16))) + amp
        bounceRef.current.position.set(xBounce, yBounce, 0)

        // Color
        const intensity = 0.5
        const r = Math.sin(time) * intensity + intensity
        const g = Math.sin(0.6 * time) * intensity + intensity
        const b = Math.sin(0.2 * time) * intensity + intensity
        trailRefs.forEach((trail) => {
            trail.current.material.color.set(r, g, b)
        })

        // Done to fix the trail starting/rendering at center screen briefly
        if(time > 0.2) {
            setShowTrail(true)
        }
    })

    return <>
        <group position={ props.position }>
            {[mRef, oRef, dotRef, bounceRef].map((r, index) => (
                    <Trail
                        key={ 'trail'+index }
                        ref={ trailRefs[index] }
                        width={ 0.14 * amp}
                        length={ 100 }
                        decay={ showTrail ? 3 : 1000 }
                        attenuation={(width) => width*10}
                    >
                    <mesh ref={ r }/>          
                </Trail>
            ))}
        </group>
    </>
}


