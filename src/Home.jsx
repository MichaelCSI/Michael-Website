import ReactAtom from './ReactAtom.jsx'
import { Text } from '@react-three/drei'


function MadeWithReact()
{

    return <>
        <group position={ [0, -5, 0] }>
            <Text
                font="./fonts/bangers-v20-latin-regular.woff"
                fontSize={ 0.35 }
                maxWidth={ 2 }
                color={ '#61dbfb' }
                position={ [0, -0.8, 0] }
            >
                Made with R3F
            </Text>
            {[...Array(3).keys()].map((_, index) => (
                <ReactAtom
                    atomScale={ [0.3, 0.3, 0.3] }
                    key={ index }
                    index={ index }
                    numTrails={ 3 }
                    trailColor='#61dbfb'
                    amplitude={ 0.3 }
                    frequency={ 10 }
                />
            ))}
        </group>
    </>
}


export default function Home()
{
    return <>
        <color args={ [ '#000000' ] } attach="background" />
        <MadeWithReact/>
    </>
}