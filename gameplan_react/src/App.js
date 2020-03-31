import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './pages/Home'
import Planner from './pages/Planner'
import Library from './pages/Library'


class App extends Component {


  

  render() {

    return (
        <div className='App'>
          <Router>
              <NavBar />
              <Route exact path='/' component = {Home} />
              <Route exact path='/planner' component = {Planner} />
              <Route exact path='/library' component = {Library} />
          </Router>
        </div>
    );
  }
}


export default App;
