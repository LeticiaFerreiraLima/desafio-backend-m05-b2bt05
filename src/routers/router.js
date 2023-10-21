const express = require('express');
const { getCategories } = require('../controllers/categoriesController');
const { createUser, updateUser, loginUser, getUser } = require('../controllers/userController');
const { createClient, getClients } = require('../controllers/clientController');
const validateToken = require('../middlewares/tokenAuthentication.js');
const { createProduct, getProduct } = require('../controllers/productsController');

const router = express.Router();

router.get('/categories', getCategories);
router.post('/users', createUser);
router.put('/users', validateToken, updateUser);
router.post('/users/login', loginUser);
router.put('/users/:id', validateToken, updateUser);
router.get('/user', validateToken, getUser);//nao adicionei no readme pois fiquei com duvida em '/user'
router.post('/clients', validateToken, createClient);
router.get('/clients', validateToken, getClients);
router.post('/products', validateToken, createProduct);
router.get('/products/:id', validateToken, getProduct)

module.exports = router;