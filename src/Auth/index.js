import AuthContainer from './AuthContainer';
import { userData } from './reducers';

const LoginProps = {
	fetchURL: 'login',
	formTitle: 'Log In:',
	buttonText: 'Log in',
	callToActionText: "Don't have an account?",
	ctaButtonText: "Create"
}

const CreateAccountProps = {
	fetchURL: 'create',
	formTitle: 'Create Account:',
	buttonText: 'Create',
	callToActionText: "Have an account?",
	ctaButtonText: "Log In"
}

export {
	AuthContainer, LoginProps, CreateAccountProps, userData
}