const express = require('express');

const router = express.Router();
const cFoods = require('../handlers/foods');

router.get('/foods/get', cFoods.getFoods.getFoods);
router.get('/foods/searchFood/:title', cFoods.searchFood.searchFood);
router.get('/foods/searchFoodTitle/:title', cFoods.searchFoodTitle.searchFoodTitle);
router.get('/foods/get/:id', cFoods.getOneFood.getOneFood);

module.exports = router;
