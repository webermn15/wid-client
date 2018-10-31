export const setActivities = activityArray => {
	return {
		type: 'SET_USER_ACTIVITIES',
		payload: activityArray
	}
}

export const addActivity = activity => {
	return {
		type: 'ADD_USER_ACTIVITY',
		payload: activity
	}
}

/* for this one, submit changes to back end first and if it returns 200 then dispatch action to reducer */
export const editActivity = activity => {
	return {
		type: 'EDIT_USER_ACTIVITY',
		payload: activity
	}
}