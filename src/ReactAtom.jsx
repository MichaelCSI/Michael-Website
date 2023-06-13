import { Trail, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'


export default function ReactAtom(props)
{
    const scaleRatio = props.scaleRatio
    const textRef = useRef()
    useFrame((state) => {
        const time = state.clock.elapsedTime
        textRef.current.fillOpacity = Math.sin(time) + 3
    })

    return <>
        <group position={ props.position }>
            <Text
                ref={ textRef }
                font="./fonts/SourceCodePro-BlackItalic.ttf"
                fontSize={ scaleRatio * 0.3 }
                outlineWidth={ scaleRatio * 0.02 }
                outlineColor='#000000'
                maxWidth={ 2 }
                color={ '#61dbfb' }
                position={ [0, scaleRatio * 0.65, 0] }
            >
                Made with R3F
            </Text>
            {[...Array(3).keys()].map((_, index) => (
                <Logo
                    scaleRatio={ scaleRatio }
                    key={ index }
                    index={ index }
                    numTrails={ 3 }
                    trailColor='#61dbfb'
                    frequency={ 8 }
                />
            ))}
        </group>
    </>
}

function Logo(props)
{
    const meshRef = useRef()
    const [showTrail, setShowTrail] = useState(false)

    const trailOffset = props.index * 2 * Math.PI / (props.numTrails - 1)
    const amp = props.scaleRatio * 0.35

    useFrame((state) => {
        const time = state.clock.elapsedTime

        const x = Math.sin(props.frequency * time + trailOffset) * amp
        const y = props.index === 0 ? 0 : Math.sin(props.frequency * time) * amp
        const z = Math.cos(props.frequency * time) * amp
        meshRef.current.position.set(x, y, z)

        // Done to fix the trail starting/rendering at center screen briefly
        if(time > 0.2) {
            setShowTrail(true)
        }

    })

    return <>
        <mesh scale={ [props.scaleRatio * 0.5, props.scaleRatio * 0.5, props.scaleRatio * 0.5] }>
            <sphereGeometry args={[0.12, 16, 16]} />
            <meshBasicMaterial color="#61dbfb"/>
        </mesh> 
        <Trail
            width={ props.scaleRatio * 0.05}
            color={ props.trailColor }
            length={ 40 }
            decay={ showTrail ? 8 : 500 }
            attenuation={(width) => width*10}
            >
            <mesh ref={ meshRef }/>          
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