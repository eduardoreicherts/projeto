import app from './app';

const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT || 3000;


app.listen(port, () => console.log(`listeniing at port: ${port}`));