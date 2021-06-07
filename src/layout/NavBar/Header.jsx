import React from 'react'
import './Header.css'

import { Link } from 'react-router-dom'

const MainHeader = props => (
    <nav className="main-header" >
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/">Pokemons</Link>
            </li>
            <li>
                <Link to="/">Items</Link>
            </li>
            <li>
                <Link to="/">About</Link>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/DennisonMonteiro">Git</a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/dennison-monteiro-16a21318b/">Lindekin</a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://twitter.com/ohbitlol">Twitter</a>
            </li>
        </ul>
    </nav>
)

export default MainHeader