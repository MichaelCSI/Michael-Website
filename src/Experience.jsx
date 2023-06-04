import TextModel from './TextModel.jsx'
import Phone from './Phone.jsx'
import { Perf } from 'r3f-perf'
import { 
    Environment,
    ScrollControls,
    Scroll,
    OrbitControls,
    ContactShadows,
    Image,
    Stage
} from '@react-three/drei'

// import { useRef } from 'react'
// import { useFrame } from '@react-three/fiber'

export default function Experience()
{
    return <>
        {/* <color args={ [ '#241a1a' ] } attach="background" />   */}
        {/* <Perf position="top-left" /> */}
        <Environment preset="city"/>
        {/* <OrbitControls></OrbitControls> */}
        {/* <ScrollControls pages={ 3 }>
            <Scroll html>
                <a href='https://devpost.com/software/skin-cancer-detection-app-fm7ptq'>
                    <button className="laptopButton">Link</button>
                </a>
                <a href='https://devpost.com/software/skin-cancer-detection-app-fm7ptq'>
                    <button className="phoneButton">Link</button>
                </a>
            </Scroll>
        </ScrollControls> */}
        <ScrollControls pages={ 3 } horizontal={ true }>
            <Scroll>
                <TextModel 
                    model='https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf'
                    media='https://threejs-practice-pi.vercel.app/'
                    position={ [0, -1.2, 0] } 
                    rotation={ [0, -0.1, 0] }
                    text="Three Galaxy"
                    fontSize={ 0.5 }
                    textPrimary='#ff6030'
                    textSecondary='#de4222'
                    buttonStyle="blueButton"
                    image={
                        <Image 
                            scale={ [3, 2, 1] }
                            position={ [ 0, 1.56, - 1.4 ] }
                            rotation-x={ - 0.256 }
                            url = './Galaxy.png'
                        />
                    }
                />
                <TextModel
                    model='https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf'
                    media='https://devpost.com/software/skin-cancer-detection-app-fm7ptq'
                    position={ [6, -1.2, 0] } 
                    rotation={ [-0.1, -0.3, 0] }
                    text="Skin Cancer Detection App (Hackathon)"
                    fontSize={ 0.4 }
                    textPrimary='#fe7f9c'
                    textSecondary='#f14d73'
                    buttonStyle="pinkButton"
                    image={
                        <Image 
                            scale={ [1.5, 2.95, 1] }
                            position={ [ 0.17, 1.35, 0.09 ] }
                            url = './SkinApp.jpeg'
                        />
                    }
                />
                <Phone position={ [10, -1.2, 0] }/>
            </Scroll>
        </ScrollControls>
    </>
}