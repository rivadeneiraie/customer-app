import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form';

import AppFrame from './../components/AppFrame';
import CustomerEdit from './../components/CustomerEdit';
import { insertCustomer } from './../actions/insertCustomer';

class NewCustomerContainer extends Component {

    newCustomer = {
        id:"",
        name:"", 
        dni:"", 
        age:0,
    }

    handleSubmit = (values) => {
        return this.props.insertCustomer(values)
        .catch(
            r => {
                if (r.error) {
                    throw new SubmissionError(r.validation);
                }
            }
        );
             
    }

    handleOnSubmitSuccess = () => {
        this.props.history.goBack();
    }   

    handleOnBack = () => {
        this.props.history.goBack();
    }   

    renderBody = () => {
        return (
                <CustomerEdit
                    {...this.newCustomer}
                    onSubmit={this.handleSubmit}
                    onSubmitSuccess={this.handleOnSubmitSuccess}
                    onBack={this.handleOnBack}
                ></CustomerEdit>
            )
    }

    render() {
        return (
            <div>
                <AppFrame
                    header={'Nuevo cliente'}
                    body={this.renderBody()}
                ></AppFrame>
            </div>
        );
    }
}

NewCustomerContainer.propTypes = {
    insertCustomer:PropTypes.func.isRequired,
};

export default withRouter(connect(null, { insertCustomer })(NewCustomerContainer));