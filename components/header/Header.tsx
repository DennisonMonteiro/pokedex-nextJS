import React from 'react'
import styles from '../../styles/Header.module.css'

function Header() {
    return(
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    logo
                </div>
                <nav className={styles.main_nav}>
                    <ul className={styles.nav_list}>
                        <li>
                            <a href="/">Home</a>
                            <a href="#">Sobre</a>
                            <a href="#">Portfólio</a>
                            <a target="_blank" href="https://github.com/DennisonMonteiro">Git</a>
                            <a target="_blank" href="https://www.linkedin.com/in/dennison-monteiro-16a21318b/">Linkedin</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header