import express from 'express';
import { db } from "./src/db/firebase-db.config.js"
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send("Hola vengo a flotar")
})

app.listen(port, () => {
  console.log(`Server corriendo en Puerto: localhost:${port}`)
  console.log( "DB: " , db)
})