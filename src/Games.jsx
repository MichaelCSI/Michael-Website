import { 
    useGLTF, 
    Trail, 
    Float, 
    OrbitControls,
    Environment,
    Text,
    Sky
} from '@react-three/drei'
import { useFrame, applyProps } from '@react-three/fiber'
import * as THREE from 'three'
import { useRef, useMemo } from 'react'
import { EffectComposer, Bloom, DepthOfField } from '@react-three/postprocessing'
import vertexShader from './water/vertex.jsx'
import fragmentShader from './water/fragment.jsx'

export default function Games(){

    const ocean = useRef()

    const uniforms = useMemo(
        () => ({
            uTime: { value: 0 },
            uBigWavesElevation: { value: 0.07 },
            uBigWavesFrequency: { value: new THREE.Vector2(2, 1.5) },
            uBigWavesSpeed: { value: 0.6 },

            uSmallWavesElevation: { value: 0.05 },
            uSmallWavesFrequency: { value: 4 },
            uSmallWavesSpeed: { value: 0.1 },
            uSmallIterations: { value: 2 },
            uXOffset: { value: 4 },

            uPointerCoordinates: { value: new THREE.Vector2(0, 0) },
            uViewPort: { value: new THREE.Vector2(0, 0) },
            uPointerSize: { value: 0.1 },
    
            uDepthColor: { value: new THREE.Color('#186691') },
            uSurfaceColor: { value: new THREE.Color('#9bd8ff') },
            uColorOffset: { value: 0.01 },
            uColorMultiplier: { value: 5 },

            uShaderMode: { value: 2 }

        }), []
    );  

    useFrame((state) => {
        const time = state.clock.elapsedTime
        ocean.current.material.uniforms.uTime.value = time
        ocean.current.material.uniforms.uXOffset.value = 0.5 * Math.sin(0.2 * time) + 4

        const pointerX = state.pointer.x + 1
        const pointerY = state.pointer.y + 1
        ocean.current.material.uniforms.uPointerCoordinates.value = new THREE.Vector2(pointerX, pointerY)

        const viewPort = state.size
        ocean.current.material.uniforms.uViewPort.value = new THREE.Vector2(viewPort.width, viewPort.height)
    })
    return <>
    <OrbitControls/>
        <Environment files='./hdrs/evening_road_01_puresky_4k.hdr'/>
        <color args={['#000000']} attach='background'/>
        {/* <EffectComposer>
            <Bloom
                mipmapBlur
                intensity={ 0.2 }
            />
        </EffectComposer> */}
        <mesh ref={ ocean } position={[0, 0, -10]} rotation={[-Math.PI / 2, 0, 0]} scale={1}>
            <planeGeometry args={[20, 40, 512, 1024]} />
            <shaderMaterial
                fragmentShader={fragmentShader}
                vertexShader={vertexShader}
                uniforms={uniforms}
            />
        </mesh>
        <Model 
            name='moon'
            rotation={ [0, -0.88, 0] }
            scale={ [0.1, 0.1, 0.1] }
            position={ [10, 2, -100] }
        />
    </>
}


// Credits: 
// * title:	Moon
// * source:	https://sketchfab.com/3d-models/moon-75c46b8b71ce4b23bb2acb7982fa652c
// * author:	AirStudios (https://sketchfab.com/sebbe613)
function Model(props)
{
    const model = useGLTF(`./models/${props.name}.glb`)

    return <>
        <primitive
            ref={props.r}
            object={ model.scene } 
            rotation={ props.rotation } 
            position={ props.position }
            scale={ props.scale }
        />
    </>
}