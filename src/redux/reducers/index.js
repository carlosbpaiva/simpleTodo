import { combineReducers } from 'redux'
import user from './user'
import todos from './todos';
import contact from'./contact';

export default combineReducers({
  todos,
  user,
  contact,
})
