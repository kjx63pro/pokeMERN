import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Badge } from 'react-bootstrap';
import Rating from './Rating';

const Pokemon = ({ pokemon }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/pokemon/${pokemon._id}`}>
        <Card.Img variant='top' src={pokemon.image} />
      </Link>

      <Card.Body>
        <Link to={`/pokemon/${pokemon._id}`}>
          <Card.Title as='div'>
            <strong>{pokemon.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text>
          {pokemon.types.map((p) => (
            <Badge
              variant={
                p === 'Grass'
                  ? 'success'
                  : p === 'Fire'
                  ? 'danger'
                  : p === 'Water'
                  ? 'primary'
                  : p === 'Bug'
                  ? 'dark'
                  : p === 'Poison'
                  ? 'info'
                  : 'light'
              }
              className='mr-1'
            >
              {p}
            </Badge>
          ))}
        </Card.Text>
        <Card.Text as='div'>
          <div className='my-3'>
            <Rating
              value={pokemon.rating}
              text={`${pokemon.numReviews} reviews`}
            />
          </div>
        </Card.Text>

        <Card.Text as='h3'>${pokemon.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Pokemon;
