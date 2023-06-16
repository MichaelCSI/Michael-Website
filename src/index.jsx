import './style.css'
import ReactDOM from 'react-dom/client'
import { Loader } from '@react-three/drei'
import { Suspense } from 'react'
import Home from './Home.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
        <Suspense fallback={null}>
            <Home/>
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
