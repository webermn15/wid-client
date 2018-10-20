import React, { Component } from 'react';
import ActivityComponent from './ActivityComponent';

export default class Landing extends Component {
	render() {
		return(
			<div>
				<p>Create Activity</p>
				<ActivityComponent />
			</div>
		)
	}
}