import { 
    Text, 
    useGLTF,
    Center,
    Lightformer
} from '@react-three/drei'

export default function Setup(props)
{
    return <>
        <Center top position={ props.position }>
            <Setup1 position={ [0, 0, 0] }/>
            <Setup2 position={ [5, 0, 0] }/>
        </Center>
    </>
}


// Credits:

// * title:	TV
// * source:	https://sketchfab.com/3d-models/tv-ee802eec0b5742f2b036ea986b89ad88
// * author:	shedmon (https://sketchfab.com/shedmon)

// * title:	PS2 Controller
// * source:	https://sketchfab.com/3d-models/ps2-controller-3b641465a47049c4b4cc02b004757e4a
// * author:	Jeffrey fan 2000 (https://sketchfab.com/8723516)

// * title:	ps2 Console
// * source:	https://sketchfab.com/3d-models/ps2-console-b20d0f22228b49e1b06ac252d0a799f3
// * author:	Jeffrey fan 2000 (https://sketchfab.com/8723516)

// * title:	Cabinet With Glass Pattern Windows
// * source:	https://sketchfab.com/3d-models/cabinet-with-glass-pattern-windows-4a75dc9816cf4c66a87221ad01d9710f
// * author:	Frank Heuver (https://sketchfab.com/heuverf)
function Setup1(props)
{
    const scaleRatio = 0.004
    return <>
        <group position={ props.position }>
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
            <Model 
                name='cabinet'
                scale={ [scaleRatio * 800, scaleRatio * 800, scaleRatio * 800] }
                position={ [scaleRatio * 250, -scaleRatio * 750, 0] }
                rotation={ [0, -Math.PI / 2, 0] }
            />
        </group>
    </>
}


// Credits 

// * title:	Flatscreen TV 46 inch
// * source:	https://sketchfab.com/3d-models/flatscreen-tv-46-inch-94c7ccaea76f4093b484828419db25cb
// * author:	thethieme (https://sketchfab.com/thethieme)

// * title:	Tv table
// * source:	https://sketchfab.com/3d-models/tv-table-6fe012db3cef464e9582aed677447aa9
// * author:	draakon_4d (https://sketchfab.com/draakon_4d)

// * title:	Wii
// * source:	https://sketchfab.com/3d-models/wii-7a96a38cf0684aecb42a58d1e3b65cb9
// * author:	elouisetrewartha (https://sketchfab.com/etrewartha)

function Setup2(props)
{
    const scaleRatio = 0.03
    return <>
        <group position={ props.position }>
            <Model 
                name='flatscreen'
                scale={ [scaleRatio, scaleRatio, scaleRatio] }
            />
            <Model 
                name='flatscreenTable'
                scale={ [scaleRatio * 100, scaleRatio * 100, scaleRatio * 100] }
                position={ [0, -scaleRatio * 85, 0] }
            />
            <Model 
                name='wii'
                scale={ [scaleRatio * 1.5, scaleRatio * 1.5, scaleRatio * 1.5] }
                position={ [-1.8, -1.1, 0] }
            />
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
