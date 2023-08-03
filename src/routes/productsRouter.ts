const express = require('express');

const router = express.Router();

import productsController from '../controller/productsController';


router.get('/products', productsController.listUsers);

router.post('/products', productsController.registUsers);

router.put('/product/:id', productsController.editUser);

router.delete('/product/:id', productsController.deleteUser);

export default router;
