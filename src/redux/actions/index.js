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


export const todoTitleChange = (todoTitle) => ({
	type: 'TODO_TITLE_CHANGE',
	todoTitle
})