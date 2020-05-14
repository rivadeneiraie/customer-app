import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

class App extends Component {

  renderHome = () => <h1>Home</h1>;

  renderCustomerContainer = () => <h1>Customer Container</h1>;

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
            <Route exact path='/'               component={this.renderHome}></Route> 
            <Route exact path='/customers'      component={this.renderCustomerListContainer}></Route> 
            <Route exact path='/customers/:dni' component={this.renderCustomerContainer}></Route> 
            <Route exact path='/customers/new'  component={this.renderCustomerNewContainer}></Route> 
          </div>
        </Router>
      );
    }
}

export default App;
