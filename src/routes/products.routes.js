import express from "express";
import { addProductControllers, deleteProductControllersById, editProductControllersById, getAllProductsControllers, getProductControllersById } from "../controllers/pruducts.controllers.js";

const PRODUCT_ROUTER = express.Router();

// endPoint obtener productos - product/all

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Returns all products.
 *     security:
 *       - bearerAuth: []
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: the list of products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Products'
 */
PRODUCT_ROUTER.get("/products", getAllProductsControllers);

// endPoint agregar producto - product/

/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Create a new products
 *     security:
 *       - bearerAuth: []
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Products'
 *             example: { "product_name": "Insecticida Raid", "product_description": "Aerosol contra mosquitos y cucarachas 360ml", "stock": 300, "price": 2800 }
 *     responses:
 *       201:
 *         description: Product created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Products'
 *       400:
 *         description: Bad Request
 */
PRODUCT_ROUTER.post("/products", addProductControllers);

// endPoint obtener un producto por id - product/:id

/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     summary: Return a product by ID
 *     security:
 *       - bearerAuth: []
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Products ID
 *     responses:
 *       200:
 *         description: Products found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Products'
 *       404:
 *         description: Products not found
 */
PRODUCT_ROUTER.get("/products/:id", getProductControllersById);

// endPoint editar un producto por id - product/:id

/**
 * @swagger
 * /api/products/{id}:
 *   put:
 *     summary: Create a new product
 *     security:
 *       - bearerAuth: []
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Products ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Products'
 *             example: { "product_name": "Insecticida Raid", "product_description": "Aerosol contra mosquitos y cucarachas 360ml", "stock": 300, "price": 2800 }
 *     responses:
 *       201:
 *         description: Product edited successfully
 *         content:
 *           application/json:
 *             schema:
 *               example: { "product_name": "Insecticida Raid", "product_description": "Aerosol contra mosquitos y cucarachas 360ml", "stock": 300, "price": 2800 }
 *               $ref: '#/components/schemas/Products'
 *       400:
 *         description: Bad Request
 */
PRODUCT_ROUTER.put("/products/:id", editProductControllersById);

// endPoint eliminar un producto por id - product/:id

/**
 * @swagger
 * /api/products/{id}:
 *   delete:
 *     summary: Deleting a product by ID
 *     security:
 *       - bearerAuth: []
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Products ID
 *     responses:
 *       200:
 *         description: Product deleted
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Products'
 *       404:
 *         description: Product not found
 */
PRODUCT_ROUTER.delete("/products/:id", deleteProductControllersById);

export default PRODUCT_ROUTER;