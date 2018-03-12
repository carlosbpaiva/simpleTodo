//todosFilter.js

const todosFilter = (state={filter: null}, action) => {
	switch (action.type) {
		case 'ADD_FILTER':
			return {filter: action.filter};
		case 'REMOVE_FILTER':
			return {filter: null};
		default:
			return state;
	}
}

export default todosFilter