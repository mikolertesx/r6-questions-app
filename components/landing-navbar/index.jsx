import styles from './styles.module.scss'


const Navbar = () => {
  return (
    <navbar className={styles.Navbar}>
          <div>
            <a href="/"><h1>ENROUTE FORMS</h1></a>
          </div>
          <div>
            <button>Login</button>
            <button>Sign Up</button>
          </div>
    </navbar>
  )
}

export default Navbar