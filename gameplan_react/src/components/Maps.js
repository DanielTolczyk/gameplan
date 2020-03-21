import React, { Component } from 'react'
import {GOOGLE_API_KEY, CALENDAR_ID}  from "../config.js";


class Maps extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      events: []
    }
  }

  componentDidMount = () => {
    
  }

  

  

  render(){
    return(
      <div>Maps Component</div>
    )
  }
}

export default Maps;