import express from "express";
import { addRegisterVisitorControllers, getLoginController } from "../controllers/visitors.controllers.js";


const VISITORS_ROUTER = express.Router();

VISITORS_ROUTER.post("/register", addRegisterVisitorControllers);


VISITORS_ROUTER.post("/login", async (req, res) => {
  const credentials = req.body;

  const result = await getLoginController(credentials);
  //console.log("router: ",result);

  if (result.status) {
    return res.status(result.status).json(result);
  }

  return res.status(200).json(result);
});


export default VISITORS_ROUTER;