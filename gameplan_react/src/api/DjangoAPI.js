const URL = "http://127.0.0.1:8000/"

const getAllGames = async () => {
  let res = await fetch(`${URL}api/games/`);
  let data = await res.json();
  return data
}

const getGame = async (gameId) => {
  let res = await fetch(`${URL}api/game/${gameId}/detail/`)
  let data = await res.json();
  return data
}


const createNewGame = async (name) => {
  const res = await fetch(`${URL}api/games/create/`, {
    'headers': {
      'Content-Type' : 'application/json'
    },
    'method': 'POST',
    'body' : JSON.stringify(name)
  })
  let data = await res.json()
}

const editGame = async (game_info) => {
  const res = await fetch(`${URL}api/game/${game_info['id']}/edit/`, {
    'headers': {
      'Content-Type' : 'application/json'
    },
    'method': 'POST',
    'body' : JSON.stringify(game_info)
  })
  const data = res.json()
  return data
}

const deleteGame = async (gameId) => {
  const res = await fetch(`${URL}api/game/${gameId}/delete/`)
}


export default {
  getAllGames,
  createNewGame,
  getGame,
  editGame,
  deleteGame,
} 