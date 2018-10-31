import React from 'react';
import ActivityListItem from './ActivityListItem';

function ActivityList({userActivityList}) {
	return(
		<ul>
			{
				userActivityList.map((act, i) => (
					<ActivityListItem key={act.id} {...act} />
				))
			}
		</ul>
	)
}

export default ActivityList;