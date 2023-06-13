import { 
    useGLTF,
    Center,
    Html
} from '@react-three/drei'
import { applyProps } from '@react-three/fiber'
import * as THREE from 'three'


export default function Setup(props)
{
    return <>
        <Center position={props.position}>
            <Items/>
        </Center>
    </>
}

function Items(props)
{
    const scaleRatio = 0.005

    return <>
        <group position={ props.position } rotation={ props.rotation }>
            <Model 
                name='computer'
                rotation={ [0, -0.88, 0] }
                scale={ [scaleRatio * 125, scaleRatio * 125, scaleRatio * 125] }
                position={ [0, 0, scaleRatio * 750] }
            />
            <Html
                transform
                wrapperClass="aboutMe"
                distanceFactor={ scaleRatio * 175 }
                position={ [scaleRatio * 84, scaleRatio * 750, scaleRatio * 340] }
            >
                <iframe src="https://linamoussadek.github.io/MyOwnWebsite/" />
            </Html>
            <Games rotation={ [0, -Math.PI / 4, 0] } position={ [0.6, 0.17, 0.5] }/>
        </group>
    </>
}

function Games(props)
{
    const scaleRatio = 0.0025

    const computer = useGLTF('./models/computer.glb')
    const computerParts = [
        computer.nodes.monitor_1_Material001_0,
        computer.nodes.monitor_1_Material002_0,
        computer.nodes.monitor_1_Material004_0,
        computer.nodes.monitor_1_Material006_0
    ]
    const computerMaterial = new THREE.MeshStandardMaterial({ color: '#000000', roughness: 0.3, metalness: 0.7 })
    const computerMaterial2 = new THREE.MeshBasicMaterial({ color: '#40b9d9' })
    computerParts.forEach((part) => { applyProps(part, { material: computerMaterial })})
    applyProps(computer.nodes.keyboard_1_Material001_0, { material: computerMaterial2 })


    return <>
        <group rotation={ props.rotation } position={ props.position }>
            <Model 
                name='boxTV'
                scale={ [scaleRatio, scaleRatio, scaleRatio] }
                position={ [scaleRatio * 375, scaleRatio * 95, -scaleRatio * 62.5] }
            />
            <Model 
                name='ps2Controller'
                scale={ [scaleRatio * 100, scaleRatio * 100, scaleRatio * 100] }
                position={ [0, -scaleRatio * 80, scaleRatio * 107.5] }
                rotation={ [-Math.PI / 3, 0, 0] }
            />
            <Model 
                name='ps2Console'
                scale={ [scaleRatio * 50, scaleRatio * 50, scaleRatio * 50] }
                position={ [scaleRatio * 12.5, -scaleRatio * 130, -scaleRatio * 12.5] }
            />
            <Html
                transform
                wrapperClass="games"
                distanceFactor={ scaleRatio * 150 }
                position={ [scaleRatio * 375, scaleRatio * 95, scaleRatio * 115] }
            >
                <img src="./images/pong.gif" />
            </Html>
        </group>
    </>
}


function Model(props)
{
    const model = useGLTF(`./models/${props.name}.glb`)

    return <>
        <primitive
            object={ model.scene } 
            rotation={ props.rotation } 
            position={ props.position }
            scale={ props.scale }
        />
    </>
}
