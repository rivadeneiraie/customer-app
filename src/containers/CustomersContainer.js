import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCustomers } from './../actions/fetchCustomers';
import { getCustomers } from './../selectors/customers';

import AppFrame from './../components/AppFrame';
import CustomersList from './../components/CustomersList';
import CustomersActions from './../components/CustomersActions';


class CustomersContainer extends Component {

    componentDidMount(){
        if (this.props.customers.length === 0)
        {
            this.props.fetchCustomers();
        }
    }

    renderBody= customers => (
        <div>
            <CustomersList 
                customers={customers} 
                urlPath={'Customers/'}
            ></CustomersList>
            <CustomersActions>
                <button onClick={this.handleAddNew}>Nuevo</button>
            </CustomersActions>
        </div>
    )

    handleAddNew = () => {
        this.props.history.push('/customers/new');
    }

    render() {
        return (
            <div>
                <AppFrame
                    header={'Listado de clientes'}
                    body={this.renderBody(this.props.customers)}
                ></AppFrame>
            </div>
        );
    }
}

CustomersContainer.propTypes = {
    fetchCustomers: PropTypes.func.isRequired,
    customers:PropTypes.array.isRequired,
};

CustomersContainer.defaultProps = {
    customers : []
};

const mapStateToProps = state => ({
    customers: getCustomers(state),
});

export default withRouter(connect(mapStateToProps, { fetchCustomers } )(CustomersContainer));
/** considero mejor el mapDispatchToProps */