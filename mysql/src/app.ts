//Iportando o arquivo router
import userRouter from "./routes/clientsRouter";

//Importar o pacote express para criar o servidor servidor
const express = require('express');
//Instancia o express na variável app
const app = express();

//Para o express utilizar o JSON
app.use(express.json());

//Para o app usar o router
app.use('/api/', userRouter);

//Exportando o app para o server.ts
export default app;