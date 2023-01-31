const express = require("express");

const familyRouter = express.Router();

const {
  getFamily,
  getOneFamily,
  updateFamily,
  deleteFamily,
} = require("../controllers/familyController");

familyRouter.get("/", getFamily);
familyRouter.get("/:id", getOneFamily);
familyRouter.put("/:id", updateFamily);
familyRouter.delete("/:id", deleteFamily);

module.exports = familyRouter;
