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

export default function TextModel(props)
{
    const model = useGLTF(props.model)
    const [buttonHover, setButtonHover] = useState(false)

    // const scroll = useScroll()
    // const offset = 1 - scroll.offset
    const buttonRef = useRef()
    const modelRef = useRef()

    // useFrame((state, delta) => {
    //     // const time = state.clock.elapsedTime
    //     // buttonRef.current.position.x += 0.01
    //     const offset = 1 - scroll.offset
    //     // buttonRef.current.position.x = THREE.MathUtils.damp(buttonRef.current.position, buttonRef.current.position, delta)
    //     buttonRef.current.position.x = offset
    //     modelRef.current.position.x = offset
    //     state.camera.position.x = -offset *5
    // })

    return <>    
        <Float rotationIntensity={ 0.4 } position={ props.position } rotation={ props.rotation }> 
            <rectAreaLight
                width={ 2.5 }
                height={ 1.65 }
                intensity={ 60 }
                color={ '#ff6900' }
                rotation={ [ - 0.1, Math.PI, 0 ] }
                position={ [ 0, 0.55, - 1.15 ] }
            />
            <primitive object={ model.scene } ref={modelRef}>
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
            
            <Text
                font="./bangers-v20-latin-regular.woff"
                fontSize={ props.fontSize }
                position={ [2, 2.2, 0.75] }
                rotation-y={ - 1.2 }
                maxWidth={ 2 }
                color={ props.textPrimary }
            >
                {props.text}
            </Text>

            <Text
                font="./bangers-v20-latin-regular.woff"
                fontSize={ props.fontSize }
                position={ [2, 1.2, 0.5] }
                rotation-y={ - 1.2 }
                maxWidth={ 2 }
                color={ buttonHover ? props.textSecondary : props.textPrimary}
                outlineWidth={ 0.05 }
                outlineColor='#000000'
                onClick={() => window.open(props.media, '_blank')}
                onPointerEnter={ () => { 
                    document.body.style.cursor = 'pointer' 
                    setButtonHover(!buttonHover)
                }}
                onPointerLeave={ () => { 
                    document.body.style.cursor = 'default' 
                    setButtonHover(!buttonHover)
                }}            
            >
                Link
            </Text>


            {/* <mesh ref={ buttonRef }>
                <Html
                    wrapperClass={ props.buttonStyle }
                    transform
                    fontSize={ props.fontSize }
                    distanceFactor={ 5 }
                    position={ [2.2, 1, 0.2] }
                    rotation-y={ - 1.2 }
                >
                    <a href={ props.media }>
                        <button>Link</button>
                    </a>
                </Html>
            </mesh> */}
        </Float>
        {/* <ContactShadows
            position-y={ - 1.2 }
            opacity={ 0.4 }
            scale={ 5 }
            blur={ 2.4 }
            frames={ 1 }
        /> */}
    </>
}