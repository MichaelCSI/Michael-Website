import * as THREE from 'three'
import {
    Environment,
    useGLTF,
    ContactShadows,
    Image,
    Float,
    OrbitControls,
    PresentationControls
} from '@react-three/drei'

import { applyProps } from '@react-three/fiber'
import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion'

const isMobileDevice = () => {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ]

    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem)
    })
}
export default function Project(props) {
    // Adjust phone screen to white
    const phone = useGLTF('./models/phone.gltf')
    applyProps(phone.nodes.SCREEN, {
        material: new THREE.MeshBasicMaterial({ color: '#ffffff' })
    })

    return (
        <motion.div
            className="mx-5 mb-10 flex flex-col md:mx-20 md:flex-row md:mb-0"
            initial={{ opacity: 0, x: -200 }}
            whileInView={{
                opacity: 1,
                x: 0
            }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
        >
            <Description
                title={props.description.title}
                style={props.description.style}
                link={props.description.link}
                linkText={props.description.linkText}
                tech={props.description.tech}
                description={props.description.description}
                date={props.description.date}
                award={props.award}
            />
            {!isMobileDevice() ? (
                <div className="my-[6rem] h-[15rem] w-[80vw] md:my-2 md:h-[60vh] md:w-[40vw]">
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
                        {/* <OrbitControls /> */}
                        <Environment files="./hdrs/evening_road_01_puresky_4k.hdr" />
                        <rectAreaLight
                            width={2.5}
                            height={1.65}
                            intensity={30}
                            color={'#ff6900'}
                            rotation={[-1, 0, 0]}
                            position={[0, 4, 6]}
                        />
                        <ContactShadows
                            position-y={
                                props.shadowY ? props.shadowY - 2.5 : -2.5
                            }
                            opacity={0.5}
                            scale={30}
                            blur={2.4}
                        />
                        <PresentationControls
                            global
                            rotation={[0.13, 0.1, 0]}
                            polar={[-0.1, 0.1]}
                            azimuth={[-0.3, 0.3]}
                            config={{ mass: 2, tension: 400 }}
                            snap={{ mass: 4, tension: 400 }}
                        >
                            <Float
                                rotationIntensity={0.3}
                                speed={2}
                                floatIntensity={2}
                            >
                                <group
                                    position={props.position}
                                    scale={props.scale}
                                    rotation={props.rotation}
                                >
                                    <primitive
                                        object={
                                            useGLTF(props.model.source).scene
                                        }
                                        position={props.model.position}
                                        rotation={props.model.rotation}
                                        scale={props.model.scale}
                                    />
                                    {props.image ? (
                                        <Image
                                            scale={props.image.scale}
                                            position={props.image.position}
                                            rotation={props.image.rotation}
                                            url={props.image.url}
                                        />
                                    ) : null}
                                    {props.title ? (
                                        <LinkText
                                            media={props.title.media}
                                            text={props.title.text}
                                            fontSize={props.title.fontSize}
                                            textPrimary={
                                                props.title.primaryColor
                                            }
                                            textSecondary={
                                                props.title.secondaryColor
                                            }
                                            position={props.title.position}
                                            ySpacing={props.title.ySpacing}
                                        />
                                    ) : null}
                                    {props.gallery1 ? (
                                        <Gallery1
                                            rotation={props.model.rotation}
                                        />
                                    ) : null}
                                    {props.gallery2 ? (
                                        <Gallery2
                                            rotation={props.model.rotation}
                                        />
                                    ) : null}
                                </group>
                            </Float>
                        </PresentationControls>
                    </Canvas>
                </div>
            ) : null}
        </motion.div>
    )
}

function Gallery1(props) {
    return (
        <>
            <Image
                position={[-0.5, 0, 0.05]}
                rotation={props.rotation}
                url={'./images/portfolio/thunderstorm.png'}
            />
            <Image
                position={[1, 0, 0.05]}
                rotation={props.rotation}
                url={'./images/portfolio/room.png'}
            />
            <Image
                position={[2.5, 0, 0.05]}
                rotation={props.rotation}
                url={'./images/portfolio/island.png'}
            />
        </>
    )
}

function Gallery2(props) {
    return (
        <>
            <Image
                scale={[2.05, 2.85, 2]}
                position={[-1.44, 0.02, 0.05]}
                rotation={props.rotation}
                url={'./images/portfolio/shader1.png'}
            />
            <Image
                scale={[3.2, 2, 2]}
                position={[0, 2.98, -1.18]}
                rotation={props.rotation}
                url={'./images/portfolio/shader2.png'}
            />
            <Image
                scale={[2.05, 2.85, 2]}
                position={[1.44, 0.02, 0.05]}
                rotation={props.rotation}
                url={'./images/portfolio/shader3.png'}
            />
        </>
    )
}

function Description(props) {
    const style = {
        galaxy: {
            gradient: 'bg-gradient-to-r from-galaxy1 to-galaxy2 to-40%',
            hoverGradient:
                'hover:bg-gradient-to-r from-galaxy1 to-galaxy2 from-20% hover:text-primary'
        },
        app: {
            gradient: 'bg-gradient-to-r from-app1 to-app2 to-60%',
            hoverGradient:
                'hover:bg-gradient-to-r from-app1 to-app2 to-70% hover:text-primary'
        },
        creations: {
            gradient: 'bg-gradient-to-r from-creations1 to-creations2 to-60%',
            hoverGradient:
                'hover:bg-gradient-to-r from-creations1 to-creations2 to-70% hover:text-primary'
        },
        shader: {
            gradient: 'bg-gradient-to-r from-shader1 to-shader2 to-60%',
            hoverGradient:
                'hover:bg-gradient-to-r from-shader1 to-shader2 to-70% hover:text-primary'
        }
    }

    return (
        <div className="relative h-[44vh] w-[80vw] md:mx-10 md:h-[60vh] md:w-[50vw]">
            <div className="group relative text-sm leading-6 md:text-base md:leading-7">
                <h1
                    className={`${
                        style[props.style].gradient
                    } mb-2 bg-clip-text text-xl font-semibold text-transparent`}
                >
                    {props.title}
                </h1>
                <div className="flex items-center gap-x-5">
                    <p className="text-center text-primary">{props.date}</p>
                    <a
                        href={props.link}
                        target="_blank"
                        className={`${
                            style[props.style].hoverGradient
                        } btn-primary rounded-full px-4 py-1.5 text-center text-gray-600`}
                    >
                        {props.linkText}
                    </a>
                    {props.award ? props.award : null}
                </div>
                <p className="mt-5 w-[90vw] text-primary md:w-[40vw]">
                    {props.description}
                </p>
            </div>
            <div className="relative mt-8 flex items-center gap-x-8">
                {props.tech.map((tech) => (
                    <div className="flex items-center gap-x-2" key={tech.name}>
                        <img
                            src={tech.logo}
                            alt=""
                            className="h-8 w-8 rounded-full"
                        />
                        <p className=" text-primary">{tech.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
