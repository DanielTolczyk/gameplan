import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import DjangoAPI from '../api/DjangoAPI';
import { Redirect } from 'react-router'



class GameForm extends Component {


  handleSubmit(event){
    event.preventDefault()
    const gameObject = {
      name: event.target.elements[0].value,
      player_count: event.target.elements[2].value,
      length: event.target.elements[1].value,
      description: event.target.elements[3].value
    }
    DjangoAPI.createNewGame(gameObject)
  }

  render() {
  

    return (
      <div>
        <h2>New Game Submission</h2>
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group controlId="length">
            <Form.Label>Game Length</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group controlId="player_count">
            <Form.Label>Number of Players</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label>Game Description</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}

export default GameForm