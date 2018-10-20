import React, { Component } from 'react';
import Auth from './Auth';

export default class App extends Component {
	render() {
		const authenticated = <Auth />
		return(
			<div>
				{ authenticated }
			</div>
		)
	}
}