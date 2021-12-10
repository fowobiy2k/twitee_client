import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>Welcome to Twitee</h1>

            <div>
                <NavLink to="welcome"><b>Enter Site</b></NavLink>
            </div>
        </div>
    )
}

export default Home
