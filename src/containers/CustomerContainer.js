import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AppFrame from './../components/AppFrame';
import { getCustomByDni } from './../selectors/customers';

class CustomerContainer extends Component {
    render() {
        const { dni } = this.props;
        
        return (
            <div>
                <AppFrame
                    header={`Cliente ${dni}`}
                    body={<p>Datos del cliente "{this.props.customer.name}"</p>}
                ></AppFrame>
            </div>
        );
    }
}

CustomerContainer.propTypes = {
    dni:PropTypes.string.isRequired,
    customer: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
    customer: getCustomByDni(state, props) ,
})

export default connect(mapStateToProps, null)(CustomerContainer);