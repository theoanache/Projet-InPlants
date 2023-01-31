const express = require("express");

const plantsRouter = express.Router();

const {
  getPlants,
  getOnePlant,
  updatePlant,
  deletePlant,
} = require("../controllers/plantsController");

plantsRouter.get("/", getPlants);
plantsRouter.get("/:id", getOnePlant);
plantsRouter.put("/:id", updatePlant);
plantsRouter.delete("/:id", deletePlant);

module.exports = plantsRouter;
