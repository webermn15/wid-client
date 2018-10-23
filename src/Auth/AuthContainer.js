import { connect } from 'react-redux';
import { setUser } from './actions';
import UserForm from './UserForm';

const mapDispatchToProps = {
	setUser
}

const AuthContainer = connect(
	mapDispatchToProps
)(UserForm);

export default AuthContainer;