const express = require('express');
const { getCategories } = require('../controllers/categoriesControllers');
const router = express.Router();

router.get('/categories', getCategories);

module.exports = router;