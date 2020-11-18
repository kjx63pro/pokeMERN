import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from 'react-bootstrap';
import Rating from '../components/Rating';
import {
  listPokemonDetails,
  createPokemonReview,
} from '../actions/pokemonActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import {
  POKEMON_CREATE_REVIEW_RESET,
  POKEMON_DETAILS_RESET,
  POKEMON_DETAILS_SUCCESS,
} from '../constants/pokemonConstants';

const PokemonScreen = ({ history, match }) => {
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();

  const pokemonDetails = useSelector((state) => state.pokemonDetails);
  const { loading, error, pokemon } = pokemonDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const pokemonReviewCreate = useSelector((state) => state.pokemonReviewCreate);
  const {
    loading: loadingPokemonReview,
    error: errorPokemonReview,
    success: successPokemonReview,
  } = pokemonReviewCreate;

  useEffect(() => {
    if (successPokemonReview) {
      setRating(0);
      setComment('');
      dispatch(listPokemonDetails(match.params.id));
    }
    if (!pokemon._id || pokemon._id !== match.params.id) {
      dispatch({ type: POKEMON_DETAILS_RESET });
      dispatch({ type: POKEMON_CREATE_REVIEW_RESET });
      dispatch(listPokemonDetails(match.params.id));
    }
  }, [dispatch, match, successPokemonReview]);

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createPokemonReview(match.params.id, {
        rating,
        comment,
      })
    );
  };

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
        <>
          {' '}
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
                  {pokemon.countInStock > 0 && (
                    <ListGroup.Item>
                      <Row>
                        <Col>Qty:</Col>
                        <Col>
                          <Form>
                            <Form.Group>
                              <Form.Control
                                as='select'
                                value={qty}
                                onChange={(e) => {
                                  setQty(e.target.value);
                                }}
                              >
                                {[...Array(pokemon.countInStock).keys()].map(
                                  (x) => (
                                    <option key={x + 1} value={x + 1}>
                                      {x + 1}
                                    </option>
                                  )
                                )}
                              </Form.Control>
                            </Form.Group>
                          </Form>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )}

                  <ListGroup.Item>
                    <Button
                      onClick={addToCartHandler}
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
          <Row>
            <Col md={6}>
              <h2>Reviews</h2>
              {pokemon.reviews.length === 0 && <Message>No Reviews</Message>}
              <ListGroup variant='flush'>
                {pokemon.reviews.map((review) => (
                  <ListGroup.Item key={review._id}>
                    <strong>{review.name}</strong>
                    <Rating value={review.rating} />
                    <p>{review.createdAt.substring(0, 10)}</p>
                    <p>{review.comment}</p>
                  </ListGroup.Item>
                ))}
                <ListGroup.Item>
                  <h2>Write a Customer Review</h2>
                  {successPokemonReview && (
                    <Message variant='success'>
                      Review submitted successfully
                    </Message>
                  )}
                  {loadingPokemonReview && <Loader />}
                  {errorPokemonReview && (
                    <Message variant='danger'>{errorPokemonReview}</Message>
                  )}
                  {userInfo ? (
                    <Form onSubmit={submitHandler}>
                      <Form.Group controlId='rating'>
                        <Form.Label>Rating</Form.Label>
                        <Form.Control
                          as='select'
                          value={rating}
                          onChange={(e) => setRating(e.target.value)}
                        >
                          <option value=''>Select...</option>
                          <option value='1'>1 - Poor</option>
                          <option value='2'>2 - Fair</option>
                          <option value='3'>3 - Good</option>
                          <option value='4'>4 - Very Good</option>
                          <option value='5'>5 - Excellent</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group controlId='comment'>
                        <Form.Label>Comment</Form.Label>
                        <Form.Control
                          as='textarea'
                          row='3'
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                      <Button
                        disabled={loadingPokemonReview}
                        type='submit'
                        variant='primary'
                      >
                        Submit
                      </Button>
                    </Form>
                  ) : (
                    <Message>
                      Please <Link to='/login'>sign in</Link> to write a review{' '}
                    </Message>
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>{' '}
        </>
      )}
    </>
  );
};

export default PokemonScreen;
