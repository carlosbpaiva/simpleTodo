import { combineReducers } from 'redux';
import todos from './todos';
import todosFilter from './todosFilter';

const todoApp = combineReducers ({
	todos,
	todosFilter,
})
export default todoApp;
