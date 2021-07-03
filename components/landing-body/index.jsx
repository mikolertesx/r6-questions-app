import styles from './styles.module.scss'
import launch from './Browsing.svg'

const Body = () =>{
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
                <a href="/my-forms"><button><strong>START NOW</strong></button></a>
            </div>
        </div>
    )
}

export default Body