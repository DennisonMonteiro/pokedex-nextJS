import React from 'react';
import Badge from 'react-bootstrap/Badge'
import './PokemonBadge.css'

const PokemonBadge = props => {

    const pokeBadges = {
        "bug": "#729F3F",
        "dragon": "#7038F8",
        "fairy": "#FDB9E9",
        "fire": "#FD7D24",
        "ghost": "#7B62A3",
        "ground": "#E0C068",
        "normal": "#A4ACAF",
        "psychic": "#F366B9",
        "steel": "#9EB7B8",
        "dark": "#707070",
        "electric": "#EED535",
        "fighting": "#D56723",
        "flying": "#A890F0",
        "grass": "#9BCC50",
        "ice": "#51C4E7",
        "poison": "#B97FC9",
        "rock": "#A38C21",
        "water": "#4592C4",
    }

    return(
        <div>
            { props.types.length === 1 ?
                <Badge pill style={{ background: pokeBadges[ props.types[0].type.name ] }}>
                    { props.types[0].type.name.toUpperCase() }
                </Badge>
                :
                <>
                    <Badge pill style={{ background: pokeBadges[props.types[0].type.name ] }}>
                        { props.types[0].type.name.toUpperCase() }
                    </Badge>
                    <Badge pill style={{ background: pokeBadges[ props.types[1].type.name ] }}>
                        { props.types[1].type.name.toUpperCase() }
                    </Badge>
                </>
            }
        </div>
        
    )
}

export default PokemonBadge