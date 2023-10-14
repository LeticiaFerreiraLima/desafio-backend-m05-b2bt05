const express = require('express');
const { getCategories } = require('../controllers/categoriesControllers');
const { createUser, updateUser } = require('../controllers/userController');
const router = express.Router();

router.get('/categories', getCategories);
router.post('/users', createUser);
router.put('/users/:id', updateUser);

module.exports = router;