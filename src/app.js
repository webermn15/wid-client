import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AuthContainer, UserForm, LoginProps, CreateAccountProps, UserContext } from './Auth';
import Landing from './Landing';

class App extends Component {
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
		const authenticated = !this.props.userData.username ? <AuthContainer {...(this.state.isLoggingIn ? LoginProps : CreateAccountProps)} toggle={this.toggleAuthMethod}/> : <Landing />
		return(
			<div>
				{ authenticated }
			</div>
		)
	}
}

const mapStateToProps = ({userActivityList, userData}) => {
	return{
		userActivityList,
		userData
	}
}

export default connect(mapStateToProps)(App);