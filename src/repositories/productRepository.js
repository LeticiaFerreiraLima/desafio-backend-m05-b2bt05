const knex = require('../database/connection');

const insertProduct = async (description, amount, price, category_id) => {
    const newProduct = await knex('products').insert({
        description,
        amount,
        price,
        category_id
    }).returning('*');

    return newProduct;
};

module.exports = {
    insertProduct
}