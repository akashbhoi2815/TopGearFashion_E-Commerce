const express=require("express");
const { MensDataController } = require("../controller/Men.controller");
const menRouter=express.Router();

menRouter.use(express.json());

menRouter.get("/mensdata",MensDataController.getMenData);

menRouter.post("/create",MensDataController.postMensData);

module.exports={menRouter}