const db = require("../../config");

const findAllFamily = () => {
  return db
    .promise()
    .query("SELECT * FROM family")
    .then(([res]) => res);
};

const findOneFamily = (id) => {
  return db
    .promise()
    .query("SELECT * FROM family WHERE id=?", [Number(id)])
    .then(([res]) => res);
};

const updateFamily = (payload, id) => {
  return db
    .promise()
    .query("UPDATE family SET ? WHERE id=?", [payload, Number(id)]);
};

const deleteFamily = (id) => {
  return db
    .promise()
    .query("DELETE FROM family WHERE id=?", [Number(id)])
    .then(([res]) => res);
};

module.exports = {
  findAllFamily,
  findOneFamily,
  updateFamily,
  deleteFamily,
};
