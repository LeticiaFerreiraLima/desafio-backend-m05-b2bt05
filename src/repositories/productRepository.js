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

};

const selectAllProducts = async (category_id) => {
    const query = await knex('products');

    if (category_id) {
        query.where('category_id', category_id);
    }

    const allProducts = query.select('*');

    return allProducts;
};

const updateProduct = async (id, description, amount, price, category_id) => {

    const productUpdated = await knex('products').where({ id }).update({
        description,
        amount,
        price,
        category_id,
    });

    return productUpdated;
};

const deleteProductById = async (id) => {
    const product = await knex('products').where('id', id).del();

    return product;

};

module.exports = {
    insertProduct,
    selectProductById,
    selectAllProducts,
    updateProduct,
    deleteProductById
}