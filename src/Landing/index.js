import React, { Component } from 'react';
import * as actExports from './Activities';

export default class Landing extends Component {
	render() {
		return(
			<div>
				<button>Create Activity</button>
				<actExports.ActivityContainer />
			</div>
		)
	}
}

export { actExports }