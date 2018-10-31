import React from 'react';
import ActivityListItem from './ActivityListItem';

function ActivityList({activityList}) {
	return(
		<ul>
			{
				activityList.map((act, i) => (
					<ActivityListItem key={act.id} {...act} />
				))
			}
		</ul>
	)
}

export default ActivityList;