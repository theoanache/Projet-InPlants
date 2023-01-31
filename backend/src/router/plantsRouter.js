const express = require("express");

const plantsRouter = express.Router();

const { getPlants, getOnePlant } = require("../controllers/plantsController");

plantsRouter.get("/", getPlants);
plantsRouter.get("/:id", getOnePlant);

module.exports = plantsRouter;
