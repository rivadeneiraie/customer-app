import React, { Component } from 'react';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom'; //Link,

import HomeContainer from './containers/HomeContainer';
import CustomersContainer from './containers/CustomersContainer';
import CustomerContainer from './containers/CustomerContainer';

import './App.css';

class App extends Component {

  renderHomeContainer = () => <h1>Home</h1>;

  renderCustomerContainer = () => <CustomerContainer></CustomerContainer>

  renderCustomerListContainer = () => <CustomersContainer></CustomersContainer>;

  renderCustomerNewContainer = () => <h1>Customer New Container</h1>;


  render() {
      return (
        <Router>  
          <div className="App">
          <Route exact path='/'               component={HomeContainer}></Route> 
          <Route exact path='/customers'      component={this.renderCustomerListContainer}></Route> 
          <Switch>
              <Route  path='/customers/new'  component={this.renderCustomerNewContainer}></Route> 
              <Route  path='/customers/:dni' component={this.renderCustomerContainer}></Route> 
            </Switch>
          </div>
        </Router>
      );
    }
}

export default App;
