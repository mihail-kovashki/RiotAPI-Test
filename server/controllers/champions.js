const http = require('https')
const baseUrl = 'https://euw1.api.riotgames.com/lol/'
const apiKey = '&api_key=RGAPI-6cabd465-4db6-456c-bb6c-5339b9c2b2a1'

module.exports = {
  getAllChampions: (req, res) => {
    http.get(`${baseUrl}static-data/v3/champions?locale=en_US&dataById=false${apiKey}`, (response) => {
      let body = ''
      response.on('data', (chunk) => { body += chunk })
      response.on('end', () => {
        console.log(body)
        res.status(200).send(body)
      })
    })
  }
}
