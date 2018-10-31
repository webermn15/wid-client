import { connect } from 'react-redux';
import { setUser } from './actions';
import UserForm from './UserForm';

const mapStateToProps = (state, ownProps) => {
	return{}
}

const mapDispatchToProps = {
	setUser
}

const AuthContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(UserForm);

export default AuthContainer;