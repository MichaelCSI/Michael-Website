import { Text } from '@react-three/drei'
import { useState } from 'react'


export default function LinkText(props)
{
    const [buttonHover, setButtonHover] = useState(false)

    return <>
        <group rotation={ props.rotation } position={ props.position }>
            <Text
                font="./bangers-v20-latin-regular.woff"
                fontSize={ props.fontSize }
                maxWidth={ 2 }
                color={ props.textPrimary }
            >
                {props.text}
            </Text>
            <Text
                font="./bangers-v20-latin-regular.woff"
                fontSize={ props.fontSize }
                position-y={ -1 }
                color={ buttonHover ? props.textSecondary : props.textPrimary}
                outlineWidth={ props.fontSize ? props.fontSize / 8 : 0.05 }
                outlineColor='#000000'
                onClick={() => {
                    props.newTab ? window.open(props.media, '_blank') : window.open(props.media, "_self")
                }}
                onPointerEnter={ () => { 
                    document.body.style.cursor = 'pointer' 
                    setButtonHover(!buttonHover)
                }}
                onPointerLeave={ () => { 
                    document.body.style.cursor = 'default' 
                    setButtonHover(!buttonHover)
                }}            
            >
                {props.linkText}
            </Text>
        </group>
    </>
}

LinkText.defaultProps = {
    position: [2, 2.2, 0.75],
    rotation: [0, -1.2, 0],
    linkText: 'Link',
    newTab: false
}