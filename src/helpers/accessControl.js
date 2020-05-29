import React, { Component } from 'react';
import { connect } from 'react-redux';

export const accessControl = permissionsRequired => WrapperpComponent => {
    const SecuredControl = class extends Component {
        render() {
            const { permissions } = this.props.user;
            const isAllow = permissionsRequired.every(p => permissions.indexOf(p) >= 0);

            if (!isAllow)
            {
                return <div><i>No tiene permiso de acceso</i></div>;
            }
            return <WrapperpComponent {...this.props}></WrapperpComponent>
        }
    }

    return connect(state => ({ user: state.user }), null)(SecuredControl);
}