const knex = require('../database/connection');

const selectAllCategories = async () => {
    const categories = await knex('categories').debug();

    return categories;
};

const selectCategoryById = async (category_id) => {
    const category = await knex('categories').where('id', category_id).first();

    return category;
}

module.exports = {
    selectAllCategories,
    selectCategoryById
};