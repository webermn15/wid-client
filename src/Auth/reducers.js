const defaultUserData = {
	username: null,
	id: null,
	error: false,
	errorMessage: null
}

export const userData = (state = defaultUserData, action) => {
	switch (action.type) {
		case 'SET_USER':
			return Object.assign({}, state, action.payload)
		case 'SET_USER_ERROR':
			return Object.assign({}, state, {
				...state,
				error: true,
				errorMessage: payload.errorMessage
			})
		default:
			return state
	}
}