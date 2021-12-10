import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react'
import './App.css';
import Home from './components/Home'
import Welcome from './components/Welcome'

function App() {

  const [token, setToken] = useState()
  const [loggedUser, setLoggedUser] = useState()
  const [ loggedIn, setLoggedIn ] = useState(false)
  const [ name, setName ] =useState('default')

  return (
    
    <Router>
      <div className='App'>
        { token ? <p>{token}</p> : <p>No Token</p>}
        { loggedUser ? `hello, ${loggedUser.username}` : `hello, ${name}`}
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/welcome" element={<Welcome loggedIn={loggedIn} loggedUser={loggedUser} setLoggedIn={setLoggedIn} setToken={setToken} setLoggedUser={setLoggedUser} />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
