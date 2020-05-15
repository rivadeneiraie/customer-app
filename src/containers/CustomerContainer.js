import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AppFrame from './../components/AppFrame';

class CustomerContainer extends Component {
    render() {
        const { dni } = this.props;
        
        return (
            <div>
                <AppFrame
                    header={`Cliente ${dni}`}
                    body={<p>Datos del cliente</p>}
                ></AppFrame>
            </div>
        );
    }
}

CustomerContainer.propTypes = {
    dni:PropTypes.string.isRequired,
};

export default connect(null, null)(CustomerContainer);