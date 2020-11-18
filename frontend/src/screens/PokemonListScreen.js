import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Image, Button, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import {
  listPokemons,
  createPokemon,
  deletePokemon,
} from '../actions/pokemonActions';
import { POKEMON_CREATE_RESET } from '../constants/pokemonConstants';
import Meta from '../components/Meta';

const PokemonListScreen = ({ history }) => {
  const dispatch = useDispatch();

  const pokemonList = useSelector((state) => state.pokemonList);
  const { loading, error, pokemons } = pokemonList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const pokemonCreate = useSelector((state) => state.pokemonCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    pokemon,
  } = pokemonCreate;

  const pokemonDelete = useSelector((state) => state.pokemonDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = pokemonDelete;

  useEffect(() => {
    dispatch({ type: POKEMON_CREATE_RESET });
    if (successCreate) {
      history.push(`/admin/pokemon/${pokemon._id}/edit`);
    }
    if (userInfo && userInfo.isAdmin) {
      dispatch(listPokemons());
    } else {
      history.push('/login');
    }
  }, [dispatch, userInfo, history, successDelete, successCreate, pokemon]);

  const createPokemonHandler = () => {
    dispatch(createPokemon());
  };

  const pokemonDeleteHandler = (pokemon) => {
    if (window.confirm(`Are you sure you want to delete "${pokemon.name}"?`)) {
      dispatch(deletePokemon(pokemon._id));
    }
  };

  return (
    <>
      <Meta title='Pokemon List | Admin Only' />
      <Message>This is an admin-only page</Message>
      <Row>
        <Col>
          <h1>POKEMONS</h1>
        </Col>
        <Col className='text-right'>
          <Button className='my-3' onClick={createPokemonHandler}>
            <i className='fas fa-plus' /> Add New Pokemon
          </Button>
        </Col>
      </Row>
      {loadingDelete && <Loader />}
      {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
      {loadingCreate && <Loader />}
      {errorCreate && <Message variant='danger'>{errorCreate}</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>IMAGE</th>
              <th>NAME</th>
              <th>TYPES</th>
              <th>USER(Owner)</th>
              <th>PRICE</th>
              <th>COUNT IN STOCK</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {pokemons.map((pokemon) => (
              <tr key={pokemon._id}>
                <td>
                  <Image
                    src={pokemon.image}
                    alt={pokemon.name}
                    style={{ width: '75px' }}
                  />
                </td>
                <td>{pokemon.name}</td>
                <td>
                  {pokemon.types.map((p, index) => (
                    <p key={index}>{p}</p>
                  ))}
                </td>
                <td>{pokemon.user.name}</td>
                <td>{pokemon.price}</td>
                <td>{pokemon.countInStock}</td>
                <td>
                  <LinkContainer to={`/admin/pokemon/${pokemon._id}/edit`}>
                    <Button size='sm' variant='light'>
                      <i className='fas fa-edit' />
                    </Button>
                  </LinkContainer>
                  <Button
                    size='sm'
                    variant='danger'
                    onClick={() => {
                      pokemonDeleteHandler(pokemon);
                    }}
                  >
                    <i className='fas fa-trash' />
                  </Button>
                </td>
              </tr>
            ))}
            <tr></tr>
          </tbody>
        </Table>
      )}
    </>
  );
};

export default PokemonListScreen;
