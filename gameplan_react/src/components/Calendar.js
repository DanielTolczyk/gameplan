import React, { Component } from 'react'
import {GOOGLE_API_KEY, CALENDAR_ID}  from "../config.js";


class Calendar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      events: []
    }
  }

  componentDidMount = () => {
    this.getEvents();
  }

  getEvents(){
  }

  

  render(){
    return(
      <div>Calendar Component</div>
    )
  }
}

export default Calendar;