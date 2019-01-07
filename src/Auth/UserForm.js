import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class UserForm extends Component {
	static propTypes = {
		toggle: PropTypes.func.isRequired,
		fetchURL: PropTypes.string.isRequired,
		formTitle: PropTypes.string.isRequired,
		buttonText: PropTypes.string.isRequired,
		callToActionText: PropTypes.string.isRequired
	}
	
	state = {
		username: '',
		password: ''
	}

	handleChange = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}

	submitForm = async () => {
		try {
			const response = await fetch('http://localhost:8000/'+this.props.fetchURL, {
				method: 'POST',
				body: JSON.stringify(this.state),
				headers: {
					'Content-Type': 'application/json'
				}
			})
			if (!response.ok) {
				throw new Error('yeet')
			}
			const {user, userActivities} = await response.json()
			this.props.setUser(user)
			this.props.setUserActivities(userActivities)
		} catch (error) {
			this.props.setUserError(error)
		}
	}

	render() {
		return(
			<div>
				<h3>{this.props.formTitle}</h3>
				<p>{}
				<input name="username" type="text" placeholder="Username" onChange={e => this.handleChange(e)}/>
				<input name="password" type="password" placeholder="Password" onChange={e => this.handleChange(e)}/>
				<button onClick={() => this.submitForm()}>{this.props.buttonText}</button>
				<div>{this.props.callToActionText} <button onClick={() => this.props.toggle()}>{this.props.ctaButtonText}</button></div>
			</div>
		)
	}
}