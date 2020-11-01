import React from 'react';
import { Card } from 'react-bootstrap';

const Pokemon = ({ pokemon }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <a href={`/pokemon/${pokemon._id}`}>
        <Card.Img variant='top' src={pokemon.image} />
      </a>

      <Card.Body>
        <a href={`/pokemon/${pokemon._id}`}>
          <Card.Title as='div' style={{ color: 'black' }}>
            <strong>{pokemon.name}</strong>
          </Card.Title>
        </a>
        <Card.Text as='div'>
          <div className='my-3'>
            {pokemon.rating} from {pokemon.numReviews} reviews
          </div>
        </Card.Text>

        <Card.Text as='h3'>${pokemon.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Pokemon;
