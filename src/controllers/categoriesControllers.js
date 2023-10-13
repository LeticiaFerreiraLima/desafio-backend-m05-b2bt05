const categoryService = require('../services/categoriesService');

const getCategories = async ( req, res) => {
    try{
        const categories = await categoryService.getAllCategories();

        return res.status(200).json(categories);
    }catch(error){
        const errorMessage = error.message;

        return res.status(500).json({ errorMessage });
    }
};

module.exports = {
    getCategories
};