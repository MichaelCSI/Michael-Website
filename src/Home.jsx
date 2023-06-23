import Portfolio from './Portfolio.jsx'
import Contact from './Contact.jsx'
import TopModels from './TopModels.jsx'
import About from './About.jsx'
import { useState, Suspense } from 'react'
import { Loader } from '@react-three/drei'
import { motion } from 'framer-motion'

// Pong gif source: https://henrikostergaard.com/home

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

export default function Home() {
    const [currentStyle, setCurrentStyle] = useState('black')

    const style = {
        blue: {
            type: 'light',
            backgroundGradient: 'bg-gradient-to-br from-bg1 via-bg2 to-bg3',
            textGradient:
                'bg-gradient-to-br from-creations1 from-60% to-creations2',
            hoverGradient:
                'hover:bg-gradient-to-br from-creations1 from-60% to-creations2'
        },
        black: {
            type: 'dark',
            backgroundGradient: 'bg-gradient-to-br from-bg4 via-bg5 to-bg6',
            textGradient: 'bg-gradient-to-br from-galaxy1 from-20% to-galaxy2',
            hoverGradient:
                'hover:bg-gradient-to-br from-galaxy1 from-20% to-galaxy2'
        },
        green: {
            type: 'dark',
            backgroundGradient: 'bg-gradient-to-br from-bg7 via-bg8 to-bg9',
            textGradient: 'bg-gradient-to-br from-shader1 from-20% to-shader2',
            hoverGradient:
                'hover:bg-gradient-to-br from-shader1 from-20% to-shader2'
        }
    }

    function Arrow() {
        return (
            <img
                src="./images/arrow.png"
                className={'ml-1.5 mt-7 h-2.5 w-2.5 rounded-full'}
            />
        )
    }

    return (
        <div
            className={`h-[100vh] overflow-y-scroll ${style[currentStyle].backgroundGradient}`}
        >
            <div className="relative mt-1 flex flex-row justify-center gap-x-2">
                <div
                    className={`${style[currentStyle].textGradient} bg-clip-text text-8xl text-primary text-transparent`}
                >
                    <h1 className="mr-1 mt-1 text-xl">Color Palette</h1>
                </div>
                {['blue', 'black', 'green'].map((color) => (
                    <button
                        key={'Button ' + color}
                        className={`relative mt-1.5 h-6 w-6 rounded-full border ${style[color].textGradient} transition duration-100 hover:scale-125`}
                        onClick={() => {
                            setCurrentStyle(color)
                        }}
                    >
                        {currentStyle === color ? <Arrow /> : null}
                    </button>
                ))}
            </div>
            <div className="relative flex flex-col md:flex-row">
                <div
                    className={`mx-[5vw] w-[90vw] ${style[currentStyle].textGradient} bg-clip-text text-8xl text-primary text-transparent md:mx-0 md:ml-40 md:w-[50vw]`}
                >
                    <p className="mb-1 ml-1 mt-20 text-4xl">Hey,</p>
                    <h1 className="text-6xl md:text-8xl">I'm Michael</h1>
                    <p className="mb-10 ml-1 mt-8 text-3xl md:mb-0">
                        Welcome to my portfolio
                    </p>
                </div>
                {!isMobileDevice() ? (
                    <TopModels
                        rotation={[0, -Math.PI / 8, 0]}
                        position={[-1, 2.3, 6]}
                        scale={[2.4, 2.4, 2.4]}
                    />
                ) : null}
            </div>
            <Suspense fallback={null}>
                <About style={style[currentStyle]} />
                <Portfolio style={style[currentStyle]} />
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
