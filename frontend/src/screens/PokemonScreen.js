import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from '../components/Rating';

const PokemonScreen = ({ match }) => {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(`/api/pokemons/${match.params.id}`);
      setPokemon(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <Link to='/' className='btn btn-light my-3'>
        Go Back
      </Link>
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
            <ListGroup.Item>description: {pokemon.description}</ListGroup.Item>
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
    </>
  );
};

export default PokemonScreen;
