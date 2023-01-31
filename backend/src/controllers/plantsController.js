const plantsModel = require("../models/plants");

const plantsController = {
  getPlants: (_, res, next) => {
    plantsModel
      .findAllPlants()
      .then((plants) => res.status(200).send(plants))
      .catch((err) => next(err));
  },

  getOnePlant: (req, res, next) => {
    const { id } = req.params;
    plantsModel
      .findOnePlant(id)
      .then((plant) => {
        if (plant.length === 0) {
          res.status(404).send(`Plant with ${id} not found`);
        } else {
          res.status(200).send(plant);
        }
      })
      .catch((err) => next(err));
  },

  updatePlant: (req, res, next) => {
    const { id } = req.params;
    const plantsData = req.body;
    plantsModel
      .updatePlant(plantsData, id)
      .then((plant) => {
        if (plant.affectedRows !== 0) {
          res.status(200).send(`Plant with ${id} has been updated`);
        } else {
          res.status(404).send(`Error updaing plant with ${id}`);
        }
      })
      .catch((err) => next(err));
  },

  deletePlant: (req, res) => {
    const { id } = req.params;
    plantsModel.deletePlants(id).then((plant) => {
      if (plant.affectedRows !== 0) {
        res.status(200).send(`Plant with ${id} has been deleted`);
      } else {
        res.status(404).send(`Error deleting plant with ${id}`);
      }
    });
  },
};

module.exports = plantsController;
