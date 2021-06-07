import React, { useEffect, useState } from 'react'
import API from '../../services/api'
import './Card.css'

const Card = ( { pokemonEndPoint, loading } ) => {

    const [ data, setData ] = useState( null )
    
    useEffect(() => {
        async function fetchData() {
            await API.get( pokemonEndPoint ).then(
                ( res ) => {
                    setData( res.data )
                }
            ).catch(
                (err) => {
                    console.error("Ops! Something went wrong")
                    setData( {  name: "", 
                    sprites: { front_default: "https://howfix.net/wp-content/uploads/2018/02/sIaRmaFSMfrw8QJIBAa8mA-article.png" }
                }) // temporary - pokemon not found page in the future
                }
            )
        }
        fetchData()
    }, [pokemonEndPoint] )

    return(
        <div className="Card" >
            <div className="Pokemon-picture">
                <img className="Picture" src={ data !== null ? data.sprites.front_default : "" } alt="Pokemon-Default" />
            </div>
            <div className="Pokemon-info" >
                <div className="Info-items" >

                </div>
                <div className="Info-stats">
                    <div className="Header" >
                        Pokemon Status
                    </div>
                </div>
            </div>
            <div className="Pokemon-map" >
                map
            </div>
        </div>
    )
}

export default Card