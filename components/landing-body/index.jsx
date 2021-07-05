import styles from './styles.module.scss'
import launch from './Browsing.svg'
import { useState } from 'react'

const Body = (props) =>{

    //
    const authAlert = "is-invalid"

    //Hooks
    const [credential, setCredential] = useState({
        username: "",
    });
    const [statusAuth, setStatusAuth] = useState("");
    const [passwordValid, setpasswordValid] = useState(true)

    //Hooks actions

    const passwordValidHandler = event => {
        event.target.value === credential.password ? setpasswordValid(false) : setpasswordValid(true)
    }

    const credentialHandler = event =>{
        setStatusAuth("")
        setCredential({...credential, [event.target.name]: event.target.value})
        console.log(credential)
    }

    const authHandler = event => {
        if (Object.keys(credential).length === 2) {
          fetch(`http://localhost:3000/api/auth/${event.target.name}`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credential),
          }).then(res => res.json())
            .catch(error => console.log(error))
            .then(response => {
              if (response.success) {
                setStatusAuth("")
                localStorage.setItem(JwtName(), response.data.token)
                return
              }
              else{setStatusAuth(authAlert)}
            })
        }
        else{setStatusAuth(authAlert)}
      }

    //Handlers

     function loginHandler(){
        props.handleLogin("Login")
     }
     function signupHandler(){
        props.handleLogin("Signup")
     }



    if(props.login === "Home"){   
    return (
        <div className={styles.theBody}>
            <div>
                <img src={launch.src}></img>
            </div>
            <div className={styles.rightSide}>
                <h1>Forms for everyone!</h1>
                <p> Creating web forms with Enroute Form's unique form editor is just like writing a doc. Anyone can create 
                    beautiful online forms, quickly and intuitively, without any technical knowledge.
                </p>
                <button onClick={loginHandler}><strong>START NOW</strong></button>
            </div>
        </div>
    )
    }

    if(props.login === "Login"){   
        return (
            <div className={styles.theBody}>
                <div>
                    <img src={launch.src}></img>
                </div>
                <div className={styles.rightSide}>
                    <h1>Login</h1>
                    <input type="email" placeholder="Username" name="username" onChange={credentialHandler} value={credential.username}></input>
                    <input type="password" placeholder="Password" name="password" onChange={credentialHandler}></input>
                    <button onClick={authHandler} className={styles.submit} name="login">Log In</button>
                    <label>Don't have an account yet? <button onClick={signupHandler}>Sign Up</button></label>
                </div>
            </div>
        )
    }

    if(props.login === "Signup"){   
        return (
            <div className={styles.theBody}>
                <div>
                    <img src={launch.src}></img>
                </div>
                <div className={styles.rightSide}>
                    <h1>Signup</h1>
                    <label>Username</label>
                    <input type="email" placeholder="aol@email.com" onChange={credentialHandler} name="username"></input>
                    <label>Password</label>
                    <input type="password" placeholder="**********" onChange={credentialHandler} name="password"></input>
                    <label>Confirm your password</label>
                    <input type="password" onChange={passwordValidHandler} placeholder="**********"></input>
                    <button className={[styles.submit]} disabled={passwordValid} onClick={authHandler} name="register">Sign up</button>
                    <label>Already have an account? <button onClick={loginHandler}>Log In</button></label>
                </div>
            </div>
        )
    }


}

export default Body