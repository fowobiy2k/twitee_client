
import Welcome from './LoginPage'
import LoginPage from './LoginPage'

const Auth = ({setLoggedUser}) => {
    
    

    

    return (
        <div>
            { loggedUser ? <Welcome name={loggedUser.username}/> : <LoginPage action= {loginAction} /> }
        </div>
    )
}

export default Auth
