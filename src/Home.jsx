import ReactAtom from './ReactAtom.jsx'
import { useControls } from 'leva'

export default function Home()
{
    return <>
        <color args={ [ '#000000' ] } attach="background" />
        {[...Array(3).keys()].map((_, index) => (
            <ReactAtom
                position={ [0, -2, 0] }
                atomScale={ [0.5, 0.5, 0.5] }
                key={ index }
                index={ index }
                numTrails={ 3 }
                trailColor='#61dbfb'
                amplitude={ 0.5 }
                frequency={ 10 }
            />
        ))}
    </>
}