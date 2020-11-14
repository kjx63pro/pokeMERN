import express from 'express';
const router = express.Router();
import {
  getPokemons,
  getPokemonById,
  deletePokemon,
} from '../controllers/pokemonController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').get(getPokemons);
router.route('/:id').get(getPokemonById).delete(protect, admin, deletePokemon);

export default router;
