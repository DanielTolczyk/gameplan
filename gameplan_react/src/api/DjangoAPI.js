const URL = "http://127.0.0.1:8000/"

const fetchAllGames = () => {
  return fetch(`${URL}api/`)
    .then((response) => response.json())
}

const getGame = async (gameId) => {
  let response = await fetch(`${URL}api/${gameId}`)
  let data = await response.json();
  return data
}


const createNewGame = async (name) => {
  const response = await fetch(`${URL}api/new`, {
    'headers': {
      'Content-Type': 'application/json'
    },
    'method': 'POST',
    'body': JSON.stringify(name)
  })
  let data = await response.json()
}

const editGame = async (game_info) => {
  const response = await fetch(`${URL}api/${game_info['id']}/edit/`, {
    'headers': {
      'Content-Type': 'application/json'
    },
    'method': 'POST',
    'body': JSON.stringify(game_info)
  })
  const data = response.json()
  return data
}

const deleteGame = async (gameId) => {
  const response = await fetch(`${URL}api/${gameId}/delete/`)
}


export default {
  fetchAllGames,
  createNewGame,
  getGame,
  editGame,
  deleteGame,
} 