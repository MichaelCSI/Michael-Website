import { useGLTF, Html, OrbitControls, Environment } from '@react-three/drei'


export default function Setup() {
    const scaleRatio = 0.0025

    return (
        <>
            <primitive
                object={useGLTF('./models/boxTV.glb').scene}
                scale={[scaleRatio, scaleRatio, scaleRatio]}
                position={[
                    scaleRatio * 375,
                    scaleRatio * 95,
                    -scaleRatio * 62.5
                ]}
            ></primitive>
            <Html transform distanceFactor={0.3} position={[0.85, 0.14, 0]}>
                <div style={{ width: '1220px', height: '970px' }}>
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
            <primitive
                object={useGLTF('./models/ps2Controller.glb').scene}
                scale={[scaleRatio * 100, scaleRatio * 100, scaleRatio * 100]}
                position={[0, -scaleRatio * 80, scaleRatio * 107.5]}
                rotation={[-Math.PI / 3, 0, 0]}
            />
            <primitive
                object={useGLTF('./models/ps2Console.glb').scene}
                scale={[scaleRatio * 50, scaleRatio * 50, scaleRatio * 50]}
                position={[
                    scaleRatio * 12.5,
                    -scaleRatio * 130,
                    -scaleRatio * 12.5
                ]}
            />
        </>
    )
}
