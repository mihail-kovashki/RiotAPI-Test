const http = require('https')
const baseUrl = 'https://euw1.api.riotgames.com/lol/'
const apiKey = '&api_key=RGAPI-c9216659-7bde-45ae-9900-8e79ebf3f0bb'

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
