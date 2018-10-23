import React from 'react';
import UserForm from './UserForm';
import { userData } from './reducers';

const UserContext = React.createContext();

const LoginProps = {
	fetchURL: 'login',
	formTitle: 'Log In:',
	buttonText: 'Log in',
	callToActionText: "Don't have an account?"
}

const CreateAccountProps = {
	fetchURL: 'create',
	formTitle: 'Create Account:',
	buttonText: 'Create',
	callToActionText: "Have an account?"
}

export {
	UserForm, LoginProps, CreateAccountProps, UserContext, userData
}