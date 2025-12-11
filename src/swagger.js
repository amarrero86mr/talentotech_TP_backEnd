import swaggerJsDoc from "swagger-jsdoc";
/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *
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
 *           type: integer
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
const swaggerSpec = swaggerJsDoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "TalentoTech - Back-End",
      version: "1.0.0",
      description: "TP de Back-end",
    },
  },
  apis: [
    `${__dirname}/routers/*.js`,
    `${__dirname}/routers/*.ts`,
    `${__dirname}/swagger.js`,
    `${__dirname}/swagger.ts`,
  ],
});

export default swaggerSpec;