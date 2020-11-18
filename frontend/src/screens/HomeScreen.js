import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Pokemon from '../components/Pokemon';
import { listPokemons } from '../actions/pokemonActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;

  const dispatch = useDispatch();

  const pokemonList = useSelector((state) => state.pokemonList);

  const { pokemons, loading, error } = pokemonList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(listPokemons(keyword));
  }, [dispatch, keyword]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          {userInfo && (
            <Message variant='warning'>Welcome Back {userInfo.name} !</Message>
          )}
          <Row>
            {pokemons.map((pokemon) => (
              <Col key={pokemon._id} sm={12} md={6} lg={4} xl={3}>
                <Pokemon pokemon={pokemon} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default HomeScreen;
