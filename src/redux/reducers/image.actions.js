export const initialState= {
	selectedImage: null,
}

export const types = {
	SELECT_IMAGE: 'SELECT_IMAGE',
}

export const selectImage = selectedImage => ({
	type: types.SELECT_IMAGE,
	selectedImage,
})
