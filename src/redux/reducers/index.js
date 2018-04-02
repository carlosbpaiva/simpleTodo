import { combineReducers } from 'redux'
import user from './user'
import todos from './todos';
import contact from'./contact';
import image from'./image';

export default combineReducers({
  todos,
  user,
  contact,
  image,
})
