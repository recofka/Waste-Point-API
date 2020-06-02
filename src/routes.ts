import express from 'express';
import knex from './dataBase/connection';

const routes = express.Router()

routes.get('/', (request, response) => {
    response.json({ message: 'server on' })
})

routes.get('/items', async (request, response) => {
    const items = await knex('items').select('*');

    const serializedItems = items.map(item => {
        return {
            title: item.title,
            image_url: `http://localhost:3333/uploads/${item.image}`
        };
    });

    return response.json(serializedItems)
})


routes.get('/points', async (request, response) => {
    const points = await knex('points').select('*');
    return response.json(points)
})

export default routes;
