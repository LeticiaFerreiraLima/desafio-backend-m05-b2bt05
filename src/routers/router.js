const express = require('express');
const { getCategories } = require('../controllers/categoriesController');
const { createUser, updateUser, loginUser, getUser } = require('../controllers/userController');
const { createClient } = require('../controllers/clientController');
const validateToken = require('../middlewares/tokenAuthentication.js');

const router = express.Router();

router.get('/categories', getCategories);
router.post('/users', createUser);
router.put('/users', validateToken, updateUser);
router.post('/users/login', loginUser);
router.put('/users/:id', validateToken, updateUser);
router.get('/user', validateToken, getUser);
router.post('/clients', validateToken, createClient)

module.exports = router;