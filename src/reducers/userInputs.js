//userInputs.js
const userInputs = (state, action) => {
	switch (action.type) {
		case 'TODO_TITLE_CHANGE':
			return {...state, todoTitle: action.todoTitle};
		case 'ITEM_TITLE_CHANGE':
			return {filter: null};
		default:
			return {todoTitle: '', itemTitle: '', itemText: ''};
	}
}

export default userInputs