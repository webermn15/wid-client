import { connect } from 'react-redux';
import { setUser, setUserActivities, setUserError } from './actions';
import UserForm from './UserForm';

const mapStateToProps = (state, ownProps) => {
	return{}
}

const mapDispatchToProps = {
	setUser,
	setUserActivities,
	setUserError
}

const AuthContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(UserForm);

export default AuthContainer;