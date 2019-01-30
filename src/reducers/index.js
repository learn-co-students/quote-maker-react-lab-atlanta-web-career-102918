import { combineReducers } from 'redux';
import quotes from './quotes';
import authors from './authors'

//TODO: export a root reducer
//TODO: create quoteReducer & import into this file
export default combineReducers({
  quotes: quotes,
  authors: authors
});
