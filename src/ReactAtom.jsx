import { Trail, OrbitControls, TransformControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'



export default function ReactAtom(props)
{
    const trailRef = useRef()
    const trailOffset = props.index * 2 * Math.PI / (props.numTrails - 1)
    const [showTrail, setShowTrail] = useState(false)

    useFrame((state) => {
        const time = state.clock.elapsedTime

        const x = Math.sin(props.frequency * time + trailOffset) * props.amplitude
        const y = props.index === 0 ? 0 : Math.sin(props.frequency * time) * props.amplitude
        const z = Math.cos(props.frequency * time) * props.amplitude
    
        trailRef.current.position.set(x, y, z)

        // Done to fix the trail starting/rendering at center screen briefly
        if(time > 0.1) {
            setShowTrail(true)
        }

    })

    return <>
        <mesh scale={ props.atomScale}>
            <sphereGeometry args={[0.12, 16, 16]} />
            <meshBasicMaterial color="#61dbfb"/>
        </mesh> 
        <Trail
            width={ 0.05}
            color={ props.trailColor }
            length={ 50 }
            decay={ showTrail ? 8 : 500 }
            attenuation={(width) => width*10}
            >
            <mesh ref={ trailRef }/>          
        </Trail>
    </>
}

ReactAtom.defaultProps = {
    index: 0,
    numTrails: 1,
    trailColor: '#ff0000',
    amplitude: 1,
    frequency: 3
}