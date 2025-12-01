import express from 'express';
import { db } from "./src/db/firebase-db.config.js";
import cors from "cors";
import PRODUCT_ROUTER from './src/routes/products.routes.js';

const app = express()
const port = 3000

// const corsConfig = {
//     origin: ['http://localhost:3000', 'https://midominio.com'],
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
//     exposedHeaders: ['Content-Length'],
//     credentials: true,
//     maxAge: 600,
//     optionsSuccessStatus: 204
// }

// app.use(cors(corsConfig))
app.use(express.json());


app.get('/', (req, res) => {
  res.send("Hola vengo a flotar")
})

app.use("/api", PRODUCT_ROUTER)

app.listen(port, () => {
  console.log(`Server corriendo en Puerto: localhost:${port}`)
})