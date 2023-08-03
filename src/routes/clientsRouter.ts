const express = require('express');

const router = express.Router();

import clientsController from '../controller/clientsController'

router.get('/clients', clientsController.listUsers);

router.post('/clients', clientsController.registUsers);

router.put('/clients/:id', clientsController.editUser);

router.delete('/clients/:id', clientsController.deleteUser);

export default router;
