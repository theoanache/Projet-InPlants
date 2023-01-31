const express = require("express");
const plantsRouter = require("./plantsRouter");
const familyRouter = require("./familyRouter");

const router = express.Router();

router.use("/plants", plantsRouter);
router.use("/family", familyRouter);

module.exports = router;
