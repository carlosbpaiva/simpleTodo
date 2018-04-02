import { types, initialState } from './contact.actions';

export default function contactReducer ( state = initialState, action = {} ) {
	switch( action.type ) {
		case types.SELECT_CONTACT:
			return({
				...state,
				selectedContact: action.selectedContact,
			})
		default:
			return state;	
	}
}
