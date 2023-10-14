const knex = require('../database/connection');

const selectAllCategories = async () => {
    const categories = await knex('categories').debug();

    return categories;
};

module.exports = {
    selectAllCategories
};