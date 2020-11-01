import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import Pokemon from '../components/Pokemon';

const HomeScreen = () => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get('/api/pokemons');
      setPokemons(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <Row>
        {pokemons.map((pokemon) => (
          <Col key={pokemon._id} sm={12} md={6} lg={4} xl={3}>
            <Pokemon pokemon={pokemon} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
