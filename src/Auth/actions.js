export const setUser = user => {
	return {
		type: 'SET_USER',
		payload: user
	}
}

export const setUserActivities = activityArray => {
	return {
		type: 'SET_USER_ACTIVITIES',
		payload: activityArray
	}
}

export const setUserError = error => {
	return {
		type: 'SET_USER_ERROR',
		payload: 'Could not set user, error: ' + error
	}
}