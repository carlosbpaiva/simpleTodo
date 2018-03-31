import contact from './contact';
import { initialState, selectContact } from './contact.actions';

const state1 = {...initialState};
const newState1 = {...state1, selectedContact: {'name': 'João'} };
test(
	'Set Contact Filter', () => {
		expect( 
			contact (
				state1,
				selectContact({'name': 'João'})
			)
		).toEqual( newState1 )
	}
);
