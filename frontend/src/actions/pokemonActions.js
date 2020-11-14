import {
  POKEMON_LIST_REQUEST,
  POKEMON_LIST_SUCCESS,
  POKEMON_LIST_FAIL,
  POKEMON_DETAILS_REQUEST,
  POKEMON_DETAILS_SUCCESS,
  POKEMON_DETAILS_FAIL,
  POKEMON_DELETE_REQUEST,
  POKEMON_DELETE_SUCCESS,
  POKEMON_DELETE_FAIL,
  POKEMON_CREATE_REQUEST,
  POKEMON_CREATE_SUCCESS,
  POKEMON_CREATE_FAIL,
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

export const createPokemon = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: POKEMON_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post('/api/pokemons', {}, config);

    dispatch({
      type: POKEMON_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POKEMON_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deletePokemon = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: POKEMON_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/api/pokemons/${id}`, config);

    dispatch({
      type: POKEMON_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: POKEMON_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
