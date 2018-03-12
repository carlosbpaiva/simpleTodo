//todos.js

const addTodo = (state, action) => 
	[
		...state,
		{
			id: action.id,
			title: action.title,
			completed: false,
			items: [],
		}
	]
const mapTodo = ( state, action, mapTransform ) =>{
	// console.log( action.type + ' ' + typeof state + ' State:' + JSON.stringify(state) );
	// console.log( 'Action:' + JSON.stringify(action) );
	return state.map( todo =>
		(todo.id === action.id)
			? mapTransform(todo)
			: todo
	)
}
const filterTodo = ( state, action, filterFunc ) =>
	state.filter( todo => filterFunc(todo) );

const toggleTodo = (state, action) => {
	return mapTodo(state, action, 
		(todo) => ( {...todo, completed: !todo.completed} )
	)
}


const addItem = (state, action) => {
	return mapTodo( state, action, (todo) => {
		return { 
			...todo,
		 	items: [
		 		...todo.items, 
 			 		{
 			 			todoId: action.id,
 			 			id: action.itemId,
 			 			title: action.itemTitle,
 			 			text: action.itemText,
 			 			completed: false,
						contact: null,
						image: null,
 			 		}
	 		]
		}
	});
};

const mapItems = ( state, action, mapTransform ) => {
	return mapTodo( state, action, (todo) => {
			return { 
				...todo,
				items: todo.items.map( (item) =>
					(item.id === action.itemId)
					? mapTransform(item)
					: item
				)
			}
		}
	)
};

const toggleItem = (state, action) => {
	return mapItems( state, action, (item) => {
			return {
		 		...item,
		 		completed: !item.completed
			} 
		}
	);
};

const removeItem = (state, action) => {
	return mapTodo( state, action, (todo) => {
			return {
				...todo,
				items: todo.items.filter( (item) => (item.id !== action.itemId) )
			}
		}
	)
};

const addContact = (state, action) => {
	return mapItems(state, action, (item) => {
			return {
				...item,
				contact: action.contact
			}
		}
	)
};

const removeContact = (state, action) => {
	return mapItems(state, action, (item) => {
			return {
				...item,
				contact: null,
			}
		}
	)
};

const addImage = (state, action) => {
	return mapItems(state, action, (item) => {
			return {
				...item,
				image: action.image
			}
		}
	)
};

const removeImage = (state, action) => {
	return mapItems(state, action, (item) => {
			return {
				...item,
				image: null,
			}
		}
	)
};

const todos = (state=[], action) => {

	if( arguments.length < 1 ) {
		return state;
	}

	switch (action.type) {
		case 'ADD_TODO':
			return addTodo(state, action);
		case 'TOGGLE_TODO':
			return toggleTodo(state, action);
		case 'REMOVE_TODO':
			return filterTodo(state, action, (todo) => todo.id !== action.id );
		case 'ADD_TODO_ITEM':
			return addItem(state, action);
		case 'TOGGLE_TODO_ITEM':
			return toggleItem(state, action);
		case 'REMOVE_TODO_ITEM':
			return removeItem(state, action);
		case 'ADD_CONTACT':
			return addContact(state, action);
		case 'REMOVE_CONTACT':
			return removeContact(state, action);
		case 'ADD_IMAGE':
			return addImage(state, action);
		case 'REMOVE_IMAGE':
			return removeImage(state, action);
		default:
			return state;
	}
}

export default todos