import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, withRouter } from 'react-router-dom';
import { SubmissionError } from 'redux-form';

import AppFrame from './../components/AppFrame';
import CustomerData from './../components/CustomerData';
import CustomerEdit from './../components/CustomerEdit';
import { getCustomByDni } from './../selectors/customers';
import { fetchCustomers } from './../actions/fetchCustomers';
import { updateCustomer } from './../actions/updateCustomer';


class CustomerContainer extends Component {

    componentDidMount() {
        if (!this.props.customer){
            this.props.fetchCustomers();
        }
    }

    //se pone return par que funciona el submitting
    handleSubmit = values => {
        const { id } = values;
        return this.props.updateCustomer(id, values) 
             .catch(
                r => {
                    if (r.error) {
                        throw new SubmissionError(r.validation);
                    }
                }
            )
    }

    handleOnSubmitSuccess = () => {
        this.props.history.goBack();
    }

    handleOnBack = () => {
        this.props.history.goBack();
    }

    renderBody = (customer) => (
        <Route path="/customers/:dni/edit" children={
            ( { match } ) => {
                if (customer)
                {
                    const CustomerControl = match ? CustomerEdit: CustomerData;
                    return <CustomerControl 
                                {...customer} 
                                onSubmit={this.handleSubmit} 
                                onSubmitSuccess={this.handleOnSubmitSuccess}
                                onBack={this.handleOnBack}
                            />
                } else {
                    return null
                }
            }

        } />
    )

    render() {
        const { dni, customer } = this.props;
        return (
            <div>
                <AppFrame
                    header={`Cliente ${dni}`}
                    body={this.renderBody(customer)}
                ></AppFrame>
            </div>
        );
    }
}

CustomerContainer.propTypes = {
    dni:PropTypes.string.isRequired,
    customer: PropTypes.object,
    fetchCustomers: PropTypes.func.isRequired,
    updateCustomer: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
    customer: getCustomByDni(state, props) ,
})

export default withRouter(connect(mapStateToProps, { fetchCustomers, updateCustomer })(CustomerContainer));