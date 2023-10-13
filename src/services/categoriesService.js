const categoryRepository = require('../repositories/categoriesRepository');

const getAllCategories = async () => {
    return await categoryRepository.selectAllCategories();
};

module.exports = {
    getAllCategories
};