# talentotech_TP_backEnd

> **Proyecto:** _talentotech_TP_backEnd_
>
> **Curso:** Back-end con Node.js — Talento Tech 2025 · Agencia de Habilidades para el Futuro

---

## Presentación
Este repositorio contiene un **backend en Node.js (JavaScript)** construido como trabajo práctico para el curso **Back-end con Node.js** de **Talento Tech 2025**. El objetivo principal es demostrar una arquitectura clara y didáctica que incluya **routes, controllers, services, middleware, manejo de JWT, y uso de Firebase (Firestore)** como base de datos NoSQL. El proyecto pretende servir como plantilla base y punto de partida para ampliar entidades (clientes, proveedores, órdenes de compra, etc.).

**Agradecimientos:** Nicolás Riquelme · Ana Belén Zambón

**Autor:** [Agustin Marrero](https://github.com/amarrero86mr)

---

## Estructura del proyecto

```
/src
  /controller
    auth.controllers.js
    products.controllers.js

  /data
    data.js
    tokentest.js

  /middleware
    authentication.js

  /models
    db.json
    firebase.js
    products.models.js

  /routes
    auth.routes.js
    products.routes.js

  /services
    product.services.js

  index.js
/package.json
/package-lock.json
```

> Nota: `db.json` puede usarse como mock/local antes de conectar con Firestore.

---

## Tecnologías y dependencias

- Node.js (JavaScript)
- Express
- cors
- dotenv
- firebase (Firestore)
- jsonwebtoken (JWT)
- swagger (swagger-jsdoc / swagger-ui-express)

---

## Requisitos

- Node 16+ (recomendado)
- npm 8+
- Cuenta de Firebase y proyecto configurado (Firestore)

---

## Variables de entorno (`.env`)

Se incluye un archivo de ejemplo `.env.example` en este repositorio. Copiarlo a `.env` y completar con tus credenciales de Firebase y secreto JWT.

```env
# .env.example
PORT=3000
JWT_SECRET=tu_secreto_jwt_aqui
FIREBASE_PROJECT_ID=tu_project_id
FIREBASE_CLIENT_EMAIL=tu_client_email
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
```

> Importante: cuando pegues la `PRIVATE_KEY` en `.env`, asegúrate de escapar saltos de línea o usar comillas para que Node lo lea correctamente.

---

## Scripts útiles (`package.json`)

```json
"scripts": {
  "dev": "nodemon src/index.js",
  "start": "node src/index.js",
  "swagger": "node src/index.js --swagger"
}
```

> Ajusta `dev` según la herramienta que uses (`nodemon`, `ts-node` si fuera TS, etc.).

---

## Uso por consola (`process.argv`) — Flags

Se acepta uso básico por consola con *flags* para ejecutar funciones `GET` desde la línea de comandos. Ejemplos:

```bash
# Obtener todos los productos
node index.js --getAllProducts

# Obtener un producto por id
node index.js --getProduct=123
```

> En `index.js` se debe parsear `process.argv` para detectar las flags `--getAllProducts` y `--getProduct=<id>` y ejecutar las funciones correspondientes del servicio de productos.

---

## Endpoints (documentación básica)

> **Nota:** Los endpoints de `auth` no se documentan en detalle en este README (se considera que existen y manejan login/register), pero sí se incluyen los endpoints de `products` como ejemplo.

### Productos

- `GET /products`  — Listar todos los productos
- `GET /products/:id` — Obtener producto por id
- `POST /products` — Crear producto
- `PUT /products/:id` — Actualizar producto
- `DELETE /products/:id` — Eliminar producto

#### Ejemplo: crear producto (request)

**POST** `/products`

Body (JSON):

```json
{
  "name": "Camiseta",
  "price": 1999,
  "stock": 10,
  "category": "indumentaria"
}
```

Respuesta (201 Created):

```json
{
  "id": "abc123",
  "name": "Camiseta",
  "price": 1999,
  "stock": 10,
  "category": "indumentaria"
}
```

---

## Swagger (Documentación interactiva)

Se incluye `swagger` como dependencia para generar documentación automática. En `index.js` se puede exponer `/docs` o `/api-docs` con `swagger-ui-express`.

Ejemplo básico de activación (pseudocódigo):

```js
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./src/swagger'); // archivo con swagger-jsdoc
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
```

---

## Uso con Postman

Se recomienda crear una colección con los siguientes requests:

- `GET /products` — listar
- `GET /products/:id` — obtener uno
- `POST /products` — crear (body JSON)
- `PUT /products/:id` — actualizar (body JSON)
- `DELETE /products/:id` — borrar

Incluye en la colección un ejemplo de `Authorization` Bearer (JWT) en caso de endpoints protegidos.

> Puedes exportar la colección de Postman y subirla a la carpeta `docs/postman_collection.json`.

---

## Arquitectura (diagrama simple ASCII)

```
Client (browser / Postman / CLI)
    ↓
  Routes
    ↓
  Controllers
    ↓
  Services
    ↓
  Firestore (Firebase)

Middleware (auth, cors, etc.) intercepta entre Routes y Controllers
```

---

## Conexión a Firestore

En `src/models/firebase.js` irán las credenciales y la inicialización del SDK de Firebase para usar Firestore como DB NoSQL.

Pseudocódigo:

```js
const admin = require('firebase-admin');
const serviceAccount = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: "tu-pruyecto-ID",
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: "tu-ID",
    appId: process.env.FIREBASE_APP_ID
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
exports { db };
```

---

## Seguridad y JWT

- Usar `jsonwebtoken` para firmar tokens con `JWT_SECRET` desde `.env`.
- Middleware `authentication.js` debe verificar el `Authorization: Bearer <token>` y setear `req.user`.

---

## Deploy (Vercel - sección lista para completar)

> Vercel funciona con serverless, y puede requerir configuración extra para rutas con Express. Dejo aquí la guía mínima para cuando quieras deployar:

1. Crear cuenta en Vercel y conectar con el repo GitHub `talentotech_TP_backEnd`.
2. Para un servidor Express tradicional es recomendable usar un `start` que exponga `src/index.js` y configurar `vercel.json` si es necesario, o usar la carpeta `api` de Vercel para funciones. Alternativamente, desplegar como aplicación Node en plataformas como Railway / Render que acepten procesos persistentes.
3. Variables de entorno en Vercel: agregar `JWT_SECRET`, `FIREBASE_*`.

> Dejo un placeholder en este README para añadir pasos detallados según la estrategia final (serverless o proceso persistente).

---

## `.gitignore` recomendado

```
node_modules/
.env
dist/
.DS_Store
```

---

## `.env.example`

Se incluye como archivo en el repo. Contenido de ejemplo (repetido desde arriba):

```env
PORT = 3000
JWT_SECRET = tu_secreto_jwt_aqui
FIREBASE_API_KEY = "Tu-api-key",
FIREBASE_AUTH_DOMAIN = "tu_aut-domain",
FIREBASE_STORAGE_BUCKET = "tu-storage-bucket",
FIREBASE_APP_ID = "tu-id-firebase"
```



---

## Próximos pasos sugeridos

1. Completar `src/models/firebase.js` con credenciales reales.
2. Implementar `authentication.js` middleware para proteger rutas.
3. Completar `products.services.js` con lógica de Firestore.
4. Documentar Swagger (`/docs`) con detalles de cada endpoint.
5. Crear y subir colección de Postman a `docs/`.

---
