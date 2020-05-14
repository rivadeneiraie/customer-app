import React, { Component } from 'react';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom'; //Link,

import HomeContainer from './containers/HomeContainer'

import './App.css';

class App extends Component {

  renderCustomerListContainer = () => <h1>Customers Lists Container</h1>;

  renderCustomerNewContainer = () => <h1>Customer New Container</h1>;

  render() {
      return (
        <Router>
          {/* 
              <Link to='/customers'>Customers</Link><br></br>
              <Link to='/customers/30000000'>Customers 30000000</Link>
          </div> */}
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
