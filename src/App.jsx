import Portfolio from './Portfolio.jsx'
import Home from './Home.jsx'
import Games from './Games.jsx'
import Nav from './Nav.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'


export default function App(){

    return <>
        <BrowserRouter>
            <Routes>
                <Route 
                    exact path='/' 
                    element={
                        <Canvas
                            flat
                            camera={ {
                                fov: 45,
                                near: 0.1,
                                far: 2000,
                                position: [ 0, 4, 12 ]
                            } }
                        >
                            <Perf/>
                            <Nav/>
                            <Home
                                numStars={ 2 }
                            />
                        </Canvas>
                    }
                />
                <Route 
                    exact path='/Portfolio' 
                    element={
                        <Canvas
                            camera={ {
                                fov: 45,
                                near: 0.1,
                                far: 2000,
                                position: [ 0, 4, 12 ]
                            } }
                        >
                            <Perf/>
                            <Nav/>
                            <Portfolio/>
                        </Canvas>
                    }
                />
                <Route 
                    exact path='/Games' 
                    element={
                        <Canvas
                            camera={ {
                                fov: 45,
                                near: 0.1,
                                far: 2000,
                                position: [ 0, 4, 12 ]
                            } }
                        >
                            <Nav/>
                            <Games/>
                        </Canvas>
                    }
                />
            </Routes>
    </BrowserRouter>
    </>
}