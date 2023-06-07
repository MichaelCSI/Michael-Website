import LinkText from './LinkText.jsx'
import { Float } from '@react-three/drei'
import { Perf } from 'r3f-perf'


export default function Nav(){

    const nav = ['home', 'portfolio', 'games']

    return <>
        <Perf/>
        <Float rotationIntensity={ 0.1 } speed={ 2 } floatIntensity={ 0.1 } >
            {nav.map((text, index) => (
                <LinkText
                    key={ text }
                    linkText={text}
                    media={ text.localeCompare("home") === 0 ? "/" : "/"+text }
                    fontSize={ 0.4 }
                    textPrimary='ivory'
                    textSecondary='#61dbfb'
                    position={ [-8.2 + index * 1.5, 5.5, 0] }
                    rotation={ [0, 0, 0] }
                />
            ))}
        </Float>
    </>
}