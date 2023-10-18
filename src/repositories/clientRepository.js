const knex = require('../database/connection');

const insertClient = async (name, email, cpf, adress) => {
    const newClient = await knex('clients').insert({
        name,
        email,
        cpf,
        adress
    }).returning('*');

    return newClient;
};

const selectClientByEmail = async (email) => {
    const client = await knex('clients').where('email', email).first();

    return client;
};

const selectClientByCpf = async (cpf) => {
    const client = await knex('clients').where('cpf', cpf).first();

    return client;
};

module.exports = {
    insertClient,
    selectClientByEmail,
    selectClientByCpf
}