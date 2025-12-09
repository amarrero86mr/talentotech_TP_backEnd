import express from "express";
import { addRegisterVisitorControllers } from "../controllers/visitors.controllers.js";


const VISITORS_ROUTER = express.Router();

VISITORS_ROUTER.post("/register", addRegisterVisitorControllers);
// VISITORS_ROUTER.get("/login");




export default VISITORS_ROUTER;