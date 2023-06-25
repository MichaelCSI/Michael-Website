import './style.css'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import { Suspense } from 'react'
import { Loader } from '@react-three/drei'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
        <Suspense fallback={null}>
            <Home />
        </Suspense>
        <Loader
            innerStyles={{
                width: '200px',
                height: '4px'
            }}
            dataInterpolation={(p) => `Loading: ${p.toFixed(0)}%`}
        />
    </>
)
