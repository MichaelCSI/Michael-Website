import { Canvas } from '@react-three/fiber'
import TopModelsSetup from './TopModelsSetup.jsx'
import { Environment } from '@react-three/drei'

export default function TopModels(props) {
    return (
        <div className="h-[40vh] w-[100vw] md:h-[60vh] md:w-[50vw]">
            <Canvas
                flat
                camera={{
                    fov: 45,
                    near: 0.1,
                    far: 2000,
                    position: [0, 4, 12]
                }}
            >
                <rectAreaLight
                    width={3}
                    height={3}
                    intensity={10}
                    color={'#ff6900'}
                    rotation={[-2, -Math.PI / 2, 0]}
                    position={[-3, 4, 10]}
                /> 
                <Environment preset='forest'/>
                <group
                    rotation={props.rotation}
                    position={props.position}
                    scale={props.scale}
                >
                    <TopModelsSetup />
                </group>
            </Canvas>
        </div>
    )
}
