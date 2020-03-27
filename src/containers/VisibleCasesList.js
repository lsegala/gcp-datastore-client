import { connect } from 'react-redux';
import CaseList from '../components/CaseList';
import { loadCases } from '../reducers/cases';

const mapStateToProps = state => ({
    cases: state.cases
});

export default connect(
    mapStateToProps
)(CaseList);