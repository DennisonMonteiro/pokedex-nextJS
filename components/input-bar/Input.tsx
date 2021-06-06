import React, { useState } from 'react'
import styles from '../../styles/Input.module.css'

interface props {
    sendText: Function;
}

function Input( props: props ){

    const [text, setText] = useState("")

    const handleChange = (e: any) => {
        setText(e.target.value)
    }

    const handleKeyDown = (e: any) => {
        if( e.key === 'Enter' ) {
            props.sendText( text )
        }
    }

    const handleButton = () => {
        props.sendText( text )
    }

    return(
        <div className={styles.input_container}>
            <div className={styles.input_field}>
                <input 
                    type="text"
                    className={styles.input_bar}
                    placeholder="Search a pokemon..."
                    value={ text }
                    onChange={ handleChange }
                    onKeyDown={ handleKeyDown }
                    spellCheck="false"
                />
            </div>
            <div className={styles.search_field}>
                <button
                    className={styles.search_button}
                    onClick={ handleButton }
                >
                    Poké Search!
                </button>
            </div>
        </div>
    )
}

export default Input