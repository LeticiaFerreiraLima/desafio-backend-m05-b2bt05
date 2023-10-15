const jwt = require('jsonwebtoken');
const passwordJwt = require('../passwordJwt');

const validateToken = async (req, res, next) => {
    const { authorizarion } = req.headers;

    if (!authorizarion) {
        return res.status(401).json({ message: 'Para acessar o recurso, deve ser enviado um token de autenticação válido.' });
    };

    const token = authorization.split(' ')[1];

    try {
        const { id } = jwt.verify(token, senhajwt);

        const userFound = await knex('users').where({ id }).first();

        if (!userFound) {
            return res.status(404).json({ message: 'User not found' });
        };

        const { password, ...user } = rows[0];

        req.user = user;

        next();
        
    } catch (error) {
        return res.status(400).json(error.message)
    }
}

module.exports = validateToken;
