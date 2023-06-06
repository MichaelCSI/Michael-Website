import LinkText from './LinkText.jsx'
import { Float } from '@react-three/drei'
import { Link } from "react-router-dom";


export default function Nav(){

    const nav = ['home', 'portfolio', 'games']

    return <>
        <Float rotationIntensity={ 0.2 }>
            {nav.map((text, index) => (
                <LinkText
                    key={ text }
                    linkText={text}
                    media={ text.localeCompare("home") === 0 ? "/" : "/"+text }
                    fontSize={ 0.15 }
                    textPrimary='#2cb43e'
                    textSecondary='#359943'
                    position={ [-2.8 + index * 0.55, 2.65, 0] }
                    rotation={ [0, 0, 0] }
                />
            ))}
        </Float>
    </>
}