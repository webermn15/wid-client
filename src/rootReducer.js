import { combineReducers } from 'redux';
import { userData } from './Auth';
import { userActivityList } from './Landing/Activities';

/* setting initial state for application
const initState = {
	userData: {
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


writing hardcoded reducers for each part of state initially, refactor this later with a function that
generates the generic types of reducers (boolean switches, complete object rewrites, etc)

read: https://redux.js.org/recipes/reducing-boilerplate#generating-reducers 
*/

const widApp = combineReducers({
	userData,
	userActivityList
})

export default widApp;