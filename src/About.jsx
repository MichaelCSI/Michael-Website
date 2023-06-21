import { useState, useRef } from 'react'
import {
    useAnimations,
    useGLTF,
    Environment,
    Float,
    ContactShadows
} from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'

// Skateboard model credits
// * title:	Skateboard Design 2
// * source:	https://sketchfab.com/3d-models/skateboard-design-2-dca69f083d6849e5beef3526a2f9953a
// * author:	RBG_illustrations (https://sketchfab.com/RBG_illustrations)

// Piano model credits
// * title:	Four octave MIDI Keyboard
// * source:	https://sketchfab.com/3d-models/four-octave-midi-keyboard-b9ce4b06980643ecbc184b865e2c6bf2
// * author:	Ivan_WSK (https://sketchfab.com/ivan-wsk)

export default function About() {
    return (
        <div className="items-top mb-20 flex h-[100vh] w-[80vw] flex-col gap-x-5 md:h-[70vh] md:w-[100vw] md:flex-row">
            <Me />
            <Experience />
        </div>
    )
}

function Me() {
    return (
        <div className="relative mb-10 ml-5 w-[90vw] md:mb-0 md:ml-[5vw] md:w-[50vw]">
            <div className="flex items-center gap-x-5">
                <img
                    src="./images/me.jpg"
                    alt=""
                    className="h-40 w-40 rounded-full transition duration-200 hover:scale-110"
                />
                <h1 className="mb-2 bg-gradient-to-br from-creations1 from-30% to-creations2 bg-clip-text text-5xl font-semibold leading-10 text-transparent">
                    About Me
                </h1>
            </div>
            <p className="mt-5 text-lg leading-6 text-primary">
                I grew up in Ottawa, Ontario and started coding in high school.
                I did some basic web development as a hobby and after a couple
                of high school programming courses (as well as some online
                learning), decided to pursue a bachelor's in computer science at
                the University of Ottawa. Aside from coding, I like to skate,
                play video games, and practice the piano.
            </p>
            <div className="mt-6 flex h-[16vh] gap-x-6 md:h-[30vh]">
                <Canvas
                    flat
                    camera={{
                        fov: 45,
                        near: 0.1,
                        far: 2000,
                        position: [0, 4, 12]
                    }}
                    style={{ touchAction: 'none' }}
                >
                    <Hobbies />
                </Canvas>
            </div>
        </div>
    )
}

function Hobbies() {
    const piano = useGLTF('./models/piano.glb')
    const animations = useAnimations(piano.animations, piano.scene)
    animations.actions['Take 001'].play()

    const skateRef = useRef()
    useFrame((state) => {
        const time = state.clock.elapsedTime
        skateRef.current.rotation.x = Math.sin(time)

        skateRef.current.position.y = Math.abs(2 * Math.sin(time - 0.2)) - 2.3
    })

    return (
        <>
            <Environment files="./hdrs/evening_road_01_puresky_4k.hdr" />
            <ContactShadows
                position-y={-2.5}
                opacity={0.5}
                scale={30}
                blur={2.4}
            />
            <Float speed={3} rotationIntensity={0.5} floatIntensity={1.5}>
                <primitive
                    object={useGLTF('./models/skateboard.glb').scene}
                    ref={skateRef}
                    position={[-8, 0, 0]}
                    scale={[0.32, 0.32, 0.32]}
                />
                <primitive
                    object={useGLTF('./models/piano.glb').scene}
                    position={[5, 1, 0]}
                    rotation={[Math.PI / 6, 0, 0]}
                    scale={[12.6, 12.6, 12.6]}
                />
            </Float>
        </>
    )
}

function Experience() {
    const [education, setEducation] = useState(false)
    return (
        <div className="relative ml-5 w-[80vw] md:ml-[5vw] md:w-[36vw]">
            <div>
                <div className="flex items-center gap-x-5">
                    <h1 className="-mb-4 mt-14 grid place-items-center bg-gradient-to-br from-creations1 from-30% to-creations2 bg-clip-text text-2xl font-semibold text-primary text-transparent md:mt-0">
                        {education ? 'Education' : 'Work Experience'}
                    </h1>
                    <button
                        className="btn-primary mt-16 from-creations1  from-30% to-creations2 hover:bg-gradient-to-r hover:text-primary md:mt-5"
                        onClick={() => {
                            setEducation(!education)
                        }}
                    >
                        {education ? 'See Work Experience' : 'See Education'}
                    </button>
                </div>
                <ol className="border-l border-gray-200">
                    {education ? (
                        <>
                            <TimeSlot
                                date="Current | 3rd Year"
                                title="UOttawa Honours BSc Computer Science"
                                image="./images/experience/uottawa.png"
                                description="Dean's list, CGPA 9.6/10"
                            />
                            <TimeSlot
                                date="2021 | Graduation"
                                title="Lisgar Collegiate Institute"
                                image="./images/experience/lisgar.jpeg"
                                description="Honour roll, best sense of humour award nominee"
                            />
                        </>
                    ) : (
                        <>
                            <TimeSlot
                                date="2022"
                                title="QA Automation Engineer | Shoebox Ltd."
                                image="./images/experience/shoebox.png"
                                description="Worked with JS, WDIO, and Jest to develop automated test suites as part of the QA team"
                            />
                            <TimeSlot
                                date="2021"
                                title="Busser | Zaks Diner"
                                image="./images/experience/zaks.png"
                                description="Welcomed customers and cleaned tables"
                            />
                            <TimeSlot
                                date="2019"
                                title="Lifeguard | H20"
                                image="./images/experience/h20.png"
                                description="Enforced pool rules, ensured a safe environment"
                            />
                        </>
                    )}
                </ol>
            </div>
        </div>
    )
}

function TimeSlot(props) {
    return (
        <li className="my-8 ml-4">
            <div className="relative -left-6 mt-1.5 h-4 w-4 rounded-full border bg-gradient-to-r from-creations1 from-60% to-creations2" />
            <time className="text-sm font-normal leading-none text-tertiary ">
                {props.date}
            </time>
            <div className="my-1 flex gap-x-3">
                <h3 className="text-lg font-semibold text-primary ">
                    {props.title}
                </h3>
                <img
                    src={props.image}
                    alt=""
                    className="-mt-1 h-8 w-8 rounded-lg"
                />
            </div>
            <p className="text-base font-normal text-primary">
                {props.description}
            </p>
        </li>
    )
}
