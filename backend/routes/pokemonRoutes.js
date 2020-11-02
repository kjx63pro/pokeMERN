import express from 'express';
const router = express.Router();
import {
  getPokemons,
  getPokemonById,
} from '../controllers/pokemonController.js';

router.route('/').get(getPokemons);
router.route('/:id').get(getPokemonById);

export default router;
