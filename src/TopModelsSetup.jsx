import { useGLTF, Html, OrbitControls, useAnimations } from '@react-three/drei'
import { applyProps } from '@react-three/fiber'

// Box TV Credits
// * title:	TV
// * source:	https://sketchfab.com/3d-models/tv-ee802eec0b5742f2b036ea986b89ad88
// * author:	shedmon (https://sketchfab.com/shedmon)

// PS2 Credits
// * title:	ps2 Console
// * source:	https://sketchfab.com/3d-models/ps2-console-b20d0f22228b49e1b06ac252d0a799f3
// * author:	Jeffrey fan 2000 (https://sketchfab.com/8723516)

// PS2 Controller Credits
// * title:	PS2 Controller
// * source:	https://sketchfab.com/3d-models/ps2-controller-3b641465a47049c4b4cc02b004757e4a
// * author:	Jeffrey fan 2000 (https://sketchfab.com/8723516)

// Dancing Skeleton Credits:
// * title:	Dancing Skeleton
// * source:	https://sketchfab.com/3d-models/dancing-skeleton-122057d1fe524d509f831e62e921930c
// * author:	Saqib Ali (https://sketchfab.com/Syed.Saqib.Kazmi)

// Dancing Minion Credits
// * title:	Roblox Minion Dancing Twerk
// * source:	https://sketchfab.com/3d-models/roblox-minion-dancing-twerk-86f65df0c4e5407c9a9d81e11aea6db2
// * author:	arissya5 (https://sketchfab.com/arissya5)

// Dancing Stormtrooper Credits
// * title:	DANCING STORMTROOPER
// * source:	https://sketchfab.com/3d-models/dancing-stormtrooper-12bd08d66fe04a84be446e583d6663ac
// * author:	StrykerDoesAnimation (https://sketchfab.com/strykerdoesgames)

// Tennis Ball Credits
// * title:	Tennis Ball
// * source:	https://sketchfab.com/3d-models/tennis-ball-edc344dcc65440ea97b5eae84f1957a4
// * author:	Tentrox (https://sketchfab.com/sudharsanme)

// Ipod Credits
// * title:	iPod Classic
// * source:	https://sketchfab.com/3d-models/ipod-classic-13dbe30b0e45408c8bfaddfe6a4e8786
// * author:	Timothy Ahene (https://sketchfab.com/timothyahene)

// VHS Tape Credits
// * title:	VHS Tape
// * source:	https://sketchfab.com/3d-models/vhs-tape-5dd97a1e26734d89b38a0fb158dc753f
// * author:	Setsubou (https://sketchfab.com/setsubou)

export default function TopModelsSetup() {
    const scaleRatio = 0.0025

    // Dancers
    const skeleton = useGLTF('./models/skeleton.glb')
    const skellyAnimations = useAnimations(skeleton.animations, skeleton.scene)
    skellyAnimations.actions['mixamo.com'].play()

    const trooper = useGLTF('./models/stormtrooper.glb')
    const trooperAnimations = useAnimations(trooper.animations, trooper.scene)
    trooperAnimations.actions['mixamo.com'].play()

    const minion = useGLTF('./models/minion.glb')
    const minnyAnimations = useAnimations(minion.animations, minion.scene)
    minnyAnimations.actions['mixamo.com'].play()

    // Main models, could not find a better way to adjust env map intensity
    const tennis = useGLTF('./models/tennis.glb')
    const ipod = useGLTF('./models/ipod.glb')
    const ps2 = useGLTF('./models/ps2Console.glb')
    const ps2Controller = useGLTF('./models/ps2Controller.glb')
    const tv = useGLTF('./models/boxTV.glb')
    const vhs = useGLTF('./models/vhs.glb')

    const objects = [tennis, ipod, ps2, ps2Controller, tv, vhs]
    objects.forEach((object) => {
        Object.values(object.materials).forEach((material) => {
            applyProps(material, { envMapIntensity: 0.7 })
        })
    })

    return (
        <>
            {/* <OrbitControls /> */}
            <group>
                <primitive
                    object={tv.scene}
                    scale={[scaleRatio, scaleRatio, scaleRatio]}
                    position={[
                        scaleRatio * 375,
                        scaleRatio * 95,
                        -scaleRatio * 62.5
                    ]}
                />
                <Html transform distanceFactor={0.3} position={[0.878, 0.165, 0]}>
                    <div style={{ width: '1234px', height: '980px' }}>
                        <img
                            src="./images/pong.gif"
                            style={{
                                borderRadius: '100px',
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                    </div>
                </Html>
            </group>
            <group position={[0, 0, 0.5]} rotation={[-0.1, Math.PI / 5, 0]}>
                <primitive
                    object={ps2Controller.scene}
                    scale={[
                        scaleRatio * 100,
                        scaleRatio * 100,
                        scaleRatio * 100
                    ]}
                    position={[0, -scaleRatio * 80, scaleRatio * 107.5]}
                    rotation={[-Math.PI / 3, 0, 0]}
                />
                <primitive
                    object={ps2.scene}
                    scale={[scaleRatio * 50, scaleRatio * 50, scaleRatio * 50]}
                    position={[
                        scaleRatio * 12.5,
                        -scaleRatio * 130,
                        -scaleRatio * 12.5
                    ]}
                />
                <primitive
                    object={tennis.scene}
                    scale={[
                        scaleRatio * 500,
                        scaleRatio * 500,
                        scaleRatio * 500
                    ]}
                    position={[
                        -scaleRatio * 100,
                        -scaleRatio * 96,
                        scaleRatio * 106
                    ]}
                    rotation={[1, 1, 0]}
                />
                <group rotation={[0, Math.PI / 8, 0]}>
                    <primitive
                        object={ipod.scene}
                        scale={[
                            scaleRatio * 500,
                            scaleRatio * 550,
                            scaleRatio * 500
                        ]}
                        position={[
                            -scaleRatio * 60,
                            -scaleRatio * 50,
                            -scaleRatio * 40
                        ]}
                        rotation={[0, Math.PI * 1.3, Math.PI / 2]}
                    />
                    <primitive
                        object={vhs.scene}
                        scale={[
                            scaleRatio * 1000,
                            scaleRatio * 1000,
                            scaleRatio * 1000
                        ]}
                        position={[
                            scaleRatio * 10,
                            -scaleRatio * 56,
                            -scaleRatio * 80
                        ]}
                        rotation={[-Math.PI / 2, 0, -Math.PI / 3]}
                    />
                </group>
            </group>
            <group>
                <primitive
                    object={skeleton.scene}
                    scale={[scaleRatio * 30, scaleRatio * 30, scaleRatio * 30]}
                    position={[
                        scaleRatio * 220,
                        -scaleRatio * 110,
                        scaleRatio * 200
                    ]}
                    rotation={[0, Math.PI / 5, 0]}
                />
                <primitive
                    object={trooper.scene}
                    scale={[scaleRatio * 25, scaleRatio * 25, scaleRatio * 25]}
                    position={[
                        scaleRatio * 240,
                        -scaleRatio * 110,
                        scaleRatio * 400
                    ]}
                    rotation={[0, Math.PI / 3, 0]}
                />
                <primitive
                    object={minion.scene}
                    scale={[
                        scaleRatio * 3000,
                        scaleRatio * 3000,
                        scaleRatio * 3000
                    ]}
                    position={[
                        scaleRatio * 350,
                        -scaleRatio * 120,
                        scaleRatio * 220
                    ]}
                    rotation={[0, Math.PI / 8, 0]}
                />
            </group>
        </>
    )
}
