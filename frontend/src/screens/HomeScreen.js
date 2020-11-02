import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Pokemon from '../components/Pokemon';
import { listPokemons } from '../actions/pokemonActions';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const pokemonList = useSelector((state) => state.pokemonList);

  const { pokemons, loading, error } = pokemonList;

  useEffect(() => {
    dispatch(listPokemons());
  }, [dispatch]);

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
