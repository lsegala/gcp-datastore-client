import { connect } from 'react-redux';
import { showGrowl } from '../actions';
import { addCase } from '../reducers/case';
import CaseForm from '../components/CaseForm';

const mapStateToProps = state => ({
    messages: state.messages,
    form: state.case
});

const mapDispatchToProps = dispatch => ({
    addCase: (form) => dispatch(addCase(form)),
    showMessage: (obj) => dispatch(showGrowl(obj))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CaseForm);