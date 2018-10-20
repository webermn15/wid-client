import React from 'react';

function ActivityListItem({name, description}) {
	return(
		<li>
			<h4>{ name }:</h4>
			{ description }
		</li>
	)
}

export default ActivityListItem;