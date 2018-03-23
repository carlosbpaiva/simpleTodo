//todos.js

const mapTodo = ( state, action, mapTransform ) => (
	state.map( todo =>
		(todo.id === action.id)
			? mapTransform(todo)
			: todo
	)
);


const removeTodo = (state, action) => (
	{
		...state,
		items: state.items.filter( (todo) => todo.id !== action.id )
	}
);



const addTodo = (state, action) => {
	const newId = state.lastId + 1;
	return {
		...state,
		lastId: newId,
		items: [
			...state.items,
			{
				id: newId,
				title: action.title,
				text: action.text,
				completed: action.completed,
				contact: action.contact,
				image: action.image,
			}
		]
	}
};

const updateTodo = (state, action) => (
	{
		...state,
		items: mapTodo(state.items, action,
			(todo) => ( 
				{
					...todo,
					title: action.title,
					text: action.text,
					completed: action.completed,
					contact: action.contact,
					image: action.image,
				}
			)
		)
	}
)

const toggleTodo = (state, action) => {
	return {
		...state,
		items: mapTodo(state.items, action, 
			(todo) => ( {...todo, completed: !todo.completed} )
		)
	}
}

const addContact = (state, action) => {
	return {
		...state,
		items: mapTodo(state.items, action, 
			(todo) => ( {...todo, contact: action.contact} )
		)
	}
};

const removeContact = (state, action) => {
	return {
		...state,
		items: mapTodo(state.items, action, 
			(todo) => ( {...todo, contact: null} )
		)
	}
};

const addImage = (state, action) => {
	return {
		...state,
		items:  mapTodo(state.items, action, 
			(todo) => ( {...todo, image: action.image} )
		)
	}
};

const removeImage = (state, action) => {
	return {
		...state,
		items: mapTodo(state.items, action, 
 			(todo) => ( {...todo, image: null} )
 		)
 	}
};

const INITIAL_STATE = { lastId:0, filter:'', selectedId:null, items: [] };

const todos = (state=INITIAL_STATE, action) => {
	if( arguments.length < 1 ) {
		return state;
	}

	switch (action.type) {
		case 'ADD_TODO':
			return addTodo(state, action);
		case 'UPDATE_TODO':
			return updateTodo(state, action);
		case 'TOGGLE_TODO':
			return toggleTodo(state, action);
		case 'REMOVE_TODO':
			return removeTodo(state,action);
		case 'ADD_CONTACT':
			return addContact(state, action);
		case 'REMOVE_CONTACT':
			return removeContact(state, action);
		case 'ADD_IMAGE':
			return addImage(state, action);
		case 'REMOVE_IMAGE':
			return removeImage(state, action);
		case 'SET_FILTER_TEXT':
			return { ...state, filterText: action.filterText }
		default:
			return INITIAL_STATE;
	}
}

export default todos