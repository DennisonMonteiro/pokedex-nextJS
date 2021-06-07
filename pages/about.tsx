import styles from '../styles/About.module.css'
import Header from '../components/header/Header'

function About() {

  return (
    <div className={styles.container}>
        <Header/>
        <div className={styles.main}>
            <div>
                <p>Under construction</p>
            </div>
            <p>
                This project uses PokeAPI to assemble the page and display the data. If it is of interest to you, search for more at <a className={styles.hyperlink} target="_blank" href="https://pokeapi.co/">
                    <u>this</u>
                </a> link
            </p>
        </div>
    </div>
  )
}

export default About