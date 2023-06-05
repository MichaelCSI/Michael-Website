import { 
    Text, 
    Html, 
    ContactShadows, 
    Float, 
    useGLTF,
    Image, Scroll, useScroll
} from '@react-three/drei'
import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Model(props)
{
    const model = useGLTF(props.model)
    const [buttonHover, setButtonHover] = useState(false)

    // const scroll = useScroll()
    // const offset = 1 - scroll.offset
    const modelRef = useRef()

    // useFrame((state, delta) => {
        // const time = state.clock.elapsedTime
        // const offset = 1 - scroll.offset
        // modelRef.current.position.x = offset
        // state.camera.position.x = -offset *5
        // console.log(state.camera.position)
    // })

    return <>    
        <group position={ props.position }>
            <primitive object={ model.scene } ref={modelRef} rotation={ props.rotation } scale={ props.scale }>
                {props.image}
                {/* <Html
                        transform
                        wrapperClass={ props.mediaStyle }
                        distanceFactor={ 1.17 }
                        position={ [ 0, 1.56, - 1.4 ] }
                        rotation-x={ - 0.256 }
                    >
                    <iframe src={props.media}></iframe>
                </Html> */}
            </primitive>
            {props.text}
        </group>
    </>
}