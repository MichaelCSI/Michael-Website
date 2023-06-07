import {
    useGLTF,
    useScroll
} from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Model(props)
{
    const model = useGLTF(props.model)
    const modelRef = useRef()
    const scroll = useScroll()
    const modelOffset = Math.PI * 2 / props.numModels
    
    useFrame((state) => {
        const time = state.clock.elapsedTime
        const offset = - scroll.offset * Math.PI * 2
        const radius = 4

        modelRef.current.position.x = Math.sin(offset + props.modelIndex * modelOffset) * radius - 1
        modelRef.current.position.z = Math.cos(offset + props.modelIndex * modelOffset) * radius
        
        // "Normalize" Z to [0, 1.5], scale model based on Z
        const range = modelRef.current.position.z / radius
        const zPosNormalized = (range + 1.1) / 1.5
        modelRef.current.scale.set(zPosNormalized, zPosNormalized, zPosNormalized)
    })

    return <>    
        <group position={ props.position } ref={ modelRef }>
            <primitive object={ model.scene } rotation={ props.rotation } scale={ props.scale }>
                {props.image}
            </primitive>
            {props.text}
        </group>
    </>
}