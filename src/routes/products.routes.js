import { Router } from "express";
import { addProductControllers, getAllProducts, getAllProductsControllers, getProductControllersById } from "../controllers/pruducts.controllers";

export const PRODUCT_ROUTER = Router();

// endPoint obtener productos - product/all
PRODUCT_ROUTER.get("/all", getAllProductsControllers);

// endPoint agregar producto - product/
PRODUCT_ROUTER.post("/", addProductControllers);

// endPoint obtener un producto por id - product/:id
PRODUCT_ROUTER.post("/:id", getProductControllersById);