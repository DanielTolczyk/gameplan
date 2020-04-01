import React, { Component } from 'react'
import Calendar from '../components/Calendar'
import Maps from '../components/Maps'

class Planner extends Component {


  render() {
    return (
      <div>
        <h1>Planner Page</h1>
        <Calendar />
        <Maps />
      </div>
    )
  }
}




export default Planner;