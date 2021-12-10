import LoginPage from './LoginPage'
import { NavLink } from 'react-router-dom'

const Welcome = ({loggedIn, setLoggedIn, setToken, loggedUser, setLoggedUser}) => {


    return (
        <div>
            {loggedIn ? 'User Authenticated' : <LoginPage setLoggedIn={setLoggedIn} setToken={setToken} setLoggedUser={setLoggedUser} />}
            {loggedUser && <p>{loggedUser.username}</p>} <br />
            <NavLink to='/'>Back</NavLink>
        </div>
    )
}

export default Welcome
