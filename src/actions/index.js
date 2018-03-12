let nextTodoId = 1;
let nextItemId = 1;

export const addTodo = (title) => ({
	type: 'ADD_TODO',
	id: nextTodoId++,
	title,
});

export const toggleTodo = (id) => ({
	type: 'TOGGLE_TODO',
	id, 
});

export const removeTodo = (id) => ({
	type: 'REMOVE_TODO',
	id,
});

export const addTodoItem = (id, itemTitle, itemText) => ({
	type: 'ADD_TODO_ITEM',
	id,
	itemId: nextItemId++,
	itemTitle,
	itemText,
});

export const toggleTodoItem = (id, itemId) => ({
	type: 'TOGGLE_TODO_ITEM',
	id,
	itemId,
});

export const removeTodoItem = (id, itemId) => ({
	type: 'REMOVE_TODO_ITEM',
	id,
	itemId,
});

export const addContact = (id, itemId, contact) => ({
	type: 'ADD_CONTACT',
	id,
	itemId,
	contact,
})

export const removeContact = (id, itemId) => ({
	type: 'REMOVE_CONTACT',
	id,
	itemId,
})

export const addImage = (id, itemId, image) => ({
	type: 'ADD_IMAGE',
	id,
	itemId,
	image,
})

export const removeImage = (id, itemId) => ({
	type: 'REMOVE_IMAGE',
	id,
	itemId,
})

export const addFilter = (filter) => ({
	type: 'ADD_FILTER',
	filter,
})

export const removeFilter = () => ({
	type: 'REMOVE_FILTER',
})

export const todoTitleChange = (todoTitle) => ({
	type: 'TODO_TITLE_CHANGE',
	todoTitle
})