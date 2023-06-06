import Portfolio from './Portfolio.jsx'
import Home from './Home.jsx'
import Games from './Games.jsx'
import Nav from './Nav.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Canvas } from '@react-three/fiber'

export default function App(){

    return <>
        <BrowserRouter>
            <Routes>
                <Route 
                    exact path='/' 
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
                            <Home/>
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