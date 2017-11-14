const http = require('https')
const baseUrl = 'https://euw1.api.riotgames.com/lol/'
const apiKey = '?api_key=RGAPI-6cabd465-4db6-456c-bb6c-5339b9c2b2a1'

module.exports = {
  getPlayerByAccId: (req, res) => {
    let playerId = req.params.playerId
    http.get(`${baseUrl}summoner/v3/summoners/${playerId}${apiKey}`, (response) => {
      let body = ''
      response.on('data', (chunk) => { body += chunk })
      response.on('end', () => {
        res.status(200).send(body)
        console.log(body)
      })
    })
  },

  getPlayerLeague: (req, res) => {
    let playerId = req.params.playerId
    http.get(`${baseUrl}league/v3/positions/by-summoner/${playerId}${apiKey}`, (response) => {
      let body = ''
      response.on('data', (chunk) => { body += chunk })
      response.on('end', () => {
        res.status(200).send(body)
        console.log(body)
      })
    })
  },

  getPlayerByName: (req, res) => {
    let playerName = req.params.playerName
    http.get(`${baseUrl}summoner/v3/summoners/by-name/${playerName}${apiKey}`, (response) => {
      let body = ''
      response.on('data', (chunk) => { body += chunk })
      response.on('end', () => {
        res.status(200).send(body)
        console.log(body)
      })
    })
  }
}
