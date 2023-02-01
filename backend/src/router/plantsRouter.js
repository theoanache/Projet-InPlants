const express = require("express");

const plantsRouter = express.Router();

const {
  getPlants,
  getOnePlant,
  addPlant,
  updatePlant,
  deletePlant,
} = require("../controllers/plantsController");

plantsRouter.get("/", getPlants);
plantsRouter.get("/:id", getOnePlant);
plantsRouter.post("/", addPlant);
plantsRouter.put("/:id", updatePlant);
plantsRouter.delete("/:id", deletePlant);

module.exports = plantsRouter;
