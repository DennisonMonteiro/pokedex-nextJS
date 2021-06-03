import React, { useState } from 'react';
import './Input.css'
import InputGroup from 'react-bootstrap/InputGroup'
import { Button, FormControl } from 'react-bootstrap';

const Input = props => {

    const [text, setText] = useState("")

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleButton = () => {
        props.sendText( text )
    }

    return(
        <InputGroup className="mb-3">
            <FormControl
                placeholder="Search a pokemon..."
                aria-label="Search a pokemon..."
                aria-describedby="basic-addon2"
                value={ text }
                onChange= { handleChange }
            />
            <InputGroup.Append>
                <Button variant="outline-secondary" onClick={ handleButton } >Search</Button>
            </InputGroup.Append>
        </InputGroup>
    )
}

export default Input