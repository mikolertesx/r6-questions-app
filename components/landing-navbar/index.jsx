import styles from './styles.module.scss'
import Link from 'next/Link'


const Navbar = (props) => {
  function loginHandler(){
    props.handleLogin("Login")
 }
 function signupHandler(){
    props.handleLogin("Signup")
 }
  return (
    <navbar className={styles.Navbar}>
          <div>
            <Link href="/"><h1>ENROUTE FORMS</h1></Link>
          </div>
          <div>
            <button onClick={loginHandler}>Login</button>
            <button className={styles.Signup} onClick={signupHandler}>Sign Up</button>
          </div>
    </navbar>
  )
}

export default Navbar