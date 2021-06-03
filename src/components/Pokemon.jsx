import React from 'react';
import Card from 'react-bootstrap/Card';
import PokemonBadge from './PokemonBadge'
import './Pokemon.css'
import { Col, Row } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar'

const Pokemon = props => {

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return(
        <Card className="card" >
            <Row>
                <Col className="picture-info">
                    <Row style={{ backgroundColor: "#F2F2F2", width: "125px"  }}>
                        <Card.Img src={ props.pokemon.sprites.front_default }/>
                    </Row>
                    <Row className="pokemon-name-and-type" >
                        <Card.Title className="pokemon-name" >No. { props.pokemon.id } - { capitalizeFirstLetter(props.pokemon.name) }</Card.Title>
                        <div className="pokemon-type" >
                            <PokemonBadge types = { props.pokemon.types } />
                        </div>
                    </Row>
                </Col>
                <Col className="status-location" >
                    <Row>
                        <div className="text">
                            Base status
                        </div>
                    </Row>
                    <Row className="status-container">
                        <Col className="col-A" >
                            <Row className="status-row">
                                <div className="status-text">
                                    Hp: { props.pokemon.stats[0].base_stat }
                                </div>
                                <div className="status-progress">
                                    <ProgressBar now={ props.pokemon.stats[0].base_stat } max={255}/>
                                </div>
                            </Row>
                            <Row className="status-row">
                                <div className="status-text">
                                    Atk: { props.pokemon.stats[1].base_stat }
                                </div>
                                <div className="status-progress">
                                    <ProgressBar now={ props.pokemon.stats[1].base_stat } max={255}/>
                                </div>
                            </Row>
                            <Row className="status-row">
                                <div className="status-text">
                                    Def: { props.pokemon.stats[2].base_stat }
                                </div>
                                <div className="status-progress">
                                    <ProgressBar now={ props.pokemon.stats[2].base_stat } max={255}/>
                                </div>
                            </Row>
                        </Col>
                        <Col className="col-B" >
                        <Row className="status-row">
                                <div className="status-text">
                                    SpAtk: { props.pokemon.stats[3].base_stat }
                                </div>
                                <div className="status-progress">
                                    <ProgressBar now={ props.pokemon.stats[3].base_stat } max={255}/>
                                </div>
                            </Row>
                            <Row className="status-row">
                                <div className="status-text">
                                    Spdef: { props.pokemon.stats[4].base_stat }
                                </div>
                                <div className="status-progress">
                                    <ProgressBar now={ props.pokemon.stats[4].base_stat } max={255}/>
                                </div>
                            </Row>
                            <Row className="status-row">
                                <div className="status-text">
                                    Speed: { props.pokemon.stats[5].base_stat }
                                </div>
                                <div className="status-progress">
                                    <ProgressBar now={ props.pokemon.stats[5].base_stat } max={255}/>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        Location
                    </Row>
                </Col>
            </Row>
        </Card>
    )
}

export default Pokemon