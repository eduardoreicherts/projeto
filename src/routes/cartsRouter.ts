const express = require('express');

const router = express.Router();

import cartController from '../controller/cartsController';


router.get('/carts', cartController.listUsers);

router.post('/carts', cartController.registUsers);

router.put('/cart/:id', cartController.editUser);

router.delete('/cart/:id', cartController.deleteUser);


export default router;
