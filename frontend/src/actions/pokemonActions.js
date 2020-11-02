import {
  POKEMON_LIST_REQUEST,
  POKEMON_LIST_SUCCESS,
  POKEMON_LIST_FAIL,
  POKEMON_DETAILS_REQUEST,
  POKEMON_DETAILS_SUCCESS,
  POKEMON_DETAILS_FAIL,
} from '../constants/pokemonConstants';
import axios from 'axios';

export const listPokemons = () => async (dispatch) => {
  try {
    dispatch({
      type: POKEMON_LIST_REQUEST,
    });

    const { data } = await axios.get('/api/pokemons');

    dispatch({
      type: POKEMON_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POKEMON_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listPokemonDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: POKEMON_DETAILS_REQUEST,
    });

    const { data } = await axios.get(`/api/pokemons/${id}`);

    dispatch({
      type: POKEMON_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POKEMON_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};