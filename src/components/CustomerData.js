import React from 'react';
import PropTypes from 'prop-types';

import CustomersActions from './CustomersActions';

const CustomerData = ({ name, dni, age, onBack, isDeleteAllow, onDelete }) => {
    return (
        <div>
            <div className='customer-data'>
                <h2>Datos del cliente</h2>
                <div>
                    <strong>Nombre<i>{name}</i></strong>
                </div>
                <div>
                    <strong>Dni<i>{dni}</i></strong>
                </div>
                <div>
                    <strong>Agre<i>{age}</i></strong>
                </div>
            </div>
            <CustomersActions>
                <button onClick={onBack}>Volver</button>
                { 
                    isDeleteAllow && <button onClick={onDelete}>Eliminar</button>
                }
            </CustomersActions>
        </div>
    )
}

CustomerData.propTypes = {
    name: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    age: PropTypes.number,
    onBack: PropTypes.func.isRequired,
    isDeleteAllow:PropTypes.bool,
    onDelete:PropTypes.func,
}

export default CustomerData;

