import React from 'react';
import ActivityList from './ActivityList';
import { UserContext } from '../Auth';

function ActivityComponent(props) {
	return(
		<UserContext.Consumer>
			{user => (
				<ActivityList {...user} />
			)}
		</UserContext.Consumer>
	)
}

export default ActivityComponent;