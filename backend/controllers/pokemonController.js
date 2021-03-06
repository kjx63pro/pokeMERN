import Pokemon from '../models/pokemonModel.js';
import asyncHandler from 'express-async-handler';

// @desc    Fetch all pokemons
// @route   GET /api/pokemons
// @access  Public
const getPokemons = asyncHandler(async (req, res) => {
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {};

  const pokemons = await Pokemon.find({ ...keyword }).populate('user', 'name');
  res.json(pokemons);
});

// @desc    Fetch single pokemons
// @route   GET /api/pokemons/:id
// @access  Public
const getPokemonById = asyncHandler(async (req, res) => {
  const pokemon = await Pokemon.findById(req.params.id);
  if (pokemon) {
    res.json(pokemon);
  } else {
    res.status(404);
    throw new Error('Pokemon not found');
  }
});

// @desc    Create pokemon
// @route   POST /api/pokemons
// @access  Private/Admin
const createPokemon = asyncHandler(async (req, res) => {
  const newPokemon = await Pokemon.create({
    types: [],
    price: 0,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
    name: '???',
    image: '/images/sample.png',
    description: 'Some description here',
    user: {
      _id: req.user._id,
      name: req.user.name,
    },
    reviews: [],
  });

  if (newPokemon) {
    res.json(newPokemon);
  } else {
    res.status(400);
    throw new Error('Invalid pokemon data');
  }
});

// @desc    Update pokemon
// @route   POST /api/pokemons/:id
// @access  Private/Admin
const updatePokemon = asyncHandler(async (req, res) => {
  const { name, image, types, description, price, countInStock } = req.body;

  const pokemon = await Pokemon.findById(req.params.id);

  if (pokemon) {
    pokemon.name = name || pokemon.name;
    pokemon.image = image || pokemon.image;
    pokemon.types = types || pokemon.types;
    pokemon.description = description || pokemon.description;
    pokemon.price = price || pokemon.price;
    pokemon.countInStock = countInStock || pokemon.countInStock;

    const updatedPokemon = await pokemon.save();

    res.json(updatedPokemon);
  } else {
    res.status(404);
    throw new Error('Pokemon not found');
  }
});

// @desc    Delete pokemon
// @route   DELETE /api/pokemons/:id
// @access  Private/Admin
const deletePokemon = asyncHandler(async (req, res) => {
  const pokemon = await Pokemon.findById(req.params.id);

  if (pokemon) {
    await pokemon.remove();
    res.json({ message: 'Pokemon removed' });
  } else {
    res.status(404);
    throw new Error('Pokemon not found');
  }
});

// @desc    Create new review
// @route   POST /api/pokemons/:id/reviews
// @access  Private
const createPokemonReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;

  const pokemon = await Pokemon.findById(req.params.id);

  if (pokemon) {
    const isAreadyReviewed = pokemon.reviews.find(
      (review) => review.user.toString() === req.user._id.toString()
    );

    if (isAreadyReviewed) {
      res.status(400);
      throw new Error('You have already reviewed this pokemon');
    } else {
      const review = {
        user: req.user._id,
        name: req.user.name,
        rating: Number(rating),
        comment,
      };
      pokemon.reviews.push(review);

      pokemon.numReviews = pokemon.reviews.length;

      pokemon.rating =
        pokemon.reviews.reduce((acc, item) => item.rating + acc, 0) /
        pokemon.reviews.length;

      await pokemon.save();
      res.status(201).json({ message: 'Review added' });
    }
  } else {
    res.status(400);
    throw new Error('Pokemon not found');
  }
});

// @desc    Delete new review
// @route   DELETE /api/pokemons/:id/reviews/:reviewId
// @access  Private
const deletePokemonReview = asyncHandler(async (req, res) => {
  const pokemon = await Pokemon.findById(req.params.id);

  if (pokemon) {
    const review = pokemon.reviews.find(
      (r) => r._id.toString() === req.params.reviewId.toString()
    );

    if (req.user._id.toString() === review.user.toString()) {
      await review.remove();
      await pokemon.save();
      res.json({ message: 'Review successfully Deleted' });
    } else {
      res.status(500);
      throw new Error('This is not your review');
    }
  } else {
    res.status(400);
    throw new Error('Pokemon not found');
  }
});

export {
  getPokemons,
  getPokemonById,
  createPokemon,
  updatePokemon,
  deletePokemon,
  createPokemonReview,
  deletePokemonReview,
};
