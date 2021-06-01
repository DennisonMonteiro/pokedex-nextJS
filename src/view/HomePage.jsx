import CardComponent from '../components/Pokemon'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Pokemon from '../components/Pokemon';
import Spinner from 'react-bootstrap/Spinner'
import './HomePage.css'

function HomePage() {

  const [pokemon, setPokemon] = useState([])
  const [loading, setLoading] = useState(true)
  
  const getPokemonList = async () => {
    let pokemonArray = []
    for (let i = 1; i<= 151; i++) {
      pokemonArray.push(await getPokemonData(i) )
    }
    console.log(pokemonArray)
    setPokemon(pokemonArray)
    setLoading(false)
  }

  const getPokemonData = async (id) => {
    const res = await axios.get( `https://pokeapi.co/api/v2/pokemon/${id}`)
    return res

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
            <Row>
                { pokemon.map(p => (
                    <Col key={p.data.id} xs={12} sm={12} md={12} lg={6} xl={4}>
                        <Pokemon pokemon={p.data} ></Pokemon>
                    </Col>
                )) }
            </Row>
        )}
    </>
  );
}

export default HomePage;
