import {
    useGLTF,
    useScroll
} from '@react-three/drei'

export default function Model(props)
{

    const model = useGLTF(props.model)

    const scroll = useScroll()
    // console.log(useScroll())
    const offset = 1 - scroll.offset

    return <>    
        <group position={ props.position }>
            <primitive object={ model.scene } ref={ props.modelRef } rotation={ props.rotation } scale={ props.scale }>
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