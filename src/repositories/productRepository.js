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

const selectProductById = async (id) => {
    const product = await knex('products').where('id', id).first();

    return product;
    
}

module.exports = {
    insertProduct,
    selectProductById
}