import clientsRouter from "./routes/clientsRouter";
import productsRouter from "./routes/productsRouter";
import cartRouter from "./routes/cartsRouter";

const express = require('express');

const app = express();


app.use(express.json());

app.use('/api/', clientsRouter);
app.use('/api/', productsRouter);
app.use('/api/', cartRouter);

export default app;