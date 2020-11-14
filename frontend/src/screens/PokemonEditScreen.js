import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import {
  listPokemonDetails,
  updatePokemon,
} from '../actions/pokemonActions.js';
import { POKEMON_UPDATE_RESET } from '../constants/pokemonConstants';

const PokemonEditScreen = ({ match, history }) => {
  const pokemonId = match.params.id;

  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [types, setTypes] = useState([]);
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [countInStock, setCountInStock] = useState(0);

  const dispatch = useDispatch();

  const pokemonDetails = useSelector((state) => state.pokemonDetails);
  const { loading, error, pokemon } = pokemonDetails;

  const pokemonUpdate = useSelector((state) => state.pokemonUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = pokemonUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: POKEMON_UPDATE_RESET });
      history.push('/admin/pokemonlist');
    } else {
      if (!pokemon.name || pokemon._id !== pokemonId) {
        dispatch(listPokemonDetails(pokemonId));
      } else {
        setName(pokemon.name);
        setImage(pokemon.image);
        setTypes(pokemon.types);
        setDescription(pokemon.description);
        setPrice(pokemon.price);
        setCountInStock(pokemon.countInStock);
      }
    }
  }, [dispatch, pokemonId, successUpdate, history, pokemon]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updatePokemon({
        _id: pokemonId,
        name,
        image,
        types,
        description,
        price,
        countInStock,
      })
    );
  };
  return (
    <>
      <Link to='/admin/pokemonlist' className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit User</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId='image'>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter image'
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId='types'>
              <Form.Label>Types</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter types'
                value={types}
                onChange={(e) => setTypes(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId='description'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as='textarea'
                type='text'
                placeholder='Enter description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId='price'>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter price'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId='countInStock'>
              <Form.Label>CountInStock</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter countInStock'
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type='submit' variant='primary'>
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  );
};

export default PokemonEditScreen;
