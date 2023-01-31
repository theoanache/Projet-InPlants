const familyModel = require("../models/family");

const familyController = {
  getFamily: (_, res, next) => {
    familyModel
      .findAllFamily()
      .then((family) => res.status(200).send(family))
      .catch((err) => next(err));
  },

  getOneFamily: (req, res, next) => {
    const { id } = req.params;
    familyModel
      .findOneFamily(id)
      .then((family) => {
        if (family.length === 0) {
          res.status(404).send(`Family with ${id} not found`);
        } else {
          res.status(200).send(family[0]);
        }
      })
      .catch((err) => next(err));
  },

  updateFamily: (req, res, next) => {
    const { id } = req.params;
    const familyData = req.body;
    familyModel
      .updateFamily(familyData, id)
      .then((family) => {
        if (family.affectedRows !== 0) {
          res.status(200).send(`Family with ${id} has been updated`);
        } else {
          res.status(400).send(`Error updating family with ${id}`);
        }
      })
      .catch((err) => next(err));
  },

  deleteFamily: (req, res, next) => {
    const { id } = req.params;
    familyModel
      .deleteFamily(id)
      .then((family) => {
        if (family.affectedRows !== 0) {
          res.status(200).send(`Family with ${id} has been deleted`);
        } else {
          res.status(400).send(`Error deleting family with ${id}`);
        }
      })
      .catch((err) => next(err));
  },
};

module.exports = familyController;
