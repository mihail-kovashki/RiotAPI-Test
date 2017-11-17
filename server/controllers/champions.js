const http = require('https')
const baseUrl = 'https://euw1.api.riotgames.com/lol/'
const apiKey = '&api_key=RGAPI-c9216659-7bde-45ae-9900-8e79ebf3f0bb'

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
