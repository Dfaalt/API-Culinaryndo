const express = require("express");
const router = express.Router();
const cFoods = require("../handlers/foods");

router.get("/foods/get", cFoods.getFoods.getFoods);
router.get("/foods/searchFood/:title", cFoods.searchFood.searchFood);

module.exports = router;