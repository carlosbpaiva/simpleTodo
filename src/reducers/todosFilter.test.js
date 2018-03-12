import todoApp from './';
import todosFilter from './todosFilter'
import * as actions from '../actions';

test( 'Add filter ', () =>
	expect( 
		todosFilter( {},
			actions.addFilter('New'))
		).toEqual(  {"filter": 'New'}
		) 
);