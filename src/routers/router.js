const express = require('express');
const { getCategories } = require('../controllers/categoriesControllers');
const { createUser, updateUser, loginUser } = require('../controllers/userController');
const router = express.Router();

router.get('/categories', getCategories);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.post('/users/login', loginUser)

module.exports = router;