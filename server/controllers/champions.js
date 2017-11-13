const http = require('https')
const baseUrl = 'https://euw1.api.riotgames.com/lol/'
const apiKey = '&api_key=RGAPI-b28f64e3-76d6-4acb-b36b-41e994bd9889'

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
