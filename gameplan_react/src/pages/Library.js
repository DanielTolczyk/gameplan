import React, { Component } from 'react'
import DjangoAPI from '../api/DjangoAPI'
import GameForm from '../components/GameForm'
import GameList from '../components/GameList'


class Library extends Component {
  constructor(props) {
    super(props)
    this.state = {
      games: []
    }
  }

  componentDidMount(){
    DjangoAPI.fetchAllGames()
      .then((apiResponseJSON) => {
        this.setState({
          games: apiResponseJSON['games']
        })
      }
    )
  }

  render () {
    return (
      <div>
        <h1>Game Library</h1>
        <br />
        <GameList games={this.state.games} />
        <br />    
        <GameForm />
      </div>
    )
  }
}




export default Library;