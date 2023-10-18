const clientService = require('../services/clientService');
const throwCustomError = require("../utils/throwCustomError");
const decodeToken = require('../services/decodeToken');

const createClient = async (req, res) => {
    try{
        const { authorization } = req.headers;
        const { name, email, cpf, adress } = req.body;
    
        const userId = decodeToken(authorization);
    
        const createdClient = await clientService.createClient(name, email, cpf, adress, userId);
    
        return res.status(201).json(createdClient);
    }catch(error){
        const { code, message } = error;

        res.status(code).send({ message: message });
    }
};

module.exports = {
    createClient
};
