const express = require('express');

const router = express.Router();

import productsController from '../controller/productController'

router.get('/products', productsController.listUsers);

router.post('/products', productsController.registUsers);

router.put('/products/:id', productsController.editUser);

router.delete('/products/:id', productsController.deleteUser);

export default router;
