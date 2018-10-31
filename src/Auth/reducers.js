const defaultUserData = {
	username: null,
	id: null
}

export const userData = (state = defaultUserData, action) => {
	switch (action.type) {
		case 'SET_USER':
			return Object.assign({}, state, action.payload)
		default:
			return state
	}
}