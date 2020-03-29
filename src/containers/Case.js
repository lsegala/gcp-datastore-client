import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCase, loadCase, newCase, updCase } from '../reducers/case';
import CaseForm from '../components/CaseForm';

class Case extends Component {
    componentDidMount(){
        if(this.props.match?.params?.id){
            this.props.loadCase(this.props.match.params.id);
        }
    }

    render(){
        return (
            <CaseForm {...this.props}/>
        );
    }
}

const mapStateToProps = state => ({
    messages: state.messages,
    form: state.case
});

const mapDispatchToProps = dispatch => ({
    addCase: (form) => dispatch(addCase(form)),
    updCase: (form) => dispatch(updCase(form)),
    loadCase: (id) => dispatch(loadCase(id)),
    newCase: () => dispatch(newCase())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Case);