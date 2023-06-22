import Portfolio from './Portfolio.jsx'
import Contact from './Contact.jsx'
import TopModels from './TopModels.jsx'
import About from './About.jsx'
import { Suspense } from 'react'
import { Loader } from '@react-three/drei'
import { motion } from 'framer-motion'

// Pong gif source: https://henrikostergaard.com/home

export default function Home() {
    return (
        <div className="h-[100vh] overflow-y-scroll bg-gradient-to-br from-bg1 via-bg2 to-bg3">
            <div className="relative flex flex-col md:flex-row">
                <div className="w-[90vw] mx-[5vw] md:mx-0 bg-gradient-to-br from-creations1 to-creations2 bg-clip-text text-8xl text-primary text-transparent md:ml-40 md:w-[50vw]">
                    <p className="mb-1 ml-1 mt-20 text-4xl">Hey,</p>
                    <h1 className="text-6xl md:text-8xl">I'm Michael</h1>
                    <p className="ml-1 mt-8 text-3xl">
                        Welcome to my portfolio
                    </p>
                </div>
                <TopModels
                    rotation={[0, -Math.PI / 8, 0]}
                    position={[-1, 2.3, 6]}
                    scale={[2.4, 2.4, 2.4]}
                />
            </div>
            <Suspense fallback={null}>
                <About />
                <Portfolio />
                <Contact
                    rotation={[Math.PI * 0.42, 0, 0]}
                    position={[0, -1.5, 0]}
                    scale={[0.3, 0.3, 0.3]}
                />
            </Suspense>

            <Loader
                innerStyles={{
                    width: '200px',
                    height: '4px'
                }}
                dataInterpolation={(p) => `Loading: ${p.toFixed(0)}%`}
            />
        </div>
    )
}
