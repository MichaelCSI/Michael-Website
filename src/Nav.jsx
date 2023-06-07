import LinkText from './LinkText.jsx'
import { Float } from '@react-three/drei'

export default function Nav(){

    const nav = ['home', 'portfolio', 'games']

    return <>
        <Float rotationIntensity={ 0.2 }>
            <color args={ [ '#241a1a' ] } attach="background" />
            {nav.map((text, index) => (
                <LinkText
                    key={ text }
                    linkText={text}
                    media={ text.localeCompare("home") === 0 ? "/" : "/"+text }
                    fontSize={ 0.4 }
                    textPrimary='ivory'
                    textSecondary='#359943'
                    position={ [-8.2 + index * 1.5, 5.5, 0] }
                    rotation={ [0, 0, 0] }
                />
            ))}
        </Float>
    </>
}