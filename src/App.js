import React, { Component } from 'react';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom'; //Link,

import HomeContainer from './containers/HomeContainer';
import CustomersContainer from './containers/CustomersContainer';
import CustomerContainer from './containers/CustomerContainer';
import NewCustomerContainer from './containers/NewCustomerContainer';

import './App.css';

class App extends Component {

  renderHomeContainer = () => <HomeContainer></HomeContainer>;

  renderCustomerContainer = (dni) => <CustomerContainer dni={dni}></CustomerContainer>

  renderCustomerListContainer = () => <CustomersContainer></CustomersContainer>;

  renderCustomerNewContainer = () => <NewCustomerContainer></NewCustomerContainer>;


  render() {
      return (
        <Router>  
          <div className="App">
          <Route exact path='/'               component={this.renderHomeContainer}></Route> 
          <Route exact path='/customers'      component={this.renderCustomerListContainer}></Route> 
          <Switch>
              <Route  path='/customers/new'  component={this.renderCustomerNewContainer}></Route> 
              <Route  path='/customers/:dni' render={props => this.renderCustomerContainer(props.match.params.dni)}></Route> 
          </Switch>
          </div>
        </Router>
      );
    }
}

export default App;
