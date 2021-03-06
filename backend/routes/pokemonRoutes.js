import express from 'express';
const router = express.Router();
import {
  getPokemons,
  getPokemonById,
  createPokemon,
  deletePokemon,
  updatePokemon,
  createPokemonReview,
  deletePokemonReview,
} from '../controllers/pokemonController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').get(getPokemons).post(protect, admin, createPokemon);
router
  .route('/:id')
  .get(getPokemonById)
  .delete(protect, admin, deletePokemon)
  .put(protect, admin, updatePokemon);

router.route('/:id/reviews').post(protect, createPokemonReview);
router.route('/:id/reviews/:reviewId').delete(protect, deletePokemonReview);

export default router;
