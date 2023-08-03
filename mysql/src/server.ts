//Importando o app do app.ts
import app from './app';
//Importando o dotenv
const dotenv = require('dotenv');
//Chamando a função config do dotenv
dotenv.config();
//Declarando a variavel da porta
const port = process.env.PORT || 3000;

//Iniciar servidor
app.listen(port, () => console.log(`listeniing at port: ${port}`));