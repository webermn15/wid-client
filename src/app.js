import React, { Component } from 'react';
import { LoginForm, CreateAccountForm } from './Auth';

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
		const authMethod = this.state.isLoggingIn ? <LoginForm toggle={this.toggleAuthMethod}/> : <CreateAccountForm toggle={this.toggleAuthMethod}/>
		return(
			<div>
				{ authMethod }
			</div>
		)
	}
}