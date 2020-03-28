import { connect } from 'react-redux';
import CaseList from '../components/CaseList';

const mapStateToProps = state => ({
    cases: state.cases
});

export default connect(
    mapStateToProps
)(CaseList);