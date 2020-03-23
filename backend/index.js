const express = require('express')

const app = express()

app.get('/', (request, response) => {
  return response.json({
    dev: 'Uian Sol',
    text: 'Hello world!'
  })
})

app.listen(3333)