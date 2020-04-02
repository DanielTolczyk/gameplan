import React, { Component } from 'react'
import DjangoAPI from '../api/DjangoAPI'
import GameForm from '../components/GameForm'
import GameList from '../components/GameList'
import { CardDeck } from 'reactstrap'


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
        <CardDeck>
          <GameList games={this.state.games} />
        </CardDeck>
        <br />    
        <GameForm />
      </div>
    )
  }
}




export default Library;