import { connect } from 'react-redux'
import { unsubscribeUser } from 'store/userReducer'
import Link from 'next/Link'
import styles from './styles.module.scss'

const Navbar = (props) => {
  const { user, unsubscribeUser } = props
  function loginHandler() {
    props.handleLogin('Login')
  }
  function signupHandler() {
    props.handleLogin('Signup')
  }
  return (
    <nav className={styles.Navbar}>
      <div>
        <Link href="/">
          <h1>ENROUTE FORMS</h1>
        </Link>
      </div>
      {!user.userId ? (
        <div>
          <button onClick={loginHandler}>Login</button>
          <button className={styles.Signup} onClick={signupHandler}>
            Sign Up
          </button>
        </div>
      ) : (
        <div>
          <h1>{` Hola ${user.username}`} </h1>
          <button
            className={styles.Signup}
            onClick={() => {
              unsubscribeUser()
            }}
          >
            Log out
          </button>
        </div>
      )}
    </nav>
  )
}

const mapStateToProps = ({ user }) => ({
  user,
})

const mapDispatchToProps = (dispatch) => ({
  unsubscribeUser: () => dispatch(unsubscribeUser()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
