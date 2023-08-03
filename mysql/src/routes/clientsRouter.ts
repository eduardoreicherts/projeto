//Importando o arquivo express
const express = require('express');
//Declarando a variavel router
const router = express.Router();
//Importando as funções do userController
import userController from '../controller/clientsControler'

//Listar usuarios
router.get('/users', userController.listUsers);

//Cadastrar usuarios
router.post('/users', userController.registUsers);

//Editar usuario
router.put('/user/:id', userController.editUser);

//Deletar usuario
router.delete('/user/:id', userController.deleteUser);

//exportando as rotas
export default router;
