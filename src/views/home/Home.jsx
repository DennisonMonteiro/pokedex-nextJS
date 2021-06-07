import React, { useState } from 'react'
import './Home.css'

import SearchBar from '../../components/SearchBar/SearchBar'
import Card from '../../components/Card/Card'

const Home = props => {

    const [ fetchUrl, setFetchUrl ] = useState("")

    function bindText( text ) {
        setFetchUrl( `/pokemon/${ text }` )
    }

    return(
        <div className="Home" >
            <SearchBar bindText={ bindText } />
            { fetchUrl !== "" ? <Card pokemonEndPoint = { fetchUrl } loading = { true } /> : <span></span> }
            
        </div>
    )
}

export default Home