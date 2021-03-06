import React from 'react'

class Nope extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Country: "US",
      Slug: "us",
      NewConfirmed: 0,
      TotalConfirmed: 0,
      NewDeaths: 0,
      TotalDeaths: 0,
      NewRecovered: 0,
      TotalRecovered: 0
    }
  }

  componentDidMount() {
    fetch("")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            Country: "US",
            Slug: "us",
            NewConfirmed: 0,
            TotalConfirmed: 0,
            NewDeaths: 0,
            TotalDeaths: 0,
            NewRecovered: 0,
            TotalRecovered: 0
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
        <h1>{this.state.quote}</h1>
      </div>
    )
  }
}

export default Nope