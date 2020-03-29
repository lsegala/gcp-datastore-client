import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showGrowl } from '../actions';
import { loadCases, deleteCase } from '../reducers/cases';
import CaseList from '../components/CaseList';

class VisibleCaseList extends Component {
    componentDidMount(){
        this.props.loadCases();
    }

    render() {
        return <CaseList {...this.props}/>
    }
};

const mapStateToProps = state => ({
    cases: state.cases
});

const mapDispatchToProps = dispatch => ({
    loadCases: () => dispatch(loadCases()),
    deleteCase: (id) => dispatch(deleteCase(id)),
    showMessage: (obj) => dispatch(showGrowl(obj))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VisibleCaseList);