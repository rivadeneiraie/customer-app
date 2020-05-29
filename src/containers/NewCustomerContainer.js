import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {  withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import AppFrame from './../components/AppFrame';
import CustomerEdit from './../components/CustomerEdit';

class NewCustomerContainer extends Component {

    newCustomer = {
        id:"",
        name:"", 
        dni:"", 
        age:0,
    }

    handleSubmit = () => {

    }

    handleOnSubmitSuccess = () => {
        
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

};

export default withRouter(connect(null, null)(NewCustomerContainer));