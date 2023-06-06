import Nav from './Nav.jsx'
import LinkText from './LinkText.jsx'

export default function Games(){

    return <>
        <Nav/>
        <LinkText
            linkText={"Games"}
            fontSize={ 0.15 }
            textPrimary='#2cb43e'
            textSecondary='#359943'
            position={ [0.55, 2.65, 0] }
            rotation={ [0, 0, 0] }
        />
    </>
}