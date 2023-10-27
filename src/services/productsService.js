const productRepository = require("../repositories/productRepository");
const categoriesRepository = require("../repositories/categoriesRepository")
const throwCustomError = require("../utils/throwCustomError");
const utils = require("../utils/image");

const createProduct = async (description, amount, price, category_id, product_image) => {
    if (!description || !amount || !price || !category_id)
        throwCustomError("Preencha todos os campos obrigatórios.", 400);

    const categoryExists = await categoriesRepository.selectCategoryById(category_id);
    if (!categoryExists)
        throwCustomError("Não existe a categoria informada.", 404);

    let newProduct = await productRepository.insertProduct(description, amount, price, category_id);

    if (product_image)
        newProduct = await insertImage(product_image, newProduct);

    return newProduct;
};

const getProduct = async (id) => {
    const productExists = await productRepository.selectProductById(id);

    if (!productExists)
        throwCustomError("O produto não foi encontrado", 404);

    const { ...product } = productExists;

    return product;
}

const getAllProducts = async (category_id) => {
    return productRepository.selectAllProducts(category_id);
}

const updateProduct = async (id, description, amount, price, category_id, product_image) => {
    const productExists = await productRepository.selectProductById(id);

    if (!productExists)
        throwCustomError("O produto não foi encontrado", 404);

    if (!description || !amount || !price || !category_id)
        throwCustomError("Preencha todos os campos obrigatórios.", 400);

    const categoryExists = await categoriesRepository.selectCategoryById(category_id);
    if (!categoryExists)
        throwCustomError("Não existe a categoria informada.", 404);

    if (product_image !== productExists.product_image)
        product_image = await alterImage(product_image, productExists.id);

    return await productRepository.updateProduct(id, description, amount, price, category_id, product_image);
};

const deleteProductById = async (id) => {
    const productExists = await productRepository.selectProductById(id);
    if (!productExists)
        throwCustomError("O produto não foi encontrado", 404);

    const image = productExists.product_image;

    if (image)
        await utils.deleteImageFromServer(`${id}`);

    return await productRepository.deleteProductById(id);

};

const insertImage = async (objImage, product) => {
    const { id, description, amount, price, category_id } = product;

    const product_image = await utils.uploadImageFromServer(`${id}`, objImage.buffer, objImage.mimetype);

    return await productRepository.updateProduct(id, description, amount, price, category_id, product_image);
}

const alterImage = async (newImage, id) => {

    let image = null;
    await utils.deleteImageFromServer(`${id}`);

    if (newImage)
        image = await utils.uploadImageFromServer(`${id}`, newImage.buffer, newImage.mimetype);

    return image;
}

module.exports = {
    createProduct,
    getProduct,
    getAllProducts,
    updateProduct,
    deleteProductById
}