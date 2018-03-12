import userInputs from './userInputs'
import * as actions from '../actions';

test( 'Todo Title Change  ', () =>
	expect( 
		userInputs( {},
			actions.todoTitleChange('New Title'))
		).toEqual(  {"todoTitle": 'New Title'}
		) 
);