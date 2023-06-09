import LinkText from './LinkText.jsx'
import MODELS from './modelList.js'
import * as THREE from 'three'
import { 
    Environment,
    useGLTF,
    useScroll,
    ScrollControls,
    ContactShadows,
    Image,
    Float,
    Sky,
    OrbitControls
} from '@react-three/drei'

import { useRef } from 'react'
import { useFrame, applyProps } from '@react-three/fiber'

// 3D models are from https://market.pmnd.rs/
export default function Portfolio()
{
    return <>
    {/* <OrbitControls/> */}
        <Environment preset="city" />
        <Sky azimuth={ 0.75 } rayleigh={ 0.2 }/>
        <rectAreaLight
            width={ 2.5 }
            height={ 1.65 }
            intensity={ 30 }
            color={ '#ff6900' }
            rotation={ [ -1, 0, 0 ] }
            position={ [ 0, 4, 6 ] }
        />
        <ContactShadows
            position-y={ - 1 }
            opacity={ 0.5 }
            scale={ 30 }
            blur={ 2.4 }
            // frames= { 1 }
        />
        <ScrollControls infinite={ true } pages={ 4 } horizontal={ true }>
            <Float rotationIntensity={ 0.2 } speed={ 2 } floatIntensity={ 0.5 }> 
                    {MODELS.map((model, index) => (
                        <Model 
                            numModels={ MODELS.length }
                            modelIndex={ index }
                            key={ model.model }
                            model={ model.model }
                            position={ model.position }
                            rotation={ model.rotation }
                            scale={ model.scale }
                            image={ model.image ? 
                                <Image 
                                    scale={ model.image.scale }
                                    position={ model.image.position }
                                    rotation={ model.image.rotation }
                                    url={ model.image.url }
                                /> : null
                            }
                            text={ model.linkText ? 
                                <LinkText
                                    media={ model.linkText.media }
                                    newTab={ true }
                                    text={ model.linkText.text }
                                    fontSize={ model.linkText.fontSize }
                                    textPrimary={ model.linkText.textPrimary }
                                    textSecondary={ model.linkText.textSecondary }
                                    position={ model.linkText.position }
                                /> : null
                            }
                        />
                    ))}
            </Float>
        </ScrollControls>
    </>
}

function Model(props)
{
    const model = useGLTF(props.model)
    const modelRef = useRef()
    const scroll = useScroll()
    const modelOffset = Math.PI * 2 / props.numModels

    // Adjust phone screen to white
    if(model.nodes.SCREEN) {
        console.log(model.nodes.SCREEN.material)
        applyProps(model.nodes.SCREEN, { material: new THREE.MeshBasicMaterial({ color: '#ffffff'})})
    }
    
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