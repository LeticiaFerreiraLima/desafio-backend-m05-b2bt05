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
  
  for (let i = 0; i <  products_order.length; i++) {

    if (!products_order[i].product_id || !products_order[i].amount_product)
      throwCustomError("Preencha todos os campos obrigatórios.", 400);

    let product = products_order[i];

    const productExists = await productRepository.selectProductById(product.product_id);
    
    if (!productExists)
      throwCustomError(`Produto com ID ${product.product_id} não encontrado.`, 400);

    if (productExists.amount < product.amount_product)
      throwCustomError(`A quantidade desejada do produto ${product.product_id} não está disponível`, 400);

    product_value = productExists.price * product.amount_product;

    
    total_value += product_value;

    let stockOfProduct = productExists.amount - product.amount_product

  await ordersRepository.createOrder(client_id, observation, products_order, total_value, product_value);

  await productRepository.subtractFromStock(stockOfProduct, product.product_id);

}
  return
};

module.exports = {
  createOrder
}