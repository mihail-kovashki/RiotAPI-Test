const http = require('https')
const baseUrl = 'https://euw1.api.riotgames.com/lol/'
const apiKey = '&api_key=RGAPI-b28f64e3-76d6-4acb-b36b-41e994bd9889'

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
