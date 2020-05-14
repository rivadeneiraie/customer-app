import React, { Component } from 'react';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom'; //Link,

import HomeContainer from './containers/HomeContainer';
import CustomersContainer from './containers/CustomersContainer';

import './App.css';

class App extends Component {

  renderHomeContainer = () => <h1>Home</h1>;

  renderCustomerContainer = () => <h1>Customer Container</h1>

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
