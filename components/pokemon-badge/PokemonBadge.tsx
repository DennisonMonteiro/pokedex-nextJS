import React from 'react'
import styles from '../../styles/PokemonBadge.module.css'
import { Pokemon } from '../../types/Pokemon'
import Badge from 'react-bootstrap/Badge'
import { pokeBadges } from '../../utils/commonVariables'

interface PokemonList {
    pokemon: Pokemon
}

function PokemonBadge({pokemon} : any) { //ts error in build. future correction

    return(
        <div className={styles.badge_row}>
            {   pokemon.types.length === 1 ?
                <Badge
                    //@ts-ignore
                    style={{ background: pokeBadges[ pokemon.types[0].type.name ] }}
                    className={styles.badge}
                >
                    { pokemon.types[0].type.name.toUpperCase() }
                </Badge>
                :
                <>
                    <Badge
                        //@ts-ignore
                        style={{ background: pokeBadges[ pokemon.types[0].type.name ] }}
                        className={styles.badge}
                    >
                        { pokemon.types[0].type.name.toUpperCase() }
                    </Badge>
                    <Badge
                        //@ts-ignore
                        style={{ background: pokeBadges[ pokemon.types[1].type.name ] }}
                        className={styles.badge}
                    >
                        { pokemon.types[1].type.name.toUpperCase() }
                    </Badge>
                </>
            }
        </div>
    )
}

export default PokemonBadge