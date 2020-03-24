const express = require('express')

const routes = express.Router()

routes.get('/', (request, response) => {
  return response.json({
    dev: 'Uian Sol',
    text: 'Hello world!'
  })
})

module.exports = routes
