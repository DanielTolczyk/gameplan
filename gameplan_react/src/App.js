import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './pages/Home'
import Planner from './pages/Planner'
import Library from './pages/Library'


class App extends Component {


  

  render() {

    return (
      <> 
        <div className='App'>
          <Router>
            <div>
              <NavBar />
              <Route exact path='/' component = {Home} />
              <Route exact path='/library' component = {Library} />
              <Route exact path='/planner' component = {Planner} />
            </div>
          </Router>
        </div>
      </>
    );
  }
}


export default App;
