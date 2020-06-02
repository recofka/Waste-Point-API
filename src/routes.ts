import express from 'express';
import knex from './dataBase/connection';

import PointsController from './controllers/PointsController';

const routes = express.Router()
const pointsController = new PointsController();

routes.get('/', (request, response) => {
    response.json({ message: 'server on' })
})

routes.get('/items', )

routes.post('/points', pointsController.create);



export default routes;
