export const addTodo = (title, text, completed, contact, image) => ({
	type: 'ADD_TODO',
	title,
	text,
	completed,
	contact,
	image,
});

export const updateTodo = (id, title, text, completed, contact, image) => ({
	type: 'UPDATE_TODO',
	id,
	title,
	text,
	completed,
	contact,
	image,
})

export const toggleTodo = id => ({
	type: 'TOGGLE_TODO',
	id, 
});

export const removeTodo = id => ({
	type: 'REMOVE_TODO',
	id,
});

export const addContact = (id, contact) => ({
	type: 'ADD_CONTACT',
	id,
	contact,
});

export const removeContact = (id, itemId) => ({
	type: 'REMOVE_CONTACT',
	id,
});

export const addImage = (id, image) => ({
	type: 'ADD_IMAGE',
	id,
	image,
});

export const removeImage = id => ({
	type: 'REMOVE_IMAGE',
	id,
});

export const setFilterText = filterText => ({
	type: 'SET_FILTER_TEXT',
	filterText
})