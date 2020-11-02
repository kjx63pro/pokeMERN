import {
  POKEMON_LIST_REQUEST,
  POKEMON_LIST_SUCCESS,
  POKEMON_LIST_FAIL,
} from '../constants/pokemonConstants';

export const pokemonListReducer = (state = { pokemons: [] }, action) => {
  switch (action.type) {
    case POKEMON_LIST_REQUEST:
      return { loading: true, pokemons: [] };
    case POKEMON_LIST_SUCCESS:
      return { loading: false, pokemons: action.payload };
    case POKEMON_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
