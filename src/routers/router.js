const express = require('express');
const { getCategories } = require('../controllers/categoriesControllers');
const { createUser } = require('../controllers/userController');
const router = express.Router();

router.get('/categories', getCategories);
router.post('/users', createUser);

module.exports = router;