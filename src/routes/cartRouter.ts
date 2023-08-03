const express = require('express');

const router = express.Router();

import cartController from '../controller/cartController'


router.get('/cart', cartController.listUsers);

router.post('/cart', cartController.registUsers);

router.put('/cart/:id', cartController.editUser);

router.delete('/cart/:id', cartController.deleteUser);


export default router;
