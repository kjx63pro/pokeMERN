import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from '../components/Rating';
import { listPokemonDetails } from '../actions/pokemonActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const PokemonScreen = ({ match }) => {
  const dispatch = useDispatch();

  const pokemonDetails = useSelector((state) => state.pokemonDetails);

  const { loading, error, pokemon } = pokemonDetails;

  useEffect(() => {
    dispatch(listPokemonDetails(match.params.id));
  }, [dispatch, match]);

  return (
    <>
      <Link to='/' className='btn btn-light my-3'>
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={pokemon.image} alt={pokemon.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>{pokemon.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={pokemon.rating}
                  text={`${pokemon.numReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>Price: ${pokemon.price}</ListGroup.Item>
              <ListGroup.Item>
                description: {pokemon.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>${pokemon.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {pokemon.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    className='btn-block'
                    type='button'
                    variant='success'
                    disabled={pokemon.countInStock === 0}
                  >
                    Add To Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default PokemonScreen;
