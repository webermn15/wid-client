import React, { Component } from 'react';
import { UserForm, LoginForm, CreateAccountForm, LoginProps, CreateAccountProps } from './Auth';

export default class App extends Component {
	constructor() {
		super()

		this.state = {
			isLoggingIn: true
		}
	}

	toggleAuthMethod = () => {
		this.setState({isLoggingIn: !this.state.isLoggingIn})
	}

	render() {
		const authMethod = <UserForm {...(this.state.isLoggingIn ? LoginProps : CreateAccountProps)} toggle={this.toggleAuthMethod}/>
		return(
			<div>
				{ authMethod }
			</div>
		)
	}
}