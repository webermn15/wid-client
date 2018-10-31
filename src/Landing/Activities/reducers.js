const defaultActivities = [
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

/* write immutable array replacement stuff ahhh */
export const userActivityList = (state = defaultActivities, action) => {
	switch (action.type) {
		case 'SET_USER_ACTIVITIES':
			return action.activities
		case 'ADD_USER_ACTIVITY':
			return [
				...state,
				action.activity
			]
		default:
			return state
	}
}