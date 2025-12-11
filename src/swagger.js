import swaggerJsDoc from "swagger-jsdoc";
import path from "path";
import { fileURLToPath } from "url";

const __fileName = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__fileName);


/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *
 *   schemas:
 *     Products:
 *       type: object
 *       required:
 *         - product_name
 *         - product_description
 *         - price
 *         - stock
 *       properties:
 *         product_name:
 *           type: string
 *           description: Product name
 *         product_description:
 *           type: string
 *           description: Product description
 *         price:
 *           type: number
 *           format: float
 *           description: Price of the product
 *         stock:
 *           type: number
 *           format: int
 *           description: Units available
 *       example:
 *         product_name: "Yerba Piporé"
 *         product_description: "Paquete de yerba Piporé clásica"
 *         price: 2150
 *         stock: 500
 *
 * @swagger
 *  tags:
 *    - name: Products
 */
// export const swaggerSpec = swaggerJsDoc({
//   definition: {
//     openapi: "3.0.0",
//     info: {
//       title: "TalentoTech - Back-End",
//       version: "1.0.0",
//       description: "TP de Back-end",
//     },
//   },
//   apis: [
//     path.join(__dirname, "routes/*.js"),
//     path.join(__dirname, "routes/*.ts"),
//     path.join(__dirname, "swagger.js"),
//   ],
// });

export const swaggerSpec = swaggerJsDoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "TalentoTech - Back-End",
      version: "1.0.0",
      description: "TP de Back-end",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        }
      }
    },
    security: [
      { bearerAuth: [] }  // 👈 Habilita JWT para TODAS las rutas
    ]
  },
  apis: [
    path.join(__dirname, "routes/*.js"),
    path.join(__dirname, "routes/*.ts"),
    path.join(__dirname, "swagger.js"),
  ],
});

