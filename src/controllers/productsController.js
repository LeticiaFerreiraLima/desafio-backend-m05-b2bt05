const productsService = require('../services/productsService');
const throwCustomError = require("../utils/throwCustomError");

const createProduct = async (req, res) => {
    try {
        const { description, amount, price, category_id } = req.body;

        const productCreated = await productsService.createProduct(description, amount, price, category_id);

        return res.status(201).json(productCreated);
    } catch (error) {
        const { message, code } = error;

        return res.status(code).json({ message: message });
    }
};

module.exports = {
    createProduct
}