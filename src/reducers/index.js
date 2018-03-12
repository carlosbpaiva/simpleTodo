import { combineReducers } from 'redux';
import todos from './todos';
import todosFilter from './todosFilter';
import userInputs from './userInputs';

const reducer = combineReducers ({
	todos,
	todosFilter,
	userInputs,
})
export default reducer;
