export const types = {
	LOAD_TODOS: 'LOAD_TODOS',
	INSERT_TODO: 'INSERT_TODO',
	ADD_TODO: 'ADD_TODO',
	UPDATE_TODO: 'UPDATE_TODO',
	TOGGLE_TODO: 'TOGGLE_TODO',
	REMOVE_TODO: 'REMOVE_TODO',
	SET_FILTER_TEXT: 'SET_FILTER_TEXT',
}

export const loadTodos = (items) => ({
	type: types.LOAD_TODOS,
	items,
})

export const insertTodo = (title, text, completed, contact, image) => ({
	type: types.INSERT_TODO,
	title,
	text,
	completed,
	contact,
	image,
});

export const addTodo = (id, title, text, completed, contact, image) => ({
	type: types.ADD_TODO,
	id,
	title,
	text,
	completed,
	contact,
	image,
});

export const updateTodo = (id, title, text, completed, contact, image) => ({
	type: types.UPDATE_TODO,
	id,
	title,
	text,
	completed,
	contact,
	image,
})

export const toggleTodo = (id, completed) => ({
	type: types.TOGGLE_TODO,
	id, 
	completed,
});

export const removeTodo = id => ({
	type: types.REMOVE_TODO,
	id,
});

export const setFilterText = filterText => ({
	type: types.SET_FILTER_TEXT,
	filterText
})