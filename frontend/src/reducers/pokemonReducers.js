import {
  POKEMON_LIST_REQUEST,
  POKEMON_LIST_SUCCESS,
  POKEMON_LIST_FAIL,
  POKEMON_DETAILS_REQUEST,
  POKEMON_DETAILS_SUCCESS,
  POKEMON_DETAILS_FAIL,
  POKEMON_DETAILS_RESET,
  POKEMON_DELETE_REQUEST,
  POKEMON_DELETE_SUCCESS,
  POKEMON_DELETE_FAIL,
  POKEMON_CREATE_REQUEST,
  POKEMON_CREATE_SUCCESS,
  POKEMON_CREATE_FAIL,
  POKEMON_CREATE_RESET,
  POKEMON_UPDATE_REQUEST,
  POKEMON_UPDATE_SUCCESS,
  POKEMON_UPDATE_FAIL,
  POKEMON_UPDATE_RESET,
  POKEMON_CREATE_REVIEW_REQUEST,
  POKEMON_CREATE_REVIEW_SUCCESS,
  POKEMON_CREATE_REVIEW_FAIL,
  POKEMON_CREATE_REVIEW_RESET,
  POKEMON_DELETE_REVIEW_REQUEST,
  POKEMON_DELETE_REVIEW_SUCCESS,
  POKEMON_DELETE_REVIEW_FAIL,
  POKEMON_DELETE_REVIEW_RESET,
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

export const pokemonDetailsReducer = (
  state = { pokemon: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case POKEMON_DETAILS_REQUEST:
      return { loading: true, ...state };
    case POKEMON_DETAILS_SUCCESS:
      return { loading: false, pokemon: action.payload };
    case POKEMON_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case POKEMON_DETAILS_RESET:
      return {};
    default:
      return state;
  }
};

export const pokemonCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case POKEMON_CREATE_REQUEST:
      return { loading: true };
    case POKEMON_CREATE_SUCCESS:
      return { loading: false, success: true, pokemon: action.payload };
    case POKEMON_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case POKEMON_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const pokemonUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case POKEMON_UPDATE_REQUEST:
      return { loading: true };
    case POKEMON_UPDATE_SUCCESS:
      return { loading: false, success: true, pokemon: action.payload };
    case POKEMON_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case POKEMON_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const pokemonDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case POKEMON_DELETE_REQUEST:
      return { loading: true };
    case POKEMON_DELETE_SUCCESS:
      return { loading: false, success: true };
    case POKEMON_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const pokemonReviewCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case POKEMON_CREATE_REVIEW_REQUEST:
      return { loading: true };
    case POKEMON_CREATE_REVIEW_SUCCESS:
      return { loading: false, success: true };
    case POKEMON_CREATE_REVIEW_FAIL:
      return { loading: false, error: action.payload };
    case POKEMON_CREATE_REVIEW_RESET:
      return {};
    default:
      return state;
  }
};

export const pokemonReviewDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case POKEMON_DELETE_REVIEW_REQUEST:
      return { loading: true };
    case POKEMON_DELETE_REVIEW_SUCCESS:
      return { loading: false, success: true };
    case POKEMON_DELETE_REVIEW_FAIL:
      return { loading: false, error: action.payload };
    case POKEMON_DELETE_REVIEW_RESET:
      return {};
    default:
      return state;
  }
};
