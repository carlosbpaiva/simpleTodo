import * as actions from '../actions';

test( 'Add Todo Item', () => {
		expect( actions.addTodoItem(1, 'Todo Item', 'Todo Item Text')
		).toEqual (
			{
					type: 'ADD_TODO_ITEM',
					id: 1,
					itemId: 1,
					itemTitle: 'Todo Item',
					itemText: 'Todo Item Text',
			}		
		)
	}
);