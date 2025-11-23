import express from 'express';
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send("Hola vengo a flotar")
})

app.listen(port, () => {
  console.log(`Server corriendo en Puerto: localhost:${port}`)
})