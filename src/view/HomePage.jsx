import axios from 'axios'
import { useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Pokemon from '../components/Pokemon';
import Spinner from 'react-bootstrap/Spinner'
import './HomePage.css'
import Input from '../components/Input';

const HomePage = () => {

  const [pokemon, setPokemon] = useState([])
  const [loading, setLoading] = useState(true)
  const [pokemonSearch, setpokemonSearch] = useState("")
  
  const getPokemonList = async () => {
    let pokemonArray = []
    for (let i = 1; i<= 151; i++) {
      pokemonArray.push(await getPokemonData(i) )
    }
    setPokemon(pokemonArray)
    setLoading(false)
  }

  const getPokemonData = async (id) => {
    const res = await axios.get( `https://pokeapi.co/api/v2/pokemon/${id}`)
    return res
  }

  const handleTextSended = ( pokemon ) => {
    setpokemonSearch( pokemon.toLowerCase() )
  }  

  useEffect(() => {
    getPokemonList()
  }, [])

  return (
    <>
        { loading? (
            <div className="Loading">
                <Spinner animation="border" />
            </div>
        ) : (
          <>
            <Row className="input-row">
              <Input sendText={ handleTextSended } ></Input>              
            </Row>
            <Row className="card-row">
                { pokemonSearch !== "" ? (
                    pokemon.filter( p => p.data.name === pokemonSearch ).map( filteredPokemon => (
                      <Col key={filteredPokemon.data.id} xs={12} sm={12} md={12} lg={6} xl={4}>
                          <Pokemon pokemon={filteredPokemon.data} ></Pokemon>
                      </Col>
                    ))
                  )
                  :
                  ( 
                    pokemon.map(p => (
                      <Col key={p.data.id} xs={12} sm={12} md={12} lg={6} xl={4}>
                          <Pokemon pokemon={p.data} ></Pokemon>
                      </Col>
                    ))
                  )
                }
            </Row>
          </>
        )}
    </>
  );
}

export default HomePage;
