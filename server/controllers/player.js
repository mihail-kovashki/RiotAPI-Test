const http = require('https')
const baseUrl = 'https://euw1.api.riotgames.com/lol/'
const apiKey = '?api_key=RGAPI-b28f64e3-76d6-4acb-b36b-41e994bd9889'

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
