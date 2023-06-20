import { useGLTF, Html, OrbitControls, Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Setup from './Setup.jsx'

export default function Items(props) {
    return (
        <div className="h-[50vh] w-[90vw] md:h-[60vh] md:w-[50vw]">
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
                    <Setup />
                </group>
            </Canvas>
        </div>
    )
}
