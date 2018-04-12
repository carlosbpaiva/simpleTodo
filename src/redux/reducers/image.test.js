import image from './image';
import { initialState, selectImage } from './image.actions';

const state1 = {...initialState};
const newState1 = {...state1, selectedImage: 'imageData' };

test(
	'Set Contact Filter', () => {
		expect( 
			image (
				state1,
				selectImage('imageData')
			)
		).toEqual( newState1 )
	}
);
