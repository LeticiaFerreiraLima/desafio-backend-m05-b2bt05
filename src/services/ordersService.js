const ordersRepository = require('../repositories/ordersRepository');
const productRepository = require('../repositories/productRepository');
const clientRepository = require('../repositories/clientRepository');
const throwCustomError = require('../utils/throwCustomError');

const createOrder = async (client_id, observation, products_order) => {

  if (!client_id || !products_order || products_order.length === 0)
    throwCustomError("Preencha todos os campos obrigatórios.", 400);

  const clientExists = await clientRepository.selectClientById(client_id);

  if (!clientExists) {
    throwCustomError("Não existe o cliente informado.", 404);
  }
  let total_value = 0;
  let product_value = 0;

  for (const product of products_order) {

    if (!product.product_id || !product.amount_product)
      throwCustomError("Preencha todos os campos obrigatórios.", 400);

    const productExists = await productRepository.selectProductById(product.product_id);

    if (!productExists)
      throw new Error(`Produto com ID ${product.product_id} não encontrado.`, 404);

    if (productExists.amount < product.amount_product)
      throw new Error(`A quantidade desejada do produto ${product} não está disponível`, 401);

    product_value = productExists.price * product.amount_product;
    total_value += product_value
  }

  return await ordersRepository.createOrder(client_id, observation, products_order, total_value, product_value);
};

module.exports = {
  createOrder
}