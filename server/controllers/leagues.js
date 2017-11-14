const http = require('https')
const baseUrl = 'https://euw1.api.riotgames.com/lol/'
const apiKey = '&api_key=RGAPI-6cabd465-4db6-456c-bb6c-5339b9c2b2a1'

module.exports = {
  getChallengerLeague: (req, res) => {
    http.get(`${baseUrl}league/v3/challengerleagues/by-queue/RANKED_SOLO_5x5?${apiKey}`, (response) => {
      let body = ''
      response.on('data', (chunk) => { body += chunk })
      response.on('end', () => {
        res.status(200).send(body)
      })
    })
  }
}
