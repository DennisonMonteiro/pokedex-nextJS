import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faBars } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import Dropdown from 'react-bootstrap/Dropdown'
import styles from '../../styles/Header.module.css'


function Header() {

    return(
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">
                    <a>Logo</a>
                </Link>
            </div>
            <nav className={styles.main_nav}>
                <ul className={styles.nav_list}>
                    <li>
                        <a target="_blank" href="https://github.com/DennisonMonteiro">
                            Git
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/dennison-monteiro-16a21318b/">
                            Linkedin
                        </a>
                        <a target="_blank" href="https://twitter.com/ohbitlol">
                            Twitter
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header