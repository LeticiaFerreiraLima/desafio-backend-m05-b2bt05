const knex = require('../database/connection');

const selectAllCategories = async () => {
    const categories = await knex('categorias').debug();

    return categories;
};

module.exports = {
    selectAllCategories
};