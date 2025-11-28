import { Router } from "express";
import { addProductControllers, getAllProducts, getAllProductsControllers } from "../controllers/pruducts.controllers";

export const PRODUCT_ROUTER = Router();

// endPoint product/all
PRODUCT_ROUTER.get("/all", getAllProductsControllers());

// endPoint product/
PRODUCT_ROUTER.post("/", addProductControllers());