import React from 'react'
import Kanye from '../images/KanyeWes-tgif.gif'

class Nope extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quote: ""
    }
  }

  componentDidMount() {
    fetch("https://api.kanye.rest")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            quote: result.quote
          });
        },
      )
  }

  render() {
    console.log(this.state.quote)
    return (
      <div>
        <br />
        <h2>That page does not exist...</h2>
        <br />
        <img src={Kanye}></img>
        <br/>
        <h1>{this.state.quote}</h1>
      </div>
    )
  }
}

export default Nope