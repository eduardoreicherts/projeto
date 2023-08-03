//Importando o arquivo express
const express = require('express');
//Declarando a variavel router
const router = express.Router();
//Importando as funções do clientsController
import clientsController from '../controller/clientsControler'

//Listar usuarios
router.get('/clients', clientsController.listUsers);

//Cadastrar usuarios
router.post('/clients', clientsController.registUsers);

//Editar usuario
router.put('/clients/:id', clientsController.editUser);

//Deletar usuario
router.delete('/clients/:id', clientsController.deleteUser);

//exportando as rotas
export default router;
