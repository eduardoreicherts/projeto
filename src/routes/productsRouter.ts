//Importando o arquivo express
const express = require('express');
//Declarando a variavel router
const router = express.Router();
//Importando as funções do productsController
import productsController from '../controller/productController'

//Listar usuarios
router.get('/products', productsController.listUsers);

//Cadastrar usuarios
router.post('/products', productsController.registUsers);

//Editar usuario
router.put('/products/:id', productsController.editUser);

//Deletar usuario
router.delete('/products/:id', productsController.deleteUser);

//exportando as rotas
export default router;
