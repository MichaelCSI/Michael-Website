import LinkText from './LinkText.jsx'

export default function Home(){

    return <>
        <LinkText
            linkText={"Home"}
            fontSize={ 0.5 }
            textPrimary='#2cb43e'
            textSecondary='#359943'
            position={ [0.55, 2.65, 0] }
            rotation={ [0, 0, 0] }
        />
    </>
}