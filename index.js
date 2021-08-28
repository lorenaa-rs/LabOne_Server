const express = require('express')
const app = express()
const port = 3000

app.get('/status', (req, res) => {
  res.send('OK')
})

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`)
})
