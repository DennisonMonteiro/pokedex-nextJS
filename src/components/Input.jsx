import React, { useState } from 'react';
import './Input.css'
import InputGroup from 'react-bootstrap/InputGroup'
import { Button, FormControl } from 'react-bootstrap';

const Input = props => {

    const [text, setText] = useState("")

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleKeyDown = (e) => {
        if( e.key === 'Enter' ) {
            props.sendText( text )
        }
    }

    const handleButton = () => {
        props.sendText( text )
    }

    return(
        <div className="input-container"  >
            <input type="text"
                placeholder="Search a pokemon..."
                aria-label="Search a pokemon..."
                aria-describedby="basic-addon2"
                value={ text }
                onChange={ handleChange }
                onKeyDown={ handleKeyDown }
                className="input-bar" />
            <button className="input-filter-button" >Filter</button>
            <button className="input-button" onClick={ handleButton } >Search</button>
        </div>
    )
}

export default Input