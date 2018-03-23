import { combineReducers } from 'redux'
import user from './user'
import todos from './todos';
import userInputs from './userInputs';

export default combineReducers({
  todos,
  userInputs,
  user
})
