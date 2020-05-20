import React, { Component } from 'react';

export const setPropsAsInitial = WrapperComponents => (
    class extends Component{
        render(){
            return <WrapperComponents {...this.props} initialValues={this.props} enableReinitialize></WrapperComponents>
        }
    }
);