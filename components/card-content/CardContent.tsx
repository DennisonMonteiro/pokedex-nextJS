import React from 'react'
import styles from '../../styles/CardContent.module.css'
import Image from 'next/image'

import { Pokemon } from '../../types/Pokemon'
import { Weakness } from '../../types/Weakness'
import { formatPokemonName, formatHeight } from '../../utils/commonFunctions'
import PokemonBadge from '../pokemon-badge/PokemonBadge'

interface PokemonList {
    pokemon: Pokemon,
}

function CardContent({ pokemon }: any) { //ts error in pokemonList type. Future correction

    return(
        <div className={styles.card}>
            <div className={styles.image_column}>
                <div className={styles.image}>
                    <Image 
                        src={ pokemon.sprites.versions['generation-v']['black-white'].animated.front_default !== null ?
                            pokemon.sprites.versions['generation-v']['black-white'].animated.front_default
                            :
                            pokemon.sprites.front_default
                        }
                        layout={"fixed"}
                        width={96}
                        height={96}
                        alt="Picture of the pokemon"
                    />
                </div>
                <div className={styles.name_and_badge}>
                    <div className={styles.pokemon_name}>
                        { `No. ${pokemon.id} - ${formatPokemonName(pokemon.name)}` }
                    </div>
                    <div className={styles.pokemon_badges}>
                        <PokemonBadge pokemon = { pokemon } />
                    </div>
                </div>
            </div>
            <div className={styles.status_column}>
                <div className={styles._description}>
                    Base status:
                </div>
                <div className={styles.status_field}>
                    <div className={styles.column} >
                        <div className={styles.row}>
                            <div className={styles.title} >
                                Hp:
                            </div>
                            <div className={styles.base_status_value}>
                                { pokemon.stats[0].base_stat }
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.title} >
                                Atk:
                            </div>
                            <div className={styles.base_status_value}>
                                { pokemon.stats[1].base_stat }
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.title} >
                                Def:
                            </div>
                            <div className={styles.base_status_value}>
                                { pokemon.stats[2].base_stat }
                            </div>
                        </div>
                    </div>
                    <div className={styles.column} >
                        <div className={styles.row}>
                            <div className={styles.title} >
                                SpAtk:
                            </div>
                            <div className={styles.base_status_value}>
                                { pokemon.stats[3].base_stat }
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.title} >
                                SpDef:
                            </div>
                            <div className={styles.base_status_value}>
                                { pokemon.stats[4].base_stat }
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.title} >
                                Speed:
                            </div>
                            <div className={styles.base_status_value}>
                                { pokemon.stats[5].base_stat }
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.info_field}>
                    <div className={styles.height_width_row}>
                        <div className={styles.height_field}>
                            <div className={styles.title_info}>
                                Height:
                            </div>
                            <div className={styles.title_info}>
                                { `${ formatHeight(pokemon.height) } m` }
                            </div>
                        </div>
                        <div className={styles.weight_field}>
                            <div className={styles.title_info}>
                                Width:
                            </div>
                            <div className={styles.title_info}>
                                { `${formatHeight(pokemon.weight)} Kg` }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardContent