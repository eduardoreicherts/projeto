import app from './app';
import {config} from 'dotenv';

config();

const port = process.env.PORT || 3333;

app.listen(port, () => console.log('listenning at port ' + port));