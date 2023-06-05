import Model from './Model.jsx'
import Phone from './Phone.jsx'
import LinkText from './LinkText.jsx'
import { Perf } from 'r3f-perf'
import { 
    Environment,
    ScrollControls,
    Scroll,
    OrbitControls,
    ContactShadows,
    Image,
    Float
} from '@react-three/drei'

// import { useRef } from 'react'
// import { useFrame } from '@react-three/fiber'

export default function Experience()
{
    const positionXGap = 6
    const nav = ['Home', 'Games']

    // TODO: Consider using mapping to reduce repeated components like nav


    return <>
        {/* <Perf position="top-left" /> */}
        {/* <OrbitControls></OrbitControls> */}

        <Environment preset="city"/>
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

        <ScrollControls pages={ 3 } horizontal={ true }>
            <Float rotationIntensity={ 0.4 }> 
                {nav.map((text, index) => (
                    <LinkText
                        media='https://threejs-practice-pi.vercel.app/'
                        linkText={text}
                        fontSize={ 0.2 }
                        textPrimary='#2cb43e'
                        textSecondary='#359943'
                        position={ [-2.7 + index * 0.6, 2.65, 0] }
                        rotation={ [0, 0, 0] }
                    />
                ))}
                <Scroll> 
                    <Model 
                        model='https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf'
                        position={ [0 * positionXGap, -1.5, 0] } 
                        rotation={ [0, -0.1, 0] }
                        image={
                            <Image 
                                scale={ [3, 2, 1] }
                                position={ [ 0, 1.56, - 1.4 ] }
                                rotation-x={ - 0.256 }
                                url = './galaxy.png'
                            />
                        }
                        text={
                            <LinkText
                                media='https://threejs-practice-pi.vercel.app/'
                                text="Three Galaxy"
                                fontSize={ 0.4 }
                                textPrimary='#ff6030'
                                textSecondary='#de4222'
                            />
                        }
                    />
                    <Model
                        model='https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf'
                        position={ [1 * positionXGap, -1, 0] } 
                        rotation={ [-0.4, -0.3, 0] }
                        scale={ [0.8, 0.8, 0.8] }
                        image={
                            <Image 
                                scale={ [1.51, 2.95, 1] }
                                position={ [ 0.17, 1.35, 0.09 ] }
                                url = './hackathonApp.jpeg'
                            />
                        }
                        text={
                            <LinkText
                                media='https://devpost.com/software/skin-cancer-detection-app-fm7ptq'
                                text="Skin Cancer Detection App (Hackathon)"
                                fontSize={ 0.4 }
                                textPrimary='#fe7f9c'
                                textSecondary='#f14d73'
                                position={ [2.2, 1.5, 0.75] }
                            />
                        }
                    />
                    <Model
                        model='https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/umbrella/model.gltf'
                        position={ [2 * positionXGap, -0.5, 0] } 
                        rotation={ [0, Math.PI * 1.2, 0] }
                        text={
                            <LinkText
                                media='https://www.youtube.com/channel/UCo9DGaDW1IbWbTjPcEJQELg'
                                text="Unity/Blender"
                                fontSize={ 0.4 }
                                textPrimary='#4e6cb7'
                                textSecondary='#3c5b95'
                                position={ [2.2, 1.2, 0.75] }
                            />
                        }
                    />
                    <Model
                        model='https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/ruby/model.gltf'
                        position={ [2 * positionXGap + 0.8, 0, 0] } 
                        rotation={ [0, Math.PI * 1.2, 0] }
                        scale={ [0.3, 0.3, 0.3] }
                    />
                    {/* <Phone position={ [3 * positionXGap, -1.2, 0] }/> */}
                </Scroll>
            </Float>
        </ScrollControls>
    </>
}