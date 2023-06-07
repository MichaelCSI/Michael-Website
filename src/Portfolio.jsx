import Model from './Model.jsx'
import LinkText from './LinkText.jsx'
import MODELS from './modelList.js'

import { 
    Environment,
    OrbitControls,
    ScrollControls,
    ContactShadows,
    Image,
    Float
} from '@react-three/drei'

export default function Portfolio()
{
    return <>
        {/* <OrbitControls></OrbitControls> */}
        <color args={ [ 'ivory' ] } attach="background" />

        <Environment preset="city" />
        <rectAreaLight
            width={ 2.5 }
            height={ 1.65 }
            intensity={ 60 }
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
            <Float rotationIntensity={ 0.3 }> 
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