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
    let query = knex('products');

    if (category_id) {
        query = query.where('category_id', category_id);
    }

    const allProducts = await query.select('*');

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

const subtractFromStock = async (stockOfProduct, product_id) => {
    

    const productUpdated = await knex("products")
    .where({ id: product_id })
    .update({ amount: stockOfProduct });
    
    return productUpdated

}
module.exports = {
    insertProduct,
    selectProductById,
    selectAllProducts,
    updateProduct,
    deleteProductById,
    subtractFromStock
}