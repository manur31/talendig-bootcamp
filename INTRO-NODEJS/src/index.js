const express = require('express')
const path = require('path')
const app = express()

const publicDirectoryPath = path.join(__dirname, '../public');

// app.use(express.static(publicDirectoryPath))

app.get('/', (req, res) => {
  res.send('<h1>Hola Mundo</h1>')
})

app.get('/help', (req, res) => {
  res.send('<h1>Pagina de Ayuda</h1>')
})

app.listen(3000, () => {
  console.log("corriendo en https://localhost:3000 ")
})
