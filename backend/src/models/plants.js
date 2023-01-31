const db = require("../../config");

const findAllPlants = () => {
  return db
    .promise()
    .query("SELECT * FROM plants")
    .then(([res]) => res);
};

const findOnePlant = (id) => {
  return db
    .promise()
    .query("SELECT * FROM plants WHERE id=?", [Number(id)])
    .then(([res]) => res);
};

const updatePlant = (payload, id) => {
  return db
    .promise()
    .query("UPDATE plants SET ? WHERE id=?", [payload, Number(id)]);
};

const deletePlants = (id) => {
  return db
    .promise()
    .query("DELETE FROM plants WHERE id=?", [Number(id)])
    .then(([res]) => res);
};

module.exports = {
  findAllPlants,
  findOnePlant,
  updatePlant,
  deletePlants,
};
