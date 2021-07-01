import styles from './styles.module.scss'
import launch from './Browsing.svg'

const Body = () =>{
    console.log(launch)
    return (
        <div>
            <div>
                <img src={launch.src}></img>
            </div>
            <div>
                <label htmlFor="">Para ver si funciona</label>
            </div>
        </div>
    )
}

export default Body