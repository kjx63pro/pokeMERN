import Pokemon from '../models/pokemonModel.js';
import asyncHandler from 'express-async-handler';

// @desc    Fetch all pokemons
// @route   GET /api/pokemons
// @access  Public
const getPokemons = asyncHandler(async (req, res) => {
  const pokemons = await Pokemon.find({});
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
    res.status(404).json({ message: 'Pokemon not found' });
  }
});

export { getPokemons, getPokemonById };
