const express=require("express");
const { WomensDataController } = require("../controller/Women.controller");

const womenRouter=express.Router();

womenRouter.use(express.json());

womenRouter.get("/womensdata",WomensDataController.getWomenData);

womenRouter.post("/post",WomensDataController.postWomensData);

module.exports={womenRouter}