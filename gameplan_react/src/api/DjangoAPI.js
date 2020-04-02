const URL = "http://localhost:8000/"


const fetchAllGames = async () => {
  let response = await fetch(`${URL}api/`);
  let data = await response.json();
  return data
}

const fetchGameByID = async (gameId) => {
  let response = await fetch(`${URL}api/${gameId}`)
  let data = await response.json();
  return data
}



const createNewGame = async (gameObject) => {
  console.log('New Game', gameObject)
  const response = await fetch(`${URL}api/new`, {
    'headers': {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    'method': 'POST',
    'body': JSON.stringify(gameObject)
  })
}

const editGame = async (game_detail) => {
  const response = await fetch(`${URL}api/${game_detail['id']}/edit`, {
    'headers': {
      'Content-Type': 'application/json'
    },
    'method': 'POST',
    'body': JSON.stringify(game_detail)
  })
  const data = response.json()
  return data
}

const deleteGame = async (gameId) => {
  const response = await fetch(`${URL}api/${gameId}/delete`,{
    'method': 'POST',
    })
  
}


export default {
  fetchAllGames,
  fetchGameByID,
  createNewGame,
  editGame,
  deleteGame,
} 