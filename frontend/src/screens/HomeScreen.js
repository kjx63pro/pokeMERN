import React from 'react';
import pokemons from '../pokemons';
import { Row, Col } from 'react-bootstrap';
import Pokemon from '../components/Pokemon';

const HomeScreen = () => {
  return (
    <>
      <Row>
        {pokemons.map((pokemon) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Pokemon pokemon={pokemon} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
