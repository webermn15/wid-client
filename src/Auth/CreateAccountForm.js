import React, { Component } from 'react';

export default class CreateAccountForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			username: '',
			password: ''
		}
	}

	handleChange = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}

	submitLogin = async () => {
		try {
			const response = await fetch('http://localhost:8000/create', {
				method: 'POST',
				body: JSON.stringify(this.state),
				headers: {
					'Content-Type': 'application/json'
				}
			})
			const json = await response.json()
			console.log(json)
		} catch (error) {
			console.log(error)
		}
	}

	render() {
		return(
			<div>
				<h3>Create Account</h3>
				<input name="username" type="text" placeholder="Username" onChange={e => this.handleChange(e)}/>
				<input name="password" type="password" placeholder="Password" onChange={e => this.handleChange(e)}/>
				<button onClick={() => this.submitLogin()}>Create Account</button>
				<div>Have an account? <button onClick={() => this.props.toggle()}>Log in</button></div>
			</div>
		)
	}
}