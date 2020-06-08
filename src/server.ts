import express, { response } from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';
import { errors } from 'celebrate';


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

<<<<<<< HEAD
app.listen(process.env.PORT || 5000);
=======
app.use(errors());
app.listen(3333);
>>>>>>> 6ca6589014fda12198c4c1f918155a5dcde490d6
