import { useGLTF, Html, OrbitControls, Environment } from '@react-three/drei'
import { applyProps } from '@react-three/fiber'
import * as THREE from 'three'
import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Portfolio from './Portfolio.jsx'

export default function Home() {
    return (
        <div className="h-screen overflow-y-scroll bg-gradient-to-br from-green3 via-green2 to-green1">
            <div className="h-[0vh]">
                <Intro />
            </div>
            <div className="md:mt-0 md:h-full md:w-full">
                <Items
                    rotation={[0, -Math.PI / 8, 0]}
                    position={[0.6, 2, 6]}
                    scale={[2, 2, 2]}
                />
            </div>
            <div className="h-[100vh]">
                <Portfolio />
            </div>
        </div>
    )
}

function Intro() {
    return (
        <div className="relative left-[8vw] top-[4vh]">
            <h1 className="text-primary  md:text-[90px]">
                <span className="text-[30px] font-normal">Hey,</span>
                <br /> I'm Michael
            </h1>
            <p className="mt-8 text-[20px] text-primary">
                Welcome to my portfolio
            </p>
        </div>
    )
}

function Items(props) {
    const scaleRatio = 0.0025

    const computer = useGLTF('./models/computer.glb')

    const computerParts = [
        computer.nodes.monitor_1_Material001_0,
        computer.nodes.monitor_1_Material002_0,
        computer.nodes.monitor_1_Material004_0,
        computer.nodes.monitor_1_Material006_0
    ]
    const computerMaterial = new THREE.MeshStandardMaterial({
        color: '#000000',
        roughness: 0.3,
        metalness: 0.7
    })
    const computerMaterial2 = new THREE.MeshBasicMaterial({ color: '#40b9d9' })
    computerParts.forEach((part) => {
        applyProps(part, { material: computerMaterial })
    })
    applyProps(computer.nodes.keyboard_1_Material001_0, {
        material: computerMaterial2
    })

    return (
        <>
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
                    <Model
                        name="boxTV"
                        scale={[scaleRatio, scaleRatio, scaleRatio]}
                        position={[
                            scaleRatio * 375,
                            scaleRatio * 95,
                            -scaleRatio * 62.5
                        ]}
                    />
                    <Model
                        name="ps2Controller"
                        scale={[
                            scaleRatio * 100,
                            scaleRatio * 100,
                            scaleRatio * 100
                        ]}
                        position={[0, -scaleRatio * 80, scaleRatio * 107.5]}
                        rotation={[-Math.PI / 3, 0, 0]}
                    />
                    <Model
                        name="ps2Console"
                        scale={[
                            scaleRatio * 50,
                            scaleRatio * 50,
                            scaleRatio * 50
                        ]}
                        position={[
                            scaleRatio * 12.5,
                            -scaleRatio * 130,
                            -scaleRatio * 12.5
                        ]}
                    />
                    <Html
                        transform
                        wrapperClass="screen"
                        distanceFactor={scaleRatio * 150}
                        position={[
                            scaleRatio * 375,
                            scaleRatio * 95,
                            scaleRatio * 115
                        ]}
                    >
                        <img src="./images/pong.gif" />
                    </Html>
                </group>
            </Canvas>
        </>
    )
}

function Model(props) {
    const model = useGLTF(`./models/${props.name}.glb`)

    return (
        <>
            <primitive
                object={model.scene}
                rotation={props.rotation}
                position={props.position}
                scale={props.scale}
            />
        </>
    )
}
