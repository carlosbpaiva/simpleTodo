import { combineReducers } from 'redux'
import userReducer from './user'
import todos from './todos';
import todosFilter from './todosFilter';
import userInputs from './userInputs';

export default combineReducers({
  todos,
  todosFilter,
  todosFilter,
  userInputs,
  userReducer
})
