export const initialState= {
	selectedContact: null,
}

export const types = {
	SELECT_CONTACT: 'SELECT_CONTACT',
}

export const selectContact = selectedContact => ({
	type: types.SELECT_CONTACT,
	selectedContact,
})
