const express = require("express");
const plantsRouter = require("./plantsRouter");

const router = express.Router();

router.use("/plants", plantsRouter);

module.exports = router;
