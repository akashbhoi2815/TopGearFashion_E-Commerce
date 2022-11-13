const express=require("express");
const { MensDataController } = require("../controller/Men.controller");
const menRouter=express.Router();

menRouter.use(express.json());

menRouter.get("/mensdata",MensDataController.getMenData);

menRouter.get("/menspage",MensDataController.filterdata);

menRouter.get("/mensdata/:brand",MensDataController.getBrand);

menRouter.post("/create",MensDataController.postMensData);

module.exports={menRouter}