const clientService = require('../services/clientService');
const throwCustomError = require("../utils/throwCustomError");

const createClient = async (req, res) => {
    try {
        const { name, email, cpf, adress } = req.body;

        const createdClient = await clientService.createClient(name, email, cpf, adress);

        return res.status(201).json(createdClient);
    } catch (error) {
        const { code, message } = error;

        return res.status(code).send({ message: message });
    }
};

const getClients = async (req, res) => {
    try {
        const clients = await clientService.getClients();

        return res.status(200).json(clients);
    } catch (error) {
        const { code, message } = error;

        return res.status(code).send({ message: message });
    }
};

const updateClient = async (req, res) => {
    const { name, email, cpf, adress } = req.body;
    const { id } = req.params;

    try {
        await clientService.updateClient(name, email, cpf, adress, id);

        return res.status(204).send();

    } catch (error) {

        const { code, message } = error;

        return res.status(code).json({ message: message });
    }
}
module.exports = {
    createClient,
    getClients,
    updateClient
};
