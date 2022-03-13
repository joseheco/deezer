import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import songs, { loadSongs } from './songs/home';

const reducer = combineReducers({
  songs,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
)

store.dispatch(loadSongs());

export default store;
