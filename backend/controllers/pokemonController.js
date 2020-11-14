import Pokemon from '../models/pokemonModel.js';
import asyncHandler from 'express-async-handler';

// @desc    Fetch all pokemons
// @route   GET /api/pokemons
// @access  Public
const getPokemons = asyncHandler(async (req, res) => {
  const pokemons = await Pokemon.find({}).populate('user', 'name');
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

// @desc    Delete pokemon
// @route   DELETE /api/pokemon/:id
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

export { getPokemons, getPokemonById, deletePokemon };
