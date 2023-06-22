import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import TopModelsSetup from './TopModelsSetup.jsx'

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
                <Environment files="./hdrs/evening_road_01_puresky_4k.hdr" />
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
