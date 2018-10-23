import { combineReducers } from 'redux';
import { userData } from './Auth';

/* setting initial state for application */
const initState = {
	user: {
		username: 'Default User',
		id: 1,
	},
	activityList: [
		{
			id: 100,
			name: 'Getting yolked',
			description: 'Picking up and setting down heavy things'
		},
		{
			id: 101,
			name: 'Making waffles',
			description: 'Mixing flour, eggs, milk, sugar, water, purple, and ironing it together'
		}
	]
}

/*
writing hardcoded reducers for each part of state initially, refactor this later with a function that
generates the generic types of reducers (boolean switches, complete object rewrites, etc)

read: https://redux.js.org/recipes/reducing-boilerplate#generating-reducers 
*/

/* write immutable array replacement stuff ahhh */
const activityList = (state = initState.activityList, action) => {
	switch (action.type) {
		case 'SET_USER_ACTIVITIES':
			return action.setActivities
		case 'ADD_USER_ACTIVITY':
			return [
				...state,
				action.addActivity
			]
		default:
			return state
	}
}

const widApp = combineReducers({
	userData,
	activityList
})

export default widApp;