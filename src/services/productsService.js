const productRepository = require('../repositories/productRepository');
const categoriesRepository = require('../repositories/categoriesRepository')
const throwCustomError = require('../utils/throwCustomError');

const createProduct = async (description, amount, price, category_id) => {
    if (!description || !amount || !price || !category_id)
        throwCustomError("Preencha todos os campos obrigatórios.", 400);

    const categoryExists = await categoriesRepository.selectCategoryById(category_id);

    if (!categoryExists)
        throwCustomError("Não existe a categoria informada.", 404);


    return await productRepository.insertProduct(description, amount, price, category_id);
};

const getProduct = async (id) => {
    const productExists = await productRepository.selectProductById(id);

    console.log(productExists)

    if (!productExists)
        throwCustomError("O produto não foi encontrado", 404);

    const { ...product } = productExists;

    return product;
}

const getAllProducts = async (category_id) => {
    return productRepository.selectAllProducts(category_id);
}

const updateProduct = async (id, description, amount, price, category_id) => {
    const productExists = await productRepository.selectProductById(id);

    if (!productExists)
        throwCustomError("O produto não foi encontrado", 404);


    if (!description || !amount || !price || !category_id)
        throwCustomError("Preencha todos os campos obrigatórios.", 400);

    const categoryExists = await categoriesRepository.selectCategoryById(category_id);

    if (!categoryExists)
        throwCustomError("Não existe a categoria informada.", 404);

    return await productRepository.updateProduct(id, description, amount, price, category_id);

};

const deleteProductById = async (id) => {
    const productExists = await productRepository.selectProductById(id);

    if (!productExists)
        throwCustomError("O produto não foi encontrado", 404);

    return await productRepository.deleteProductById(id);

};

module.exports = {
    createProduct,
    getProduct,
    getAllProducts,
    updateProduct,
    deleteProductById
}