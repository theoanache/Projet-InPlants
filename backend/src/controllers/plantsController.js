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

  GetPlantByFamily: (req, res, next) => {
    const { id } = req.params;
    plantsModel
      .findAllPlants(id)
      .then((plant) => {
        if (plant.length === 0) {
          res.status(404).send(`Plant with ${id} not found`);
        } else {
          res.send(plant[0]);
        }
      })
      .catch((err) => next(err));
  },

  addPlant: (req, res, next) => {
    const plantsData = req.body;
    plantsModel
      .createPlant(plantsData)
      .then((plant) => {
        if (plant.affectedRows !== 0) {
          res.status(201).send(`Plant has been created`);
        } else {
          res.status(404).send(`Error creating plant`);
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
          res.status(404).send(`Error updating plant with ${id}`);
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
