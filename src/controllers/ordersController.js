const ordersService = require('../services/ordersService');
const throwCustomError = require("../utils/throwCustomError");


const createOrder = async (req, res) => {
    const { client_id, observation, products_order } = req.body;

    try {
        const order = await ordersService.createOrder(client_id, observation, products_order);

        res.status(201).json(order)

    } catch (error) {
        const { message, code } = error;

        return res.status(code).json({ message: message });
    }

}

const getOrders = async (req, res) => {
    try {
        const { client_id } = req.query;
        let orders;

        if (client_id)
            orders = await ordersService.getOrdersByIdClient(client_id);

        if (!client_id)
            orders = await ordersService.getAllOrders();


        res.status(200).json(orders)

    } catch (error) {
        const { message, code } = error;

        return res.status(code).json({ message: message });
    }
}

module.exports = {
    createOrder,
    getOrders
}