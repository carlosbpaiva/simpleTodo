import { types, initialState } from './image.actions';

export default function imageReducer ( state = initialState, action = {} ) {
	switch( action.type ) {
		case types.SELECT_IMAGE:
			return({
				...state,
				selectedImage: action.selectedImage,
			})
		default:
			return state;	
	}
}
