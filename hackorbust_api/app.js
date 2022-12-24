const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.json({
    id: 1,
    title: 'Hello World!'
    })
})

app.listen(port, () => {
  console.log(`HackOrBust API listening on port ${port}`)
})