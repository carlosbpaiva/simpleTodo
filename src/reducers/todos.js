//todos.js

const todos = (state=[], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [
				...state,
				{
					id: action.id,
					title: action.title,
					completed: false,
					items: [],
				}
			];
		case 'TOGGLE_TODO':
			return state.map(todo =>
				(todo.id === action.id)
					? {...todo, completed: !todo.completed}
					: todo
			);
		case 'REMOVE_TODO':
			return state.filter(todo =>
				todo.id !== action.id
			)
		case 'ADD_TODO_ITEM':
			return state;
		case 'TOGGLE_TODO_ITEM':
			return state;
		case 'REMOVE_TODO_ITEM':
			return state.filter(todo =>
				todo.id !== action.id
			)


		default:
			return state;
	}
}

export default todos