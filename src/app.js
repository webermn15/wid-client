import React, { Component } from 'react';
import { UserForm, LoginProps, CreateAccountProps, UserContext } from './Auth';
import Landing from './Landing';

export default class App extends Component {
	constructor() {
		super()

		this.state = {
			isLoggingIn: true,
			authenticated: true,
			user: {
				username: 'Default User',
				id: 1,
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
		}
	}

	toggleAuthMethod = () => {
		this.setState({isLoggingIn: !this.state.isLoggingIn})
	}

	render() {
		const authMethod = !this.state.authenticated ? <UserForm {...(this.state.isLoggingIn ? LoginProps : CreateAccountProps)} toggle={this.toggleAuthMethod}/> : null
		const landingDisplay = this.state.authenticated ? <Landing /> : null
		return(
			<div>
				{ authMethod }
				<UserContext.Provider value={this.state.user}>
					{ landingDisplay }
				</UserContext.Provider>
			</div>
		)
	}
}