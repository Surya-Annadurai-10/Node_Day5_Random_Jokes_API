const express = require("express");
const getJoke = require("../controllers/control.js")

const router = express.Router();

router.get("/random" , getJoke)

module.exports = router