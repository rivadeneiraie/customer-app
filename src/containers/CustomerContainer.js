import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, withRouter } from 'react-router-dom';

import AppFrame from './../components/AppFrame';
import CustomerData from './../components/CustomerData';
import CustomerEdit from './../components/CustomerEdit';
import { getCustomByDni } from './../selectors/customers';
import { fetchCustomers } from './../actions/fetchCustomers';

class CustomerContainer extends Component {

    componentDidMount() {
        if (!this.props.customer){
            this.props.fetchCustomers();
        }
    }

    handleSubmit = values => {
        console.log(JSON.stringify(values));
    }

    handleOnBack = () => {
        this.props.history.goBack();
    }

    renderBody = (customer) => (
        <Route path="/customers/:dni/edit" children={
            ( { match } ) => {
                const CustomerControl = match ? CustomerEdit: CustomerData;
                return <CustomerControl 
                            {...customer} 
                            onSubmit={this.handleSubmit} 
                            onBack={this.handleOnBack}
                        />
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
    customer: PropTypes.object.isRequired,
    fetchCustomers: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
    customer: getCustomByDni(state, props) ,
})

export default withRouter(connect(mapStateToProps, { fetchCustomers })(CustomerContainer));