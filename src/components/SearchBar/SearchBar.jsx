import React, { useState } from 'react'
import './SearchBar.css'

const SearchBar = ( props ) => {

    const [ searchText, setSearchText ] = useState("")

    function passText( unformatedText ) {
        const text = unformatedText.toLowerCase()
        props.bindText( text )
    }

    return(
        <div className="SearchBar" >
            <input className="Input" type="text" value={ searchText } onChange={ e => setSearchText( e.target.value ) } />
            <button className="Button" onClick={ () => passText( searchText ) } >Search</button>
        </div>
    )
}

export default SearchBar