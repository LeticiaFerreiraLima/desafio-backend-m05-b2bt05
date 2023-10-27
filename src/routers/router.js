const express = require('express');
const { getCategories } = require('../controllers/categoriesController');
const { createUser, updateUser, loginUser, getUser } = require('../controllers/userController');
const { createClient, getClients, updateClient } = require('../controllers/clientController');
const validateToken = require('../middlewares/tokenAuthentication.js');
const { createProduct, getProduct, getAllProducts, updateProduct, deleteProductById } = require('../controllers/productsController');
const { createOrder } = require('../controllers/ordersController')
const multer = require('../multer');

const router = express.Router();

router.get('/categoria', getCategories);
router.post('/usuario', createUser);
router.put('/usuario', validateToken, updateUser);
router.post('/login', loginUser);
router.put('/usuario/:id', validateToken, updateUser);
router.get('/usuario', validateToken, getUser);
router.post('/cliente', validateToken, createClient);
router.get('/cliente', validateToken, getClients);
router.put('/cliente/:id', validateToken, updateClient);
router.post('/produto', validateToken, multer.single('file'), createProduct);
router.get('/produto/:id', validateToken, getProduct);
router.get('/produto', validateToken, getAllProducts)
router.put('/produto/:id', validateToken, multer.single('file'), updateProduct);
router.delete('/produto/:id', validateToken, deleteProductById)
router.post('/pedido', validateToken, createOrder);


module.exports = router;