import express from "express";
import { addProductControllers, deleteProductControllersById, editProductControllersById, getAllProductsControllers, getProductControllersById } from "../controllers/pruducts.controllers.js";

const PRODUCT_ROUTER = express.Router();

// endPoint obtener productos - product/all
PRODUCT_ROUTER.get("/products", getAllProductsControllers);

// endPoint agregar producto - product/
PRODUCT_ROUTER.post("/products", addProductControllers);

// endPoint obtener un producto por id - product/:id
PRODUCT_ROUTER.get("/products/:id", getProductControllersById);

// endPoint editar un producto por id - product/:id
PRODUCT_ROUTER.put("/products/:id", editProductControllersById);

// endPoint eliminar un producto por id - product/:id
PRODUCT_ROUTER.delete("/products/:id", deleteProductControllersById);

export default PRODUCT_ROUTER;