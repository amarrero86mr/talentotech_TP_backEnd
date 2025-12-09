import express from 'express';
import cors from "cors";
import PRODUCT_ROUTER from './src/routes/products.routes.js';
import path from "path";
import { fileURLToPath } from 'url';
import VISITORS_ROUTER from './src/routes/visitors.routes.js';

const app = express()
const port = 3000

const __fileName = fileURLToPath(import.meta.url)
const __dirname = path.dirname( __fileName );

const corsConfig = {
    origin: ['http://localhost:3000', 'https://midominio.com'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['Content-Length'],
    credentials: true,
    maxAge: 600,
    optionsSuccessStatus: 204
}

app.use(cors(corsConfig)) 
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,"src/public/")));

app.use(express.static("public"));
app.get('/', (req, res) => { res.redirect("index") })

// Rutas protegidas
app.use("/api", PRODUCT_ROUTER);
app.use("/api/visitors", VISITORS_ROUTER);

app.listen(port, () => {
  console.log(`Server corriendo en Puerto: localhost:${port}`)
})