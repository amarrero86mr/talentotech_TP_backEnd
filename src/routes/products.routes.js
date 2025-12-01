import express from "express";
import { addProductControllers, getAllProductsControllers, getProductControllersById } from "../controllers/pruducts.controllers.js";

const PRODUCT_ROUTER = express.Router();

// endPoint obtener productos - product/all
PRODUCT_ROUTER.get("/products", getAllProductsControllers);

// endPoint agregar producto - product/
PRODUCT_ROUTER.post("/products", addProductControllers);

// endPoint obtener un producto por id - product/:id
PRODUCT_ROUTER.post("/products/:id", getProductControllersById);


export default PRODUCT_ROUTER;