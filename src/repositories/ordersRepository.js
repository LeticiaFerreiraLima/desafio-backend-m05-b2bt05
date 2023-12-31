const knex = require('../database/connection');

const createOrder = async (client_id, observation, products_order, total_value, product_value) => {

  const [order_id] = await knex("orders")
    .insert({
      client_id: client_id,
      observation: observation,
      total_value: total_value
    })
    .returning(["id"]);

  const order_product_rows = products_order.map((product_order) => ({
    order_id: order_id.id,
    product_id: product_order.product_id,
    amount_product: product_order.amount_product,
    product_value: product_value
  }))

  await knex('orders_products').insert(order_product_rows)

  return { order_id, client_id, observation, products_order };
}

const getAllOrders = async () => {
  return await knex('orders')
    .select('*');
}

const getOrdersByIdClient = async (client_id) => {
  return await knex('orders')
    .where('client_id', client_id)
    .select('*');
}

const getOrdersByIdProduct = async (product_id) => {
  const linkedOrders = await knex('orders_products')
    .where('product_id', product_id)

  return linkedOrders.length > 0;
}

module.exports = {
  createOrder,
  getAllOrders,
  getOrdersByIdClient,
  getOrdersByIdProduct
}