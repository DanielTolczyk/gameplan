import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './pages/Home'
import Planner from './pages/Planner'
import Library from './pages/Library'
import Nope from './pages/Nope'


class App extends Component {


  

  render() {

    return (
        <div className='App'>
          <Router>
              <NavBar />
            <Switch>
              <Route exact path='/' component = {Home} />
              <Route exact path='/planner' component = {Planner} />
              <Route exact path='/library' component = {Library} />
              <Route path="*" component = {Nope} />
            </Switch>
          </Router>
        </div>
    );
  }
}


export default App;
