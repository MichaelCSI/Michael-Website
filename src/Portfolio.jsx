import Model from './Model.jsx'
import Phone from './Phone.jsx'
import LinkText from './LinkText.jsx'
import Nav from './Nav.jsx'
import MODELS from './modelList.js'

import { Perf } from 'r3f-perf'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { 
    Environment,
    OrbitControls,
    ScrollControls,
    Scroll,
    useScroll,
    ContactShadows,
    Image,
    Float
} from '@react-three/drei'

export default function Portfolio()
{
    const scroll = useScroll()
    console.log(scroll)

    const refs = useRef(new Array())
    
    useFrame((state, delta) => {
        const time = state.clock.elapsedTime
        refs.current[0].position.x = Math.sin(time)
    })

    return <>
        {/* <Perf position="top-left" /> */}
        {/* <OrbitControls></OrbitControls> */}
        <Environment preset="city" />
        <rectAreaLight
            width={ 2.5 }
            height={ 1.65 }
            intensity={ 60 }
            color={ '#ff6900' }
            rotation={ [ - 0.1, Math.PI, 0 ] }
            position={ [ 0, 0.55, - 1.15 ] }
        />
        <ContactShadows
            position-y={ - 1.8 }
            opacity={ 0.4 }
            scale={ 30 }
            blur={ 2.4 }
            // frames= { 1 }
        />
        <Nav/>

        <ScrollControls pages={ 3 } horizontal={ true }>
            <Float rotationIntensity={ 0.3 }> 
                <Scroll> 
                    {MODELS.map((model, index) => (
                        <Model 
                            modelRef={ (element) => refs.current.push(element) }
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
                    {/* <Phone position={ [3 * positionXGap, -1.2, 0] }/> */}
                </Scroll>
            </Float>
        </ScrollControls>
    </>
}