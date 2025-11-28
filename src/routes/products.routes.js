import { Router } from "express";
import { getAllProducts } from "../controllers/pruducts.controllers";

export const PRODUCT_ROUTER = Router();

PRODUCT_ROUTER.get("/all", getAllProducts());