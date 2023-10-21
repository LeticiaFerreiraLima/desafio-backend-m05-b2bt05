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
  
    const {...product} = productExists;

    return product;
}

module.exports = {
    createProduct,
    getProduct
}