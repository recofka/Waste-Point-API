import Knex from "knex";

export async function seed(knex : Knex) {
    await knex('items').insert([
        {title: 'Lamp', image: 'lamp.svg'},
        {title: 'Batteries', image: 'batteries.svg'},
        {title: 'Paper and Cardboard', image: 'paper-cardboard.svg'},
        {title: 'Electronic Waste', image: 'electronic.svg'},
        {title: 'Organic Waste', image: 'organic.svg'},
        {title: 'Kitchen Oil', image: 'oil.svg'}
    ]);
}