import React from 'react'
import {
  Card, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap'
import DjangoAPI from '../api/DjangoAPI';


const GameList = ({ games }) => {

  const renderGamesList = () => {
    let gamesListArr = []
    games.map((game, id) => {
      gamesListArr.push(
        <Card key={id}>
          <CardTitle>{game.name}</CardTitle>
          <CardSubtitle>{game.length} {game.player_count}</CardSubtitle>
          <CardBody>{game.description}</CardBody>
          <Button key={id} onClick={() => DjangoAPI.deleteGame(id + 1)}>Delete</Button>
        </Card>
      )
    })
    return gamesListArr
  }
  if (games.length === 0) {
    return (
      <div>Loading...</div>
    )
  }
  return (
    <div>
      {
        renderGamesList()
      }
    </div>
  );
};
export default GameList;