import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  pokemonListReducer,
  pokemonDetailsReducer,
} from './reducers/pokemonReducers';

const reducer = combineReducers({
  pokemonList: pokemonListReducer,
  pokemonDetails: pokemonDetailsReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
