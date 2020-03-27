import { connect } from 'react-redux';
import { showGrowl } from '../actions';
import { loginAction } from '../reducers/login';
import LoginForm from '../components/LoginForm';

const mapStateToProps = state => ({
    login: state.login
});

const mapDispatchToProps = dispatch => ({
    onClick: (obj) => dispatch(loginAction(obj)),
    showMessage: (obj) => dispatch(showGrowl(obj))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);