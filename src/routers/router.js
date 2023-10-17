const express = require('express');
const { getCategories } = require('../controllers/categoriesControllers');
const { createUser, updateUser, loginUser, getUser } = require('../controllers/userController');
const validateToken = require('../middlewares/tokenAuthentication.js')

const router = express.Router();

router.get('/categories', getCategories);
router.post('/users', createUser);
router.put('/users', validateToken, updateUser);
router.post('/users/login', loginUser);
router.get('/user', validateToken, getUser);

module.exports = router;