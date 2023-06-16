import './style.css'
import ReactDOM from 'react-dom/client'
import Portfolio from './Portfolio.jsx'
import Games from './Games.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Canvas } from '@react-three/fiber'
import { Loader } from '@react-three/drei'
import { Suspense } from 'react'
import Home from './Home.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
        <Suspense fallback={null}>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/portfolio" element={<Portfolio />} />
                    <Route exact path="/games" element={<Games />} />
                </Routes>
            </BrowserRouter>
        </Suspense>
        <Loader
            containerStyles={{ backgroundColor: 'white' }}
            innerStyles={{ width: '200px', height: '4px', background: 'black' }}
            barStyles={{ background: 'black' }}
            dataStyles={{ color: 'black' }}
            dataInterpolation={(p) => `Loading: ${p.toFixed(0)}%`}
        />
    </>
)
