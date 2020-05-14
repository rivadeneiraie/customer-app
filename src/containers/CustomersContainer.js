import React, { Component } from 'react';

import AppFrame from './../components/AppFrame';
import CustomersList from './../components/CustomersList';
import CustomersActions from './../components/CustomersActions';

const customers = [
    {
        'dni': '27000000',
        'name': 'Juan Perez',
        'age': 37,
    },
    {
        'dni': '30000000',
        'name': 'Otro',
        'age': 35,
    },
    {
        'dni': '33000000',
        'name': 'Luis Martinez',
        'age': 32,
    },
];

class CustomersContainer extends Component {

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
        console.log("Agregar nuevo");
    }

    render() {
        return (
            <div>
                <AppFrame
                    header={'Listado de clientes'}
                    body={this.renderBody(customers)}
                ></AppFrame>
            </div>
        );
    }
}

CustomersContainer.propTypes = {

};

export default CustomersContainer;