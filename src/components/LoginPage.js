

const LoginPage = ({setLoggedIn, setToken, setLoggedUser}) => {

    const loginAction = async (e, formId, destURL) => {

        console.log(formId)
        console.log(destURL)
    
        e.preventDefault();
    
        let myForm = document.getElementById(formId)
    
        console.log(myForm.username.value)
        console.log(myForm.password.value)
    
        // let formData = new FormData()
        //formData.append('username', myForm.username.value)
        //formData.append('password', myForm.password.value)
    
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: myForm.username.value, password: myForm.password.value })
        };
        await fetch('/login', requestOptions)
          .then(response => response.json())
          .then(data => {
            console.log(data)
            console.log(data.loggedUser.username)
            setLoggedIn(true)
            setToken(data.token)
            setLoggedUser(data.loggedUser)
          });
    
        //let response = await fetch(destURL, {
        //  method: 'POST',
        //  //  body: JSON.stringify(new FormData(myForm))
        //  body: JSON.stringify(formData)
        //});
    
        //await console.log(response)
    
        // setLoggedUser(true)
    
        myForm.reset()
    
        // let result = await response.json();
        // console.log('hello2')
        // alert(result.message);
      }

    
    return (
        <div>
            <header>
                <span>Twitee</span>
            </header>

            <div>
                <p>Login</p>
                <form id="loginActionForm" onSubmit={ (e) => loginAction( e, "loginActionForm", "/" )}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" /> <br />

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" /> <br />

                    <input type="submit" value="Login" />

                </form>
            </div>

        </div>
    )
}

export default LoginPage
