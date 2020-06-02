import { Request, Response } from 'express';
import knex from '../dataBase/connection';

class PointsController {
    async create(request: Request, response: Response) {
        const {
            name,
            email,
            latitude,
            longitude,
            city,
            items
        } = request.body;
    
        const trx = await knex.transaction();
        const point = {
            image: 'image-fake',
            name,
            email,
            latitude,
            longitude,
            city
        }
        const insertedIds = await trx('points').insert(point);
    
        const point_id = insertedIds[0];
        const pointItems = items.map((item_id: number) => {
            return {
                item_id,
                point_id,
            }
        })
        await trx('point_items').insert(pointItems);
        await trx.commit()
    
        return response.json({ 
            id: point_id,
            ...point,
         });
    };
};

export default PointsController;